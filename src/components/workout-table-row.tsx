"use client";

import { Avatar } from "@material-tailwind/react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import type {
    MuscleGroupImageType,
    WorkoutType
} from "./../app/lib/type-library";

export default function setWorkoutTableRow(workout: WorkoutType, muscleGroupData: MuscleGroupImageType) {

    const {
        Name,
        MaxWeight,
        WorkoutDate,
    } = workout;

    const {
        MuscleGroupName,
        MuscleGroupImage
    } = muscleGroupData;

    const newDate = new Date(WorkoutDate);
    const formattedDate = newDate.getMonth() + "/" + newDate.getDate() + "/" + newDate.getFullYear();

    return <>
        {
            <>
                <td className="flex flex-col md:flex-row items-center p-2 border-b border-blue-gray-50 leading-none">
                    <Avatar src={MuscleGroupImage} className="h-12 w-12 mx-1 shadow-md rounded-full" />
                    <span className="mx-2">
                        {MuscleGroupName}
                    </span>
                </td>
                <td className="p-2 border-b border-blue-gray-50 leading-none">
                    {Name}
                </td>
                <td className="p-2 border-b border-blue-gray-50 leading-none">
                    <span className="flex flex-col leading-normal">
                        {MaxWeight} lbs. <br />
                        <span className="positive-response font-bold text-xs">
                            <ArrowDropUpIcon className="text-base" />15
                        </span>
                    </span>
                </td>
                <td className="p-2 border-b border-blue-gray-50 leading-none">
                    {formattedDate}
                </td>
            </>
        }
    </>;
}