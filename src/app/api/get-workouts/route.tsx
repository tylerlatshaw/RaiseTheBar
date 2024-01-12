import { NextResponse } from "next/server";
import { getWorkouts } from "../../../database/database-functions";

export async function GET() {

    const data = await getWorkouts("66ccadf5-7afc-4f76-a69e-8e988d1f4b44");

    return NextResponse.json(data);
}