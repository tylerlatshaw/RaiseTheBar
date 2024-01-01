"use client";

import {
    useEffect,
    useState
} from "react";
import { Card } from "@material-tailwind/react";
import axios from "axios";
import setWorkoutTableRow from "./workout-table-row";
import { muscleGroupImages, workoutTableHeader } from "../../app/lib/workout-history-data";

import type {
    MuscleGroupImageType,
    MuscleGroupType,
    WorkoutNameType,
    WorkoutType
} from "../../app/lib/type-library";

export default function Page() {

    const [muscleGroups, setMuscleGroups] = useState<MuscleGroupType[]>([]);
    const [workoutNames, setWorkoutNames] = useState<WorkoutNameType[]>([]);
    const [workouts, setWorkouts] = useState<WorkoutType[]>([]);

    useEffect(() => {
        axios.get("/api/get-muscle-groups").then((response) => {
            setMuscleGroups(response.data);
        });

        axios.get("/api/get-workout-names").then((response) => {
            setWorkoutNames(response.data);
        });

        axios.get("/api/get-workouts").then((response) => {
            setWorkouts(response.data);
        });
    }, []);

    function getMuscleGroupInformation(muscleGroupId: number) {
        const MuscleGroupName: string = muscleGroups.find(muscleGroups => muscleGroups.MuscleGroupId === muscleGroupId)?.Name ?? "Full Body";
        const MuscleGroupImage: string = muscleGroupImages.find(muscleGroups => muscleGroups.muscleGroup === MuscleGroupName)?.url ?? "/static/chest.png";

        return { MuscleGroupName, MuscleGroupImage };
    }

    function getWorkoutDetails(workout: WorkoutType, isLast: boolean) {
        const muscleGroupData: MuscleGroupImageType = getMuscleGroupInformation(workout.MuscleGroupId);

        const workoutName = workoutNames.find((e) => e.WorkoutNameId === workout.WorkoutNameId)?.Name!;

        return setWorkoutTableRow(workout, muscleGroupData, workoutName, isLast);
    }

    return <>
        <Card className="h-full w-full rounded-lg border border-gray-300">
            <table className="w-full table-auto text-center md:text-left text-wrap shadow-lg rounded-lg">
                <thead>
                    <tr>
                        {
                            workoutTableHeader.map((headerItem) => (
                                <th key={headerItem} className="px-2 py-4 bg-sky-300 border-b-4 border-sky-500 first:rounded-tl-lg last:rounded-tr-lg">
                                    {headerItem}
                                </th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        workouts.map((workout, index) => (
                            <tr key={workout.WorkoutId} className="px-2 border-b border-gray-300">
                                {
                                    workouts[index + 1] ? getWorkoutDetails(workout, false) : getWorkoutDetails(workout, true)
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </Card>
    </>;
}