import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type IconLookupType = {
    display: string
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>
}

export type FooterLinkType = {
    display: string,
    link: string
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

export type MyAccountItemType = {
    title: string,
    content: JSX.Element,
}

export type NewWorkoutNameType = {
    name: string
}

export type NewWorkoutType = {
    workoutNameId: number,
    maxWeight: number,
    workoutDate: Date,
    muscleGroupId: number
}

export type WorkoutNameType = {
    WorkoutNameId: number,
    Name: string
}

export type WorkoutType = {
    WorkoutId: number,
    WorkoutNameId: number,
    MaxWeight: number,
    WorkoutDate: Date,
    MuscleGroupId: number
}