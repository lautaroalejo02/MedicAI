import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create countries
  const argentina = await prisma.country.upsert({
    where: { code: 'AR' },
    update: {},
    create: {
      name: 'Argentina',
      code: 'AR',
    },
  })

  const usa = await prisma.country.upsert({
    where: { code: 'US' },
    update: {},
    create: {
      name: 'United States',
      code: 'US',
    },
  })

  // Create symptoms
  const symptomsData = [
    { descriptionEn: 'Fever', descriptionEs: 'Fiebre' },
    { descriptionEn: 'Sore Throat', descriptionEs: 'Dolor de garganta' },
    { descriptionEn: 'Headache', descriptionEs: 'Dolor de cabeza' },
    { descriptionEn: 'Muscle Pain', descriptionEs: 'Dolor muscular' },
    { descriptionEn: 'Cough', descriptionEs: 'Tos' },
    { descriptionEn: 'Congestion', descriptionEs: 'Congestión' },
    { descriptionEn: 'Runny Nose', descriptionEs: 'Nariz mocosa' },
    { descriptionEn: 'Sneezing', descriptionEs: 'Estornudos' },
    { descriptionEn: 'Fatigue', descriptionEs: 'Fatiga' },
    { descriptionEn: 'Nausea', descriptionEs: 'Náuseas' },
    { descriptionEn: 'Vomiting', descriptionEs: 'Vómitos' },
    { descriptionEn: 'Diarrhea', descriptionEs: 'Diarrea' },
    { descriptionEn: 'Shortness of Breath', descriptionEs: 'Dificultad para respirar' },
    { descriptionEn: 'Chest Pain', descriptionEs: 'Dolor de pecho' },
    { descriptionEn: 'Dizziness', descriptionEs: 'Mareos' },
  ]

  // Insert symptoms if not exist
  const symptoms = []
  for (const symptom of symptomsData) {
    let s = await prisma.symptom.findFirst({ where: { descriptionEn: symptom.descriptionEn } })
    if (!s) {
      s = await prisma.symptom.create({ data: symptom })
    }
    symptoms.push(s)
  }

  console.log('Seeded symptoms!')

  // Create medicines
  const medicines = await Promise.all([
    // Argentina medicines
    prisma.medicine.create({
      data: {
        nameEn: 'Paracetamol',
        nameEs: 'Tafirol',
        descriptionEn: 'Pain reliever and fever reducer',
        descriptionEs: 'Analgésico y antipirético',
        instructionsEn: 'Take 500-1000mg every 4-6 hours as needed',
        instructionsEs: 'Tomar 500-1000mg cada 4-6 horas según sea necesario',
        contraindicationsEn: 'Do not exceed 4000mg in 24 hours',
        contraindicationsEs: 'No exceder 4000mg en 24 horas',
      },
    }),
    prisma.medicine.create({
      data: {
        nameEn: 'Ibuprofen',
        nameEs: 'Ibupirac',
        descriptionEn: 'Non-steroidal anti-inflammatory drug',
        descriptionEs: 'Antiinflamatorio no esteroideo',
        instructionsEn: 'Take 200-400mg every 4-6 hours as needed',
        instructionsEs: 'Tomar 200-400mg cada 4-6 horas según sea necesario',
        contraindicationsEn: 'Not recommended for people with stomach ulcers',
        contraindicationsEs: 'No recomendado para personas con úlceras estomacales',
      },
    }),
    // USA medicines
    prisma.medicine.create({
      data: {
        nameEn: 'Acetaminophen',
        nameEs: 'Acetaminofén',
        descriptionEn: 'Pain reliever and fever reducer',
        descriptionEs: 'Analgésico y antipirético',
        instructionsEn: 'Take 500-1000mg every 4-6 hours as needed',
        instructionsEs: 'Tomar 500-1000mg cada 4-6 horas según sea necesario',
        contraindicationsEn: 'Do not exceed 4000mg in 24 hours',
        contraindicationsEs: 'No exceder 4000mg en 24 horas',
      },
    }),
    prisma.medicine.create({
      data: {
        nameEn: 'Ibuprofen',
        nameEs: 'Ibuprofeno',
        descriptionEn: 'Non-steroidal anti-inflammatory drug',
        descriptionEs: 'Antiinflamatorio no esteroideo',
        instructionsEn: 'Take 200-400mg every 4-6 hours as needed',
        instructionsEs: 'Tomar 200-400mg cada 4-6 horas según sea necesario',
        contraindicationsEn: 'Not recommended for people with stomach ulcers',
        contraindicationsEs: 'No recomendado para personas con úlceras estomacales',
      },
    }),
  ])

  // Create medicine availability
  await Promise.all([
    // Argentina medicines
    prisma.medicineAvailability.create({
      data: {
        medicineId: medicines[0].id,
        countryId: argentina.id,
      },
    }),
    prisma.medicineAvailability.create({
      data: {
        medicineId: medicines[1].id,
        countryId: argentina.id,
      },
    }),
    // USA medicines
    prisma.medicineAvailability.create({
      data: {
        medicineId: medicines[2].id,
        countryId: usa.id,
      },
    }),
    prisma.medicineAvailability.create({
      data: {
        medicineId: medicines[3].id,
        countryId: usa.id,
      },
    }),
  ])

  // Create symptom recommendations
  await Promise.all([
    // Headache recommendations
    prisma.symptomRecommendation.create({
      data: {
        symptomId: symptoms[2].id,
        medicineId: medicines[0].id,
        priority: 1,
      },
    }),
    prisma.symptomRecommendation.create({
      data: {
        symptomId: symptoms[2].id,
        medicineId: medicines[1].id,
        priority: 2,
      },
    }),
    // Fever recommendations
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