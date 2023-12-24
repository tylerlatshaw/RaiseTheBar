import { NextResponse } from "next/server";
import { getWorkoutNames } from "../../../database/gym";

export async function GET() {

    const data = await getWorkoutNames();

    return NextResponse.json(data);
}