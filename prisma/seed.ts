import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Seed countries
  const countriesData = [
    { name: 'United States', code: 'US' },
    { name: 'Argentina', code: 'AR' },
    { name: 'Spain', code: 'ES' },
    { name: 'Mexico', code: 'MX' },
    { name: 'Colombia', code: 'CO' },
    { name: 'Chile', code: 'CL' },
    { name: 'Peru', code: 'PE' },
    { name: 'Uruguay', code: 'UY' },
    { name: 'Paraguay', code: 'PY' },
    { name: 'Bolivia', code: 'BO' },
  ]

  const countries = []
  for (const country of countriesData) {
    const createdCountry = await prisma.country.upsert({
      where: { code: country.code },
      update: {},
      create: country,
    })
    countries.push(createdCountry)
  }

  // Seed symptoms
  const symptomsData = [
    {
      descriptionEn: 'Headache',
      descriptionEs: 'Dolor de cabeza',
    },
    {
      descriptionEn: 'Fever',
      descriptionEs: 'Fiebre',
    },
    {
      descriptionEn: 'Cough',
      descriptionEs: 'Tos',
    },
    {
      descriptionEn: 'Sore Throat',
      descriptionEs: 'Dolor de garganta',
    },
    {
      descriptionEn: 'Runny Nose',
      descriptionEs: 'Nariz congestionada',
    },
  ]

  const symptoms = []
  for (const symptom of symptomsData) {
    const createdSymptom = await prisma.symptom.upsert({
      where: { descriptionEn: symptom.descriptionEn },
      update: {},
      create: symptom,
    })
    symptoms.push(createdSymptom)
  }

  console.log('Seeded countries and symptoms!')

  // Create medicines
  const medicines = await Promise.all([
    prisma.medicine.create({
      data: {
        nameEn: 'Paracetamol',
        nameEs: 'Paracetamol',
        descriptionEn: 'Pain reliever and fever reducer',
        descriptionEs: 'Alivia el dolor y reduce la fiebre',
        instructionsEn: 'Take 1 tablet every 4-6 hours as needed',
        instructionsEs: 'Tomar 1 tableta cada 4-6 horas según sea necesario',
        contraindicationsEn: 'Do not take if allergic to paracetamol',
        contraindicationsEs: 'No tomar si es alérgico al paracetamol',
      },
    }),
    prisma.medicine.create({
      data: {
        nameEn: 'Ibuprofen',
        nameEs: 'Ibuprofeno',
        descriptionEn: 'Anti-inflammatory and pain reliever',
        descriptionEs: 'Antiinflamatorio y aliviador del dolor',
        instructionsEn: 'Take 1 tablet every 6-8 hours with food',
        instructionsEs: 'Tomar 1 tableta cada 6-8 horas con comida',
        contraindicationsEn: 'Do not take if allergic to ibuprofen or if you have stomach problems',
        contraindicationsEs: 'No tomar si es alérgico al ibuprofeno o si tiene problemas estomacales',
      },
    }),
    prisma.medicine.create({
      data: {
        nameEn: 'Aspirin',
        nameEs: 'Aspirina',
        descriptionEn: 'Pain reliever and anti-inflammatory',
        descriptionEs: 'Aliviador del dolor y antiinflamatorio',
        instructionsEn: 'Take 1 tablet every 4-6 hours with food',
        instructionsEs: 'Tomar 1 tableta cada 4-6 horas con comida',
        contraindicationsEn: 'Do not take if allergic to aspirin or if you have bleeding problems',
        contraindicationsEs: 'No tomar si es alérgico a la aspirina o si tiene problemas de sangrado',
      },
    }),
    prisma.medicine.create({
      data: {
        nameEn: 'Diphenhydramine',
        nameEs: 'Difenhidramina',
        descriptionEn: 'Antihistamine for allergies and sleep aid',
        descriptionEs: 'Antihistamínico para alergias y ayuda para dormir',
        instructionsEn: 'Take 1 tablet every 4-6 hours as needed',
        instructionsEs: 'Tomar 1 tableta cada 4-6 horas según sea necesario',
        contraindicationsEn: 'Do not take if allergic to diphenhydramine',
        contraindicationsEs: 'No tomar si es alérgico a la difenhidramina',
      },
    }),
  ])

  // Create medicine availability
  await Promise.all([
    prisma.medicineAvailability.create({
      data: {
        medicineId: medicines[0].id,
        countryId: countries[0].id,
      },
    }),
    prisma.medicineAvailability.create({
      data: {
        medicineId: medicines[1].id,
        countryId: countries[0].id,
      },
    }),
    prisma.medicineAvailability.create({
      data: {
        medicineId: medicines[2].id,
        countryId: countries[1].id,
      },
    }),
    prisma.medicineAvailability.create({
      data: {
        medicineId: medicines[3].id,
        countryId: countries[1].id,
      },
    }),
  ])

  // Create symptom recommendations
  await Promise.all([
    prisma.symptomRecommendation.create({
      data: {
        symptomId: symptoms[0].id,
        medicineId: medicines[0].id,
        priority: 1,
      },
    }),
    prisma.symptomRecommendation.create({
      data: {
        symptomId: symptoms[0].id,
        medicineId: medicines[1].id,
        priority: 2,
      },
    }),
    prisma.symptomRecommendation.create({
      data: {
        symptomId: symptoms[1].id,
        medicineId: medicines[0].id,
        priority: 1,
      },
    }),
    prisma.symptomRecommendation.create({
      data: {
        symptomId: symptoms[1].id,
        medicineId: medicines[1].id,
        priority: 2,
      },
    }),
  ])
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 