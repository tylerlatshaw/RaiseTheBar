"use client";

import {
    MuscleGroupImageType,
    WorkoutType
} from "../../app/lib/type-library";
import { Avatar } from "@material-tailwind/react";

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
                <td className="table-cell md:flex md:flex-row md:items-center p-2 border-b border-blue-gray-50 leading-none">
                    <Avatar src={MuscleGroupImage} className="desktop-only h-6 w-6 mx-1 shadow-md rounded-full" />
                    <span className="mx-2">
                        {MuscleGroupName}
                    </span>
                </td>
                <td className="p-2 border-b border-blue-gray-50 leading-none">
                    {workoutName}
                </td>
                <td className="p-2 border-b border-blue-gray-50 leading-none">
                    <span className="flex flex-col leading-normal">
                        {MaxWeight} lbs.
                    </span>
                </td>
                <td className="p-2 border-b border-blue-gray-50 leading-none">
                    {formattedDate}
                </td>
            </>
        }
    </>;
}