"use client";

import {
    useEffect,
    useState
} from "react";
import { Card } from "@material-tailwind/react";
import axios from "axios";
import setWorkoutTableRow from "./table-rows";
import { muscleGroupImages } from "../../app/lib/muscle-groups";
import LoadingTable from "./table-loading";

import type {
    MuscleGroupImageType,
    MuscleGroupType,
    OriginalWeightsType,
    WorkoutNameType,
    WorkoutType
} from "../../app/lib/type-library";

export default function Page() {

    const [muscleGroups, setMuscleGroups] = useState<MuscleGroupType[]>([]);
    const [originalWeights, setOriginalWeights] = useState<OriginalWeightsType[]>([]);
    const [workoutNames, setWorkoutNames] = useState<WorkoutNameType[]>([]);
    const [workouts, setWorkouts] = useState<WorkoutType[]>([]);

    const workoutTableHeader = ["Muscle Group", "Workout", "Max Wieght", "Date"];

    useEffect(() => {
        const interval = setInterval(() => {
            axios.get("/api/get-muscle-groups").then((response) => {
                setMuscleGroups(response.data);
            });

            axios.get("/api/get-original-weights").then((response) => {
                setOriginalWeights(response.data);
            });

            axios.get("/api/get-recent-workouts").then((response) => {
                setWorkouts(response.data);
            });

            axios.get("/api/get-workout-names").then((response) => {
                setWorkoutNames(response.data);
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    workouts.sort((a, b) => {
        return new Date(b.WorkoutDate).getTime() - new Date(a.WorkoutDate).getTime();
    });

    function getWorkoutDetails(workout: WorkoutType, isLast: boolean) {
        const muscleGroupData: MuscleGroupImageType = getMuscleGroupInformation(workout.MuscleGroupId);
        const workoutName = workoutNames.find((e) => e.WorkoutNameId === workout.WorkoutNameId)?.Name!;
        const netChange = calculateNetChange(workout.MaxWeight, workout.WorkoutNameId);

        return setWorkoutTableRow(workout, muscleGroupData, workoutName, netChange, isLast);
    }

    function getMuscleGroupInformation(muscleGroupId: number) {
        const MuscleGroupName: string = muscleGroups.find(muscleGroups => muscleGroups.MuscleGroupId === muscleGroupId)?.Name ?? "Full Body";
        const MuscleGroupImage: string = muscleGroupImages.find(muscleGroups => muscleGroups.muscleGroup === MuscleGroupName)?.url ?? "/static/chest.png";

        return { MuscleGroupName, MuscleGroupImage };
    }

    function calculateNetChange(currentWeight: number, workoutNameId: number) {
        const netChange: number = currentWeight - originalWeights.find((e) => e.WorkoutNameId === workoutNameId)?.MaxWeight!;

        return netChange;
    }

    if (workouts.length === 0) {
        return <>
            <LoadingTable />
        </>;
    }

    return <>
        <Card className="h-full w-full rounded-lg border border-gray-300">
            <table className="w-full text-center md:text-left text-wrap shadow-lg rounded-lg table-fixed">
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