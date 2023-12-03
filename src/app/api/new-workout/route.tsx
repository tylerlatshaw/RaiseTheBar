import { NextResponse } from "next/server";
import { NewWorkout, addNewWorkout } from "@/database/gym";
import { getCurrentDate, getCurrentDateTime } from "@/utilities/date-utilities";

export type RequestJson = {
    date: Date
    muscleGroup: number
    workoutName: string
    weight: number
}

export async function POST(request: Request) {

    const { date, muscleGroup, workoutName, weight } = await request.json() as RequestJson;

    const dateTime = getCurrentDateTime(getCurrentDate());

    const formData: NewWorkout = {
        date,
        dateTime,
        muscleGroup,
        workoutName,
        weight,
    };

    await Promise.all([
        addNewWorkout(formData)
    ]);

    return NextResponse.json({
        status: "Ok",
        message: workoutName + " added successfully!",
    });
}