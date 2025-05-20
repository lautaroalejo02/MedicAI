/*
  Warnings:

  - A unique constraint covering the columns `[descriptionEn]` on the table `Symptom` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Symptom_descriptionEn_key" ON "Symptom"("descriptionEn");
