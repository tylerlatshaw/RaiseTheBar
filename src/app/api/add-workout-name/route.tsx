import { NextResponse } from "next/server";
import { newWorkoutName } from "../../../database/database-functions";
import { NewWorkoutNameType } from "../../lib/type-library";

export async function POST(request: Request) {

    const {
        name
    } = await request.json() as NewWorkoutNameType;

    const formData: NewWorkoutNameType = {
        name: name
    };

    const newWorkout = await Promise.all([
        newWorkoutName(formData)
    ]);

    return NextResponse.json({
        status: "Ok",
        message: newWorkout[0],
    });
}