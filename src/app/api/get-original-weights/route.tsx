import { NextResponse } from "next/server";
import { getOriginalWorkoutWeights } from "../../../database/database-functions";

export async function GET() {

    const data = await getOriginalWorkoutWeights();

    return NextResponse.json(data);
}