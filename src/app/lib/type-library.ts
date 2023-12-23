import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type IconLookupType = {
    display: string
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>
}

export type FooterSocialType = {
    display: string,
    link: string,
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>
}

export type MuscleGroupType = {
    MuscleGroupId: number,
    Name: string
}

export type MuscleGroupImageType = {
    MuscleGroupName: string,
    MuscleGroupImage: string
}

export type NavigationLinkType = {
    display: string,
    link: string,
    filepath: string,
    changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never",
    priority: number
}

export type NewWorkoutType = {
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