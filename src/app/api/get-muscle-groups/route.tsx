import { NextResponse } from "next/server";
import { getMuscleGroups } from "../../../database/database-functions";

export async function GET() {

    const data = await getMuscleGroups();

    return NextResponse.json(data);
}