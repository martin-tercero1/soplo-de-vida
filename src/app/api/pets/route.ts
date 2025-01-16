import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../utils/prisma";
import type { Pet } from "../types";

type PetsFilterProps = {
  type?: string;
  gender?: string;
  size?: string;
  castrated?: boolean;
  sortBy?: string;
  order?: string;
  page?: number;
  limit?: number;
};

type GetPetsResponse = {
  pets: any[];
  page: number;
  pageSize: number;
  totalResults: number;
  petCount: number;
};

type CreatePet = {
  name: string;
  type: string;
  age: string;
  gender: string;
  personality: string;
  size?: string;
  description?: string;
  health_condition?: string;
  castrated: boolean;
  dewormed: boolean;
  images: string[];
  urgency?: boolean;
};

export async function GET(req: NextRequest) {
  try {
    const {
      type,
      gender,
      size,
      castrated,
      sortBy = "name",
      order = "asc",
      page = 1,
      limit = 10,
    } = Object.fromEntries(req.nextUrl.searchParams) as PetsFilterProps;

    const pets = await prisma.pet.findMany({
      where: {
        type,
        gender,
        size,
        castrated,
      },
      orderBy: [
        {
          [sortBy]: order,
        },
      ],
      skip: (page - 1) * limit,
      take: limit * 1,
    });

    const totalResults = await prisma.pet.count({
      where: {
        type,
        gender,
        size,
        castrated,
      },
    });

    const result: GetPetsResponse = {
      pets,
      page,
      pageSize: limit,
      totalResults,
      petCount: pets.length,
    };

    return NextResponse.json({
      data: result,
    });
  } catch (error) {
    console.error("Error fetching pets:", error);
    return NextResponse.json(
      {
        error: "An error occurred while fetching pets.",
      },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
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
      urgency,
    } = (await req.json()) as CreatePet;

    const pet: Pet = await prisma.pet.create({
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
        urgency,
      },
    });

    return NextResponse.json({
      data: pet,
    });
  } catch (error) {
    console.error("Error creating pet:", error);
    return NextResponse.json(
      {
        error: "An error occurred while creating the pet.",
      },
      { status: 500 }
    );
  }
}
