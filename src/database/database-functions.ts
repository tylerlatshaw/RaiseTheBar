import { supabase } from "../utilities/supabase";
import { NewWorkoutNameType, NewWorkoutType } from "../app/lib/type-library";

export async function getMuscleGroups() {
    const { data } = await supabase
        .from("MuscleGroup")
        .select("MuscleGroupId, Name")
        .order("Name");

    return data;
}

export async function getOriginalWorkoutWeights() {
    const { data } = await supabase
        .from("OriginalWeights")
        .select("MaxWeight, WorkoutNameId");

    return data;
}

export async function getWorkoutNames() {
    const { data } = await supabase
        .from("WorkoutNames")
        .select("WorkoutNameId, Name")
        .order("Name");

    return data;
}

export async function getWorkouts() {
    const { data } = await supabase
        .from("Workout")
        .select("WorkoutId, WorkoutNameId, MaxWeight, WorkoutDate, MuscleGroupId")
        .order("WorkoutDate", { ascending: false });

    return data;
}

export async function newWorkout(formData: NewWorkoutType) {
    const {
        workoutNameId,
        maxWeight,
        workoutDate,
        muscleGroupId
    } = formData;

    const { data } = await supabase
        .from("Workout")
        .insert({
            WorkoutNameId: workoutNameId,
            MaxWeight: maxWeight,
            WorkoutDate: workoutDate,
            MuscleGroupId: muscleGroupId
        })
        .select();

    return data;
}

export async function newWorkoutName(formData: NewWorkoutNameType) {
    const {
        name
    } = formData;

    const { data } = await supabase
        .from("WorkoutNames")
        .insert({
            Name: name
        })
        .limit(1)
        .select();

    return data;
}