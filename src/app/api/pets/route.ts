import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../utils/prisma";
import { NextApiRequest } from "next";

export async function GET() {
    const pets = await prisma.pet.findMany()
    return NextResponse.json({
        pets
    })
}

export async function POST(req: NextRequest) {
    const { name, type, age, gender, personality, size, description, health_condition, castrated, dewormed, images } = await req.json();

    const pet = await prisma.pet.create({
        data: {
            name,
            type,
            age,
            gender,
            personality,
            size,
            description,
            health_condition,
            castrated,
            dewormed,
            images
        }
    });

    return NextResponse.json({
        pet
    })
}
