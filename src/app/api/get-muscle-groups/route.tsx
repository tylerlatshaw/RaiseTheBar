import { NextResponse } from "next/server";
import { getMuscleGroups } from "../../../database/gym";

export async function GET() {

    const data = await getMuscleGroups();

    return NextResponse.json(data);
}