"use client";

import {
    MuscleGroupImageType,
    WorkoutType
} from "../../app/lib/type-library";
import { Avatar } from "@material-tailwind/react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function setWorkoutTableRow(workout: WorkoutType, muscleGroupData: MuscleGroupImageType, workoutName: string, netChange: number, isLast: boolean) {

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

    function getNetChangeHtml() {
        if (netChange < 0) {
            return <>
                <span className="negative-response font-bold text-xs">
                    <ArrowDropDownIcon className="text-base" />{netChange}
                </span>
            </>;
        } else if (netChange > 0) {
            return <>
                <span className="positive-response font-bold text-xs">
                    <ArrowDropUpIcon className="text-base" />{netChange}
                </span>
            </>;
        } else {
            return <>
                <span className="neutral-response font-bold text-xs">
                    <div className="flex flex-row items-center mx-2">
                        <div className="h-[2px] w-[8px] bg-neutral-response mr-2"></div>{netChange}
                    </div>
                </span>
            </>;
        }
    }

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
                        {
                            getNetChangeHtml()
                        }
                    </span>
                </td>
                <td className={"p-2 leading-none bg-gray-200" + cellRoundingBR}>
                    {formattedDate}
                </td>
            </>
        }
    </>;
}