import { supabase } from "@/utilities/supabase";

import type { NewWorkoutType } from "@/app/lib/type-library";

export async function getMuscleGroups() {
    const { data } = await supabase
        .from("MuscleGroup")
        .select("MuscleGroupId, Name")
        .order("Name");

    return data;
}

export async function getWorkouts() {
    const { data } = await supabase
        .from("Workout")
        .select("WorkoutId, Name, MaxWeight, WorkoutDate, MuscleGroupId")
        .order("Name");

    return data;
}

export async function newWorkout(formData: NewWorkoutType) {
    const {
        workoutName,
        maxWeight,
        workoutDate,
        muscleGroupId
    } = formData;

    const { data } = await supabase
        .from("Workout")
        .insert({
            Name: workoutName,
            MaxWeight: maxWeight,
            WorkoutDate: workoutDate,
            MuscleGroupId: muscleGroupId
        });

    return data;
}