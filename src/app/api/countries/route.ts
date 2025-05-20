import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const countries = await prisma.country.findMany({
      select: {
        id: true,
        name: true,
        code: true,
      },
    });

    return NextResponse.json(countries);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 