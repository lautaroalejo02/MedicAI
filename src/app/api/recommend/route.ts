import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import OpenAI from 'openai';
import axios from 'axios';

interface SymptomDetail {
  descriptionEn: string;
  descriptionEs: string;
}

interface Medicine {
  id: number;
  nameEn: string;
  nameEs: string;
  descriptionEn: string;
  descriptionEs: string;
  instructionsEn: string;
  instructionsEs: string;
  contraindicationsEn: string;
  contraindicationsEs: string;
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      symptoms,
      age,
      isPregnant,
      allergies,
      currentMedications,
      customSymptom,
      language,
      country,
      latitude,
      longitude,
      otherChecked
    } = body;

    // Get symptom descriptions
    const symptomDetails = await prisma.symptom.findMany({
      where: {
        id: {
          in: symptoms
        }
      },
      select: {
        descriptionEn: true,
        descriptionEs: true
      }
    });

    const symptomDescriptions = symptomDetails.map((s: { descriptionEn: string; descriptionEs: string }) => 
      language === 'en' ? s.descriptionEn : s.descriptionEs
    );

    let nearbyPharmacies: { name: string; address: string; mapsUrl: string }[] = [];
    let userLocationText = '';
    if (latitude && longitude && process.env.GOOGLE_MAPS_API_KEY) {
      try {
        // Places API (New) para farmacias
        const url = 'https://places.googleapis.com/v1/places:searchNearby';
        const placesRes = await axios.post(
          url,
          {
            includedTypes: ['pharmacy'],
            maxResultCount: 5,
            locationRestriction: {
              circle: {
                center: {
                  latitude: latitude,
                  longitude: longitude,
                },
                radius: 3000, // metros
              },
            },
            languageCode: language === 'en' ? 'en' : 'es',
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'X-Goog-Api-Key': process.env.GOOGLE_MAPS_API_KEY,
              'X-Goog-FieldMask': 'places.displayName,places.formattedAddress,places.location',
            },
          }
        );
        console.log('Respuesta de Places API (New):', JSON.stringify(placesRes.data, null, 2));
        if (placesRes.data && placesRes.data.places) {
          nearbyPharmacies = placesRes.data.places.map((place: any) => ({
            name: place.displayName?.text || '',
            address: place.formattedAddress || '',
            mapsUrl: place.location
              ? `https://www.google.com/maps/search/?api=1&query=${place.location.latitude},${place.location.longitude}`
              : '',
          }));
        }
        // Geocoding para ciudad y país
        const geoRes = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
          params: {
            latlng: `${latitude},${longitude}`,
            key: process.env.GOOGLE_MAPS_API_KEY,
            language: language === 'en' ? 'en' : 'es',
          },
        });
        if (geoRes.data && geoRes.data.results && geoRes.data.results.length > 0) {
          const address = geoRes.data.results[0].address_components;
          const cityObj = address.find((c: any) => c.types.includes('locality')) || address.find((c: any) => c.types.includes('administrative_area_level_1'));
          const countryObj = address.find((c: any) => c.types.includes('country'));
          const city = cityObj ? cityObj.long_name : '';
          const countryName = countryObj ? countryObj.long_name : '';
          userLocationText = city && countryName ? `${city}, ${countryName}` : (countryName || city || '');
        }
      } catch (err) {
        console.error('Error fetching pharmacies or geocoding:', err);
      }
    }
    console.log('Farmacias encontradas:', nearbyPharmacies);

    // Prompt for OpenAI (JSON output)
    const prompt = `
You are a professional pharmacist AI assistant. Your role is to provide over-the-counter (OTC) medicine recommendations and advice as a licensed pharmacist would, always prioritizing patient safety and local regulations. Based on the following patient information, recommend OTC medicines and commercial brands available in the user's location. Respond ONLY in valid JSON with the following structure:

{
  "medicines": [
    {
      "name": "Medicine name",
      "brands": ["Brand1", "Brand2"],
      "description": "Description of the medicine",
      "instructions": "How to use",
      "contraindications": "Contraindications"
    }
  ],
  "analysis": "Brief analysis of the symptoms and possible causes",
  "precautions": "Important precautions and warnings",
  "whenToSeeDoctor": "When to seek professional medical help",
  "whereToBuy": "Recommended pharmacy chains or stores in the user's location (city/country) where OTC medicines can be purchased. If location is not available, omit this field."
}

Patient Information:
- Age: ${age}
- Pregnant: ${isPregnant ? 'Yes' : 'No'}
- Reported Symptoms: ${symptomDescriptions.join(', ')}
${customSymptom ? `- Additional Symptoms: ${customSymptom}` : ''}
${allergies ? `- Allergies: ${allergies}` : ''}
${currentMedications ? `- Current Medications: ${currentMedications}` : ''}
- Location: ${userLocationText || country}
${otherChecked ? `\nIMPORTANT: The user selected 'Other' for symptoms. Pay special attention to the following description and prioritize it in your analysis and recommendations: "${customSymptom}"` : ''}

Respond ONLY in ${language === 'en' ? 'English' : 'Spanish'} and ONLY with the JSON structure above. Do not include any text outside the JSON.`;

    // Get AI recommendation
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a professional pharmacist AI assistant. Always act as a licensed pharmacist, provide clear, safe, and local OTC medicine recommendations, and emphasize the importance of consulting healthcare professionals. Include appropriate disclaimers."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 1200
    });

    let aiContent = completion.choices[0].message.content || '';
    let aiJson;
    try {
      // Intenta encontrar el primer bloque JSON válido en la respuesta
      const match = aiContent ? aiContent.match(/\{[\s\S]*\}/) : null;
      aiJson = match && match[0] ? JSON.parse(match[0]) : JSON.parse(aiContent);
    } catch (err) {
      return NextResponse.json({ error: 'AI response was not valid JSON', raw: aiContent }, { status: 500 });
    }

    // Si se recomienda algún medicamento que se compra en farmacia, o si la IA menciona farmacias, incluir siempre la lista
    const shouldShowPharmacies = nearbyPharmacies.length > 0 && (
      aiJson.medicines.some((m: any) => /farmacia|pharmacy|pastilla|pill|tablet|medicamento|medicine/i.test(m.description + ' ' + m.name)) ||
      (aiJson.whereToBuy && /farmacia|pharmacy|comprar|buy/i.test(aiJson.whereToBuy))
    );

    // Disclaimer extendido
    const disclaimer = language === 'en'
      ? `This recommendation is generated by an AI and is for informational purposes only. It does NOT constitute medical advice, diagnosis, or treatment. Always consult a licensed healthcare professional before taking any medication, especially if you are pregnant, have allergies, chronic conditions, or are taking other medications. The recommended medicines and brands may not be suitable for everyone and may not be available in your country. In case of emergency or severe symptoms, seek immediate medical attention. The creators of this app and the AI provider assume no responsibility for any consequences arising from the use of this information.`
      : `Esta recomendación es generada por una IA y es solo para fines informativos. NO constituye consejo médico, diagnóstico ni tratamiento. Consulte siempre a un profesional de la salud antes de tomar cualquier medicamento, especialmente si está embarazada, tiene alergias, condiciones crónicas o está tomando otros medicamentos. Los medicamentos y marcas recomendados pueden no ser adecuados para todos y pueden no estar disponibles en su país. En caso de emergencia o síntomas graves, busque atención médica inmediata. Los creadores de esta app y el proveedor de IA no asumen ninguna responsabilidad por las consecuencias derivadas del uso de esta información.`;

    const responseData = {
      medicines: aiJson.medicines,
      analysis: aiJson.analysis,
      precautions: aiJson.precautions,
      whenToSeeDoctor: aiJson.whenToSeeDoctor,
      whereToBuy: aiJson.whereToBuy,
      pharmacies: nearbyPharmacies.length > 0 ? nearbyPharmacies : undefined,
      disclaimer
    };
    console.log('Datos enviados al frontend:', JSON.stringify(responseData, null, 2));
    return NextResponse.json(responseData);
  } catch (error) {
    console.error('Error in recommendation:', error);
    return NextResponse.json(
      { error: 'Failed to generate recommendation' },
      { status: 500 }
    );
  }
} 