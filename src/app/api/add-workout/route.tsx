import { NextResponse } from "next/server";
import { newWorkout } from "../../../database/database-functions";
import { NewWorkoutType } from "../../lib/type-library";

export async function POST(request: Request) {

    const {
        workoutNameId,
        maxWeight,
        workoutDate,
        muscleGroupId
    } = await request.json() as NewWorkoutType;

    const formData: NewWorkoutType = {
        workoutNameId,
        maxWeight,
        workoutDate,
        muscleGroupId
    };

    await Promise.all([
        newWorkout(formData)
    ]);

    return NextResponse.json({
        status: "Ok",
        message: "New Workout Added"
    });
}