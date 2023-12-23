"use client";

import {
    useEffect,
    useState
} from "react";
import { Card } from "@material-tailwind/react";
import axios from "axios";
import setWorkoutTableRow from "./workout-table-row";
import { muscleGroupImages, workoutTableHeader } from "@/app/lib/workout-table-data";

import type {
    MuscleGroupImageType,
    MuscleGroupType,
    WorkoutType
} from "@/app/lib/type-library";

export default function Page() {

    const [muscleGroups, setMuscleGroups] = useState<MuscleGroupType[]>([]);
    const [workouts, setWorkouts] = useState<WorkoutType[]>([]);

    useEffect(() => {
        axios.get("/api/get-muscle-groups").then((response) => {
            setMuscleGroups(response.data);
        });

        axios.get("/api/get-workouts").then((response) => {
            setWorkouts(response.data);
        });
    }, []);

    function getMuscleGroupInformation(muscleGroupId: number) {
        const MuscleGroupName: string = muscleGroups.find(muscleGroups => muscleGroups.MuscleGroupId === muscleGroupId)?.Name ?? "Full Body";
        const MuscleGroupImage: string = muscleGroupImages.find(muscleGroups => muscleGroups.muscleGroup === MuscleGroupName)?.url ?? "/static/chest.png";

        return {MuscleGroupName, MuscleGroupImage};
    }

    function getWorkoutDetails(workout: WorkoutType) {
        const muscleGroupData: MuscleGroupImageType = getMuscleGroupInformation(workout.MuscleGroupId);

        return setWorkoutTableRow(workout, muscleGroupData);
    }

    return <>
        <Card className="h-full w-full rounded">
            <table className="w-full table-auto text-center md:text-left text-wrap bg-white/75">
                <thead>
                    <tr>
                        {workoutTableHeader.map((headerItme) => (
                            <th key={headerItme} className="px-2 py-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                {headerItme}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {
                        workouts.map((workout) => (
                            <tr key={workout.WorkoutId} className="px-2">
                                {getWorkoutDetails(workout)}
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </Card>
    </>;
}