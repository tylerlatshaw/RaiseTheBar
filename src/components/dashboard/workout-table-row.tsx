"use client";

import {
    MuscleGroupImageType,
    WorkoutType
} from "../../app/lib/type-library";
import { Avatar } from "@material-tailwind/react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

export default function setWorkoutTableRow(workout: WorkoutType, muscleGroupData: MuscleGroupImageType, workoutName: string) {

    const {
        MaxWeight,
        WorkoutDate,
    } = workout;

    const {
        MuscleGroupName,
        MuscleGroupImage
    } = muscleGroupData;

    const newDate = new Date(WorkoutDate);
    const formattedDate = new Intl.DateTimeFormat("en-US", { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" }).format(newDate);

    return <>
        {
            <>
                <td className="flex flex-col md:flex-row items-center p-2 leading-none">
                    <Avatar src={MuscleGroupImage} className="h-12 w-12 mx-1 shadow-md rounded-full" />
                    <span className="mx-2">
                        {MuscleGroupName}
                    </span>
                </td>
                <td className="p-2 leading-none">
                    {workoutName}
                </td>
                <td className="p-2 leading-none">
                    <span className="flex flex-col md:flex-row items-center leading-normal">
                        {MaxWeight} lbs. 
                        <span className="positive-response font-bold text-xs">
                            <ArrowDropUpIcon className="text-base" />15
                        </span>
                    </span>
                </td>
                <td className="p-2 leading-none">
                    {formattedDate}
                </td>
            </>
        }
    </>;
}