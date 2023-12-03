import { NextResponse } from "next/server";
import { getMuscleGroups } from "@/database/gym";

export async function GET() {

    const muscleGroups = await getMuscleGroups();

    return NextResponse.json(muscleGroups);
}