"use client";

import {
    Card,
    Avatar
} from "@material-tailwind/react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
//import axios from "axios";

const tableHead = ["Muscle Group", "Workout", "Max Wieght", "Date"];

const imageUrls = [
    {
        muscleGroup: "Abs",
        url: "/static/gym/abs.png",
    },
    {
        muscleGroup: "Back",
        url: "/static/gym/back.png",
    },
    {
        muscleGroup: "Biceps",
        url: "/static/gym/biceps.png",
    },
    {
        muscleGroup: "Chest",
        url: "/static/gym/chest.png",
    },
    {
        muscleGroup: "Forearms",
        url: "/static/gym/forearms.png",
    },
    {
        muscleGroup: "Legs",
        url: "/static/gym/legs.png",
    },
    {
        muscleGroup: "Shoulders",
        url: "/static/gym/shoulders.png",
    },
    {
        muscleGroup: "Triceps",
        url: "/static/gym/triceps.png",
    }
];

const tableRows = [
    {
        muscleGroup: "Abs",
        workout: "Workout Name",
        maxWeight: 123,
        date: "12/10/2023",
    },
    {
        muscleGroup: "Back",
        workout: "Workout Name",
        maxWeight: 54,
        date: "09/08/2023",
    },
    {
        muscleGroup: "Biceps",
        workout: "Workout Name",
        maxWeight: 54,
        date: "09/08/2023",
    },
    {
        muscleGroup: "Chest",
        workout: "Workout Name",
        maxWeight: 54,
        date: "09/08/2023",
    },
    {
        muscleGroup: "Forearms",
        workout: "Workout Name",
        maxWeight: 123,
        date: "12/10/2023",
    },
    {
        muscleGroup: "Legs",
        workout: "Workout Name",
        maxWeight: 54,
        date: "09/08/2023",
    },
    {
        muscleGroup: "Shoulders",
        workout: "Workout Name",
        maxWeight: 54,
        date: "09/08/2023",
    },
    {
        muscleGroup: "Triceps",
        workout: "Workout Name",
        maxWeight: 54,
        date: "09/08/2023",
    }
];

export default function Page() {

    //const data = axios.get("/api/get-gym-workouts");

    function lookupImageUrl(muscleGroup: string) {
        const url = imageUrls.find(imageUrls => imageUrls.muscleGroup === muscleGroup)?.url ?? "/static/gym/chest.png";
        return url;
    }

    return <>
        <Card className="h-full w-full rounded">
            <table className="w-full min-w-max table-auto text-left">
                <thead>
                    <tr>
                        {tableHead.map((head) => (
                            <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                {head}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {tableRows.map(({ muscleGroup, workout, maxWeight, date }, index) => {
                        const isLast = index === tableRows.length - 1;
                        const classes = isLast ? "p-2 leading-none" : "p-2 border-b border-blue-gray-50 leading-none";

                        return (
                            <tr key={index}>
                                <td className={classes}>
                                    <Avatar src={lookupImageUrl(muscleGroup)} className="h-12 w-12 ml-2 mr-3 shadow-md rounded-full" />
                                    {muscleGroup}
                                </td>
                                <td className={classes}>
                                    {workout}
                                </td>
                                <td className={classes}>
                                    <span className="flex flex-col leading-normal">
                                        {maxWeight} lbs. <br />
                                        <span className="positive-response font-bold text-xs">
                                            <ArrowDropUpIcon className="text-base" />15
                                        </span>
                                    </span>
                                </td>
                                <td className={classes}>
                                    {date}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Card>
    </>;
}