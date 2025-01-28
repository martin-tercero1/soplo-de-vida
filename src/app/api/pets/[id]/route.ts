import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../utils/prisma";
import type { Pet } from "../../types";
import { NextApiRequest } from "next";

type Params = {
  params: { id: string };
};

type PetUpdate = {
  name?: string;
  type?: string;
  age?: string;
  gender?: string;
  personality?: string;
  size?: string;
  description?: string;
  health_condition?: string;
  castrated?: boolean;
  dewormed?: boolean;
  images?: string[];
  urgency?: boolean;
};

export async function GET(req: NextRequest, { params }: Params) {
  try {
    console.log(params);
    const { id } = params;

    const pet: Pet | null = await prisma.pet.findUnique({
      where: {
        id: id?.toString(),
      },
    });
    console.log(pet);

    if (!pet) {
      return NextResponse.json({ error: "Pet not found" }, { status: 404 });
    }

    return NextResponse.json({
      data: pet,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "An error occurred while fetching the pet" },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest, { params }: Params) {
  try {
    const { id } = await params;

    const {
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
      images,
    } = (await req.json()) as PetUpdate;

    const pet: Pet = await prisma.pet.update({
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
        images,
      },
    });

    return NextResponse.json({
      data: pet,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "An error occurred while updating the pet" },
      { status: 500 }
    );
  }
}
