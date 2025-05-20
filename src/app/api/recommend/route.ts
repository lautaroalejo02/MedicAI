import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import OpenAI from 'openai';

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
      country
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

    const symptomDescriptions = symptomDetails.map((s: SymptomDetail) => 
      language === 'en' ? s.descriptionEn : s.descriptionEs
    );

    // Get recommended medicines for the selected symptoms
    const recommendations = await prisma.symptomRecommendation.findMany({
      where: {
        symptomId: { in: symptoms }
      },
      include: {
        medicine: {
          include: {
            availability: {
              include: {
                country: true
              }
            }
          }
        }
      },
      orderBy: { priority: 'asc' }
    });

    // Filter medicines available in the selected country
    const medicines = recommendations
      .map((rec: any) => rec.medicine)
      .filter((med: any, idx: number, arr: any[]) =>
        med.availability.some((av: any) => av.country.code === country) &&
        arr.findIndex((m: any) => m.id === med.id) === idx // remove duplicates
      );

    // Prepare the prompt for OpenAI
    const prompt = `
      As a medical AI assistant, please provide a detailed analysis and recommendations for the following case:
      
      Patient Information:
      - Age: ${age}
      - Pregnant: ${isPregnant ? 'Yes' : 'No'}
      - Reported Symptoms: ${symptomDescriptions.join(', ')}
      ${customSymptom ? `- Additional Symptoms: ${customSymptom}` : ''}
      ${allergies ? `- Allergies: ${allergies}` : ''}
      ${currentMedications ? `- Current Medications: ${currentMedications}` : ''}
      
      Available Medicines:
      ${medicines.map((m: Medicine) => `
        - ${language === 'en' ? m.nameEn : m.nameEs}
        Description: ${language === 'en' ? m.descriptionEn : m.descriptionEs}
        Instructions: ${language === 'en' ? m.instructionsEn : m.instructionsEs}
        Contraindications: ${language === 'en' ? m.contraindicationsEn : m.contraindicationsEs}
      `).join('\n')}
      
      Please provide:
      1. A brief analysis of the symptoms and their potential causes
      2. Specific recommendations for the most appropriate medicines from the list
      3. Important precautions and warnings
      4. When to seek professional medical help
      
      Please respond in ${language === 'en' ? 'English' : 'Spanish'} and maintain a professional, medical tone.
    `;

    // Get AI recommendation
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a medical AI assistant providing OTC medicine recommendations. Always emphasize the importance of consulting healthcare professionals and include appropriate disclaimers."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 1000
    });

    const aiRecommendation = completion.choices[0].message.content;

    // Prepare the response
    const response = {
      symptoms: symptomDescriptions,
      medicines: medicines.map((m: Medicine) => ({
        name: language === 'en' ? m.nameEn : m.nameEs,
        description: language === 'en' ? m.descriptionEn : m.descriptionEs,
        instructions: language === 'en' ? m.instructionsEn : m.instructionsEs,
        contraindications: language === 'en' ? m.contraindicationsEn : m.contraindicationsEs
      })),
      aiRecommendation,
      disclaimer: language === 'en' 
        ? "This is an AI-generated recommendation and should not replace professional medical advice. Always consult with a healthcare provider before taking any medication, especially if you are pregnant, have allergies, or are taking other medications."
        : "Esta es una recomendación generada por IA y no debe reemplazar el consejo médico profesional. Siempre consulte con un profesional de la salud antes de tomar cualquier medicamento, especialmente si está embarazada, tiene alergias o está tomando otros medicamentos."
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error in recommendation:', error);
    return NextResponse.json(
      { error: 'Failed to generate recommendation' },
      { status: 500 }
    );
  }
} 