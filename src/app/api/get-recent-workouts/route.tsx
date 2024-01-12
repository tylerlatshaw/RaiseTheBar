import { NextResponse } from "next/server";
import {
    getWorkoutNames,
    getWorkouts
} from "../../../database/database-functions";
import { WorkoutType } from "@/app/lib/type-library";

export async function GET() {

    const workouts = await getWorkouts("66ccadf5-7afc-4f76-a69e-8e988d1f4b44");
    const workoutNames = await getWorkoutNames();
    const recentWorkouts: WorkoutType[] = [];

    workouts?.map(workout => {
        const toAdd = workoutNames?.find(name => workout.WorkoutNameId === name.WorkoutNameId);

        recentWorkouts.push({
            WorkoutId: workout.WorkoutId,
            UUID: workout.UUID,
            WorkoutNameId: toAdd?.WorkoutNameId,
            MaxWeight: workout.MaxWeight,
            WorkoutDate: workout.WorkoutDate,
            MuscleGroupId: workout.MuscleGroupId
        });
    });

    return NextResponse.json(recentWorkouts);
}