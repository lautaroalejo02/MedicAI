-- CreateTable
CREATE TABLE "Country" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Symptom" (
    "id" SERIAL NOT NULL,
    "descriptionEn" TEXT NOT NULL,
    "descriptionEs" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Symptom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Medicine" (
    "id" SERIAL NOT NULL,
    "nameEn" TEXT NOT NULL,
    "nameEs" TEXT NOT NULL,
    "descriptionEn" TEXT NOT NULL,
    "descriptionEs" TEXT NOT NULL,
    "instructionsEn" TEXT NOT NULL,
    "instructionsEs" TEXT NOT NULL,
    "contraindicationsEn" TEXT NOT NULL,
    "contraindicationsEs" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Medicine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MedicineAvailability" (
    "id" SERIAL NOT NULL,
    "medicineId" INTEGER NOT NULL,
    "countryId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MedicineAvailability_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SymptomRecommendation" (
    "id" SERIAL NOT NULL,
    "symptomId" INTEGER NOT NULL,
    "medicineId" INTEGER NOT NULL,
    "priority" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SymptomRecommendation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConsultationHistory" (
    "id" SERIAL NOT NULL,
    "selectedSymptoms" TEXT NOT NULL,
    "age" INTEGER,
    "isPregnant" BOOLEAN,
    "allergies" TEXT,
    "currentMedications" TEXT,
    "recommendations" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "countryCode" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ConsultationHistory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Country_code_key" ON "Country"("code");

-- CreateIndex
CREATE UNIQUE INDEX "MedicineAvailability_medicineId_countryId_key" ON "MedicineAvailability"("medicineId", "countryId");

-- CreateIndex
CREATE UNIQUE INDEX "SymptomRecommendation_symptomId_medicineId_key" ON "SymptomRecommendation"("symptomId", "medicineId");

-- AddForeignKey
ALTER TABLE "MedicineAvailability" ADD CONSTRAINT "MedicineAvailability_medicineId_fkey" FOREIGN KEY ("medicineId") REFERENCES "Medicine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MedicineAvailability" ADD CONSTRAINT "MedicineAvailability_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SymptomRecommendation" ADD CONSTRAINT "SymptomRecommendation_symptomId_fkey" FOREIGN KEY ("symptomId") REFERENCES "Symptom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SymptomRecommendation" ADD CONSTRAINT "SymptomRecommendation_medicineId_fkey" FOREIGN KEY ("medicineId") REFERENCES "Medicine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
