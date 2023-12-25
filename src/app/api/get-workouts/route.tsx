import { NextResponse } from "next/server";
import { getWorkouts } from "../../../database/database-functions";

export async function GET() {

    const data = await getWorkouts();

    return NextResponse.json(data);
}