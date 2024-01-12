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
    content: JSX.Element
}

export type NewWorkoutNameType = {
    name: string
}

export type NewWorkoutType = {
    workoutNameId: number,
    UUID: string,
    maxWeight: number,
    workoutDate: Date,
    muscleGroupId: number
}

export type OriginalWeightsType = {
    UUID: string,
    WorkoutNameId: number,
    MaxWeight: number
}

export type ResponseClassType = " positive-response" | " negative-response" | " hidden"

export type UserType = {
    UUID: string,
    FirstName: string,
    LastName: string,
    EmailAddress: string,
    Initials: string
}

export type WorkoutNameType = {
    WorkoutNameId: number,
    Name: string
}

export type WorkoutType = {
    WorkoutId: number,
    WorkoutNameId: number,
    UUID: string,
    MaxWeight: number,
    WorkoutDate: Date,
    MuscleGroupId: number
}