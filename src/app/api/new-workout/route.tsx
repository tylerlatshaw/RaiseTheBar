import { NextResponse } from "next/server";
import { newWorkout } from "../../../database/gym";

import type { NewWorkoutType } from "../../lib/type-library";

export async function POST(request: Request) {

    const {
        workoutName,
        maxWeight,
        workoutDate,
        muscleGroupId
    } = await request.json() as NewWorkoutType;

    const formData: NewWorkoutType = {
        workoutName,
        maxWeight,
        workoutDate,
        muscleGroupId
    };

    await Promise.all([
        newWorkout(formData)
    ]);

    return NextResponse.json({
        status: "Ok",
        message: workoutName + " added successfully!",
    });
}