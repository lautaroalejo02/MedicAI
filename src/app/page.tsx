'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useCountry } from '@/context/CountryContext';

interface Symptom {
  id: number;
  descriptionEn: string;
  descriptionEs: string;
}

interface Country {
  id: number;
  name: string;
  code: string;
}

interface Recommendation {
  symptoms: string[];
  medicines: {
    name: string;
    description: string;
    instructions: string;
    contraindications: string;
  }[];
  aiRecommendation: string;
  disclaimer: string;
}

export default function Home() {
  const { language, setLanguage } = useLanguage();
  const { country, setCountry } = useCountry();
  const [symptoms, setSymptoms] = useState<Symptom[]>([]);
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedSymptoms, setSelectedSymptoms] = useState<number[]>([]);
  const [age, setAge] = useState<string>("");
  const [isPregnant, setIsPregnant] = useState<boolean>(false);
  const [allergies, setAllergies] = useState<string>("");
  const [currentMedications, setCurrentMedications] = useState<string>("");
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [customSymptom, setCustomSymptom] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [symptomsRes, countriesRes] = await Promise.all([
          fetch(`/api/symptoms?language=${language}`),
          fetch("/api/countries"),
        ]);
        if (!symptomsRes.ok || !countriesRes.ok) throw new Error("Failed to fetch data");
        const [symptomsData, countriesData] = await Promise.all([
          symptomsRes.json(),
          countriesRes.json(),
        ]);
        setSymptoms(symptomsData);
        setCountries(countriesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [language]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch("/api/recommend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          symptoms: selectedSymptoms,
          age: parseInt(age),
          isPregnant,
          allergies,
          currentMedications,
          customSymptom,
          language,
          country: country?.code,
        }),
      });
      if (!response.ok) throw new Error("Failed to get recommendation");
      const data = await response.json();
      setRecommendation(data);
    } catch (error) {
      console.error("Error getting recommendation:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const translations = {
    en: {
      title: "MedicAI",
      subtitle: "Personalized OTC medicine recommendations powered by AI",
      language: "Language",
      country: "Country",
      symptoms: "Select your symptoms",
      customSymptom: "Describe your symptoms",
      age: "Age",
      pregnancy: "Are you pregnant?",
      allergies: "Allergies (if any)",
      medications: "Current medications",
      submit: "Get Recommendations",
      loading: "Getting recommendations...",
      disclaimer:
        "Disclaimer: This is not a substitute for professional medical advice. Always consult with a healthcare provider.",
      recommendations: "Recommendations",
      selectedSymptoms: "Selected Symptoms",
      recommendedMedicines: "Recommended Medicines",
      aiAnalysis: "AI Analysis",
      addCustomSymptom: "Add Custom Symptom",
      yes: "Yes",
      no: "No",
    },
    es: {
      title: "MedicAI",
      subtitle: "Recomendaciones personalizadas de medicamentos OTC impulsadas por IA",
      language: "Idioma",
      country: "País",
      symptoms: "Selecciona tus síntomas",
      customSymptom: "Describe tus síntomas",
      age: "Edad",
      pregnancy: "¿Estás embarazada?",
      allergies: "Alergias (si las hay)",
      medications: "Medicamentos actuales",
      submit: "Obtener Recomendaciones",
      loading: "Obteniendo recomendaciones...",
      disclaimer:
        "Descargo de responsabilidad: Esto no sustituye el consejo médico profesional. Siempre consulte con un profesional de la salud.",
      recommendations: "Recomendaciones",
      selectedSymptoms: "Síntomas Seleccionados",
      recommendedMedicines: "Medicamentos Recomendados",
      aiAnalysis: "Análisis de IA",
      addCustomSymptom: "Agregar Síntoma Personalizado",
      yes: "Sí",
      no: "No",
    },
  };
  const t = translations[language];

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="flex flex-col items-center mb-10">
          <h1 className="text-5xl font-extrabold text-purple-700 tracking-tight drop-shadow-lg mb-2">
            {t.title}
          </h1>
          <p className="text-lg text-purple-400 font-medium mb-2 text-center">
            {t.subtitle}
          </p>
        </div>

        {/* Language & Country Selectors */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as "en" | "es")}
            className="px-4 py-2 border-2 border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white text-purple-700 font-semibold"
          >
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
          <select
            value={country?.id || ""}
            onChange={(e) => {
              const selected = countries.find((c) => c.id === parseInt(e.target.value));
              if (selected) setCountry(selected);
            }}
            className="px-4 py-2 border-2 border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white text-purple-700 font-semibold"
          >
            <option value="">{t.country}</option>
            {countries.map((country) => (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
            ))}
          </select>
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-white border-2 border-purple-100 rounded-2xl shadow-xl p-8 space-y-8"
        >
          {/* Symptoms */}
          <div>
            <label className="block text-lg font-semibold text-purple-700 mb-3">
              {t.symptoms}
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {symptoms.map((symptom) => (
                <label
                  key={symptom.id}
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-purple-50 cursor-pointer transition"
                >
                  <input
                    type="checkbox"
                    checked={selectedSymptoms.includes(symptom.id)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedSymptoms([...selectedSymptoms, symptom.id]);
                      } else {
                        setSelectedSymptoms(selectedSymptoms.filter((id) => id !== symptom.id));
                      }
                    }}
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                  />
                  <span className="text-sm text-purple-900">
                    {language === "en" ? symptom.descriptionEn : symptom.descriptionEs}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Custom Symptom */}
          <div>
            <label className="block text-lg font-semibold text-purple-700 mb-3">
              {t.customSymptom}
            </label>
            <input
              type="text"
              value={customSymptom}
              onChange={(e) => setCustomSymptom(e.target.value)}
              placeholder={language === "en" ? "Describe your symptoms..." : "Describe tus síntomas..."}
              className="w-full px-4 py-2 border-2 border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white text-purple-700"
            />
          </div>

          {/* Age & Pregnancy */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-lg font-semibold text-purple-700 mb-3">
                {t.age}
              </label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full px-4 py-2 border-2 border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white text-purple-700"
                min="0"
                max="120"
              />
            </div>
            <div>
              <label className="block text-lg font-semibold text-purple-700 mb-3">
                {t.pregnancy}
              </label>
              <div className="flex items-center gap-6 mt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    checked={isPregnant}
                    onChange={() => setIsPregnant(true)}
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300"
                  />
                  <span className="text-purple-700 font-medium">{t.yes}</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    checked={!isPregnant}
                    onChange={() => setIsPregnant(false)}
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300"
                  />
                  <span className="text-purple-700 font-medium">{t.no}</span>
                </label>
              </div>
            </div>
          </div>

          {/* Allergies & Medications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-lg font-semibold text-purple-700 mb-3">
                {t.allergies}
              </label>
              <textarea
                value={allergies}
                onChange={(e) => setAllergies(e.target.value)}
                className="w-full px-4 py-2 border-2 border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white text-purple-700"
                rows={2}
                placeholder={language === "en" ? "List any allergies..." : "Lista de alergias..."}
              />
            </div>
            <div>
              <label className="block text-lg font-semibold text-purple-700 mb-3">
                {t.medications}
              </label>
              <textarea
                value={currentMedications}
                onChange={(e) => setCurrentMedications(e.target.value)}
                className="w-full px-4 py-2 border-2 border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white text-purple-700"
                rows={2}
                placeholder={language === "en" ? "List current medications..." : "Lista de medicamentos actuales..."}
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={selectedSymptoms.length === 0 || isLoading}
            className={`w-full py-3 px-4 rounded-xl text-white font-bold text-lg shadow-md transition-all duration-200 ${
              selectedSymptoms.length === 0 || isLoading
                ? "bg-purple-200 cursor-not-allowed"
                : "bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
            }`}
          >
            {isLoading ? t.loading : t.submit}
          </button>
        </form>

        {/* Recommendations Card */}
        {recommendation && (
          <div className="mt-10 bg-white border-2 border-purple-200 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-extrabold text-purple-700 mb-6 text-center">
              {t.recommendations}
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-purple-600 mb-2">
                  {t.selectedSymptoms}
                </h3>
                <ul className="list-disc list-inside text-purple-900">
                  {recommendation.symptoms.map((symptom, index) => (
                    <li key={index}>{symptom}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-purple-600 mb-2">
                  {t.recommendedMedicines}
                </h3>
                <ul className="space-y-3">
                  {recommendation.medicines.map((medicine, index) => (
                    <li key={index} className="bg-purple-50 border border-purple-100 rounded-lg p-4">
                      <div className="font-bold text-purple-800 text-base mb-1">{medicine.name}</div>
                      <div className="text-sm text-purple-700 mb-1">{medicine.description}</div>
                      <div className="text-xs text-purple-500 mb-1">
                        <span className="font-semibold">Instructions:</span> {medicine.instructions}
                      </div>
                      <div className="text-xs text-purple-500">
                        <span className="font-semibold">Contraindications:</span> {medicine.contraindications}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-purple-600 mb-2">
                  {t.aiAnalysis}
                </h3>
                <p className="text-purple-900 whitespace-pre-line bg-purple-50 rounded-lg p-4 border border-purple-100">
                  {recommendation.aiRecommendation}
                </p>
              </div>
              <div className="mt-6 p-4 bg-yellow-50 rounded-md border border-yellow-200">
                <p className="text-sm text-yellow-800">{recommendation.disclaimer}</p>
              </div>
            </div>
          </div>
        )}

        {/* Footer Disclaimer */}
        <div className="mt-10 text-center text-xs text-purple-400">
          <p>{t.disclaimer}</p>
        </div>
      </div>
    </main>
  );
}
