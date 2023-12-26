import { NextResponse } from "next/server";
import {
    getWorkoutNames,
    getWorkouts
} from "../../../database/database-functions";
import { WorkoutType } from "@/app/lib/type-library";

export async function GET() {

    const workouts = await getWorkouts();
    const workoutNames = await getWorkoutNames();
    const recentWorkouts: WorkoutType[] = [];

    workoutNames?.map(workoutName => {
        const toAdd = workouts?.find(workout => workout.WorkoutNameId === workoutName.WorkoutNameId);

        recentWorkouts.push({
            WorkoutId: toAdd?.WorkoutId,
            WorkoutNameId: toAdd?.WorkoutNameId,
            MaxWeight: toAdd?.MaxWeight,
            WorkoutDate: toAdd?.WorkoutDate,
            MuscleGroupId: toAdd?.MuscleGroupId
        });
    });

    return NextResponse.json(recentWorkouts);
}