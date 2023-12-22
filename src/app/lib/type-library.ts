export type MuscleGroupType = {
    MuscleGroupId: number,
    Name: string
}

export type MuscleGroupImageType = {
    MuscleGroupName: string,
    MuscleGroupImage: string
}

export type NewWorkoutType= {
    workoutName: string,
    maxWeight: number,
    workoutDate: Date,
    muscleGroupId: number
}

export type WorkoutType = {
    WorkoutId: number,
    Name: string,
    MaxWeight: number,
    WorkoutDate: Date,
    MuscleGroupId: number
}