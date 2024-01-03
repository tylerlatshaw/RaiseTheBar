"use client";

import {
    MuscleGroupImageType,
    WorkoutType
} from "../../app/lib/type-library";
import { Avatar } from "@material-tailwind/react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

export default function setWorkoutTableRow(workout: WorkoutType, muscleGroupData: MuscleGroupImageType, workoutName: string, isLast: boolean) {

    const {
        MaxWeight,
        WorkoutDate,
    } = workout;

    const {
        MuscleGroupName,
        MuscleGroupImage
    } = muscleGroupData;

    const newDate = new Date(WorkoutDate);
    const formattedDate = new Intl.DateTimeFormat("en-US", { year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit" }).format(newDate);
    const cellRoundingBL = isLast ? " rounded-bl-lg" : "";
    const cellRoundingBR = isLast ? " rounded-br-lg" : "";

    return <>
        {
            <>
                <td className={"flex flex-col md:flex-row items-center p-2 leading-none bg-gray-200" + cellRoundingBL}>
                    <Avatar src={MuscleGroupImage} className="h-12 w-12 mx-1 shadow-md rounded-full" />
                    <span className="mx-2">
                        {MuscleGroupName}
                    </span>
                </td>
                <td className="p-2 leading-none bg-gray-200">
                    {workoutName}
                </td>
                <td className="p-2 leading-none bg-gray-200">
                    <span className="flex flex-col md:flex-row items-center leading-normal">
                        {MaxWeight} lbs.
                        <span className="positive-response font-bold text-xs">
                            <ArrowDropUpIcon className="text-base" />15
                        </span>
                    </span>
                </td>
                <td className={"p-2 leading-none bg-gray-200" + cellRoundingBR}>
                    {formattedDate}
                </td>
            </>
        }
    </>;
}