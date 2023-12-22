import { NextResponse } from "next/server";
import { getWorkouts } from "@/database/gym";

export async function GET() {

    const data = await getWorkouts();

    return NextResponse.json(data);
}