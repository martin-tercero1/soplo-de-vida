import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../utils/prisma";
;

export async function GET(req: NextRequest, { params }: any) {
    const { id } = await params;

    const pet = await prisma.pet.findUnique({
        where: {
            id: id?.toString(),
        },
    })
    return NextResponse.json({
        pet
    })
}

export async function PATCH(req: NextRequest, { params }: any) {
    const { id } = await params;
    console.log(params)
    const { name, type, age, gender, personality, size, description, health_condition, castrated, dewormed, images } = await req.json();

    const pet = await prisma.pet.update({
        where: {
            id: id,
        },
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
    })

    return NextResponse.json({
        pet
    })
}

export async function DELETE(req: NextRequest) {
    const id = req.nextUrl.searchParams.get('id') as string;

    await prisma.pet.delete({
        where: {
            id: id,
        },
    })
    return NextResponse.json({
        data: `Pet with id: ${id} has been deleted`
    })
}