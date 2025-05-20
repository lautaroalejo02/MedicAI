import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface Symptom {
  id: number;
  descriptionEn: string;
  descriptionEs: string;
}

export async function GET(req: NextRequest) {
  try {
    const symptoms = await prisma.symptom.findMany({
      select: {
        id: true,
        descriptionEn: true,
        descriptionEs: true,
      },
    });

    // Devuelve ambos campos para que el frontend elija el idioma
    return NextResponse.json(symptoms);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 