import { NextResponse } from "next/server";
import { getWorkoutNames } from "../../../database/database-functions";

export async function GET() {

    const data = await getWorkoutNames();

    return NextResponse.json(data);
}