"use client";

import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { getCurrentDateISOFormat } from "@/utilities/date-utilities";
import { RequestJson } from "@/app/api/new-workout/route";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import { CircularProgress } from "@mui/material/";
import { Button } from "@material-tailwind/react";
import { MuscleGroups } from "@/database/gym";

type SubmitState = "Idle" | "Success" | "Error";
type FormInputs = {
    date: Date
    muscleGroup: number
    workoutName: string
    weight: number
}

type NewWorkoutModalProps = {
    onClose: () => void
}

export default function NewWorkoutModal({ onClose }: NewWorkoutModalProps) {

    const {
        register,
        handleSubmit,
        reset,
    } = useForm<FormInputs>();

    const [submitState, setSubmitState] = useState<SubmitState>("Idle");
    const [responseMessage, setResponseMessage] = useState<string>("");
    const [loadingState, setLoadingState] = useState<boolean>(false);
    const [muscleGroups, setMuscleGroups] = useState<MuscleGroups[]>([]);

    useEffect(() => {
        axios.get("/api/gym/get-muscle-groups").then((response) => {
            setMuscleGroups(response.data);
        });
    }, []);

    const onSubmit: SubmitHandler<FormInputs> = async (formData) => {
        setSubmitState("Idle");
        setResponseMessage("");
        setLoadingState(true);

        try {
            const { data } = await axios.post("/api/gym/new-workout", {
                date: new Date(formData.date),
                muscleGroup: +formData.muscleGroup,
                workoutName: formData.workoutName,
                weight: +formData.weight,
            } as RequestJson);

            setResponseMessage(data.message);
            setSubmitState("Success");
            reset({
                workoutName: "",
                weight: NaN,
            });
        } catch (e) {
            setResponseMessage("Something went wrong. Please try again.");
            setSubmitState("Error");
        }

        setLoadingState(false);

        setTimeout(function () {
            closeModal();
        }, 3000);
    };

    function GetResponseCssClass() {
        if (submitState === "Success") {
            return "positive-response";
        }

        if (submitState === "Error") {
            return "negative-response";
        }

        return "negative-response";
    }

    function closeModal() {
        onClose();
    }

    return (
        <>
            <div className="fixed top-0 left-0 right-0 flex items-center w-screen h-screen bg-gray-300/60">
                <div className="flex items-center w-full">
                    <div className="z-50 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mx-auto shadow-lg shadow-black rounded-lg bg-gray-700">
                        <div className="relative max-h-full rounded-lg">

                            <form method="POST" onSubmit={handleSubmit(onSubmit)}>

                                {/* Modal Header */}
                                <div className="border-b-[1px] border-gray-500">
                                    <button type="button" onClick={closeModal} className="absolute top-4 right-4 inline-flex justify-center items-center rounded-lg w-8 h-8 text-gray-400 hover:text-white bg-transparent hover:bg-gray-600">
                                        <CloseIcon />
                                    </button>
                                    <div className="px-6 py-5 lg:px-8">
                                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Add New Workout</h3>
                                    </div>
                                </div>

                                {/* Modal Body*/}
                                <div className="px-6 py-6 lg:px-8 space-y-6">

                                    <div>
                                        <label htmlFor="workoutDate" className="flex mb-2 font-medium text-sm text-white">Date</label>
                                        <input {...register("date")} type="date" className="flex w-full p-2.5 rounded-lg bg-gray-600 text-sm text-white placeholder-gray-400 outline-none border border-gray-500 focus:border-green-600" value={getCurrentDateISOFormat()} required />
                                    </div>

                                    <div>
                                        <label htmlFor="muscleGroup" className="flex mb-2 font-medium text-sm text-white">Muscle Group</label>
                                        <select {...register("muscleGroup")} className="flex w-full p-2.5 rounded-lg bg-gray-600 text-sm text-white placeholder-gray-400 outline-none border border-gray-500 focus:border-green-600" required>
                                            {muscleGroups.map((group) => (
                                                <option key={group.MuscleGroupId} value={group.MuscleGroupId}>{group.Name}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="workoutName" className="flex mb-2 font-medium text-sm text-white">Workout Name</label>
                                        <input {...register("workoutName")} type="text" className="flex w-full p-2.5 rounded-lg bg-gray-600 text-sm text-white placeholder-gray-400 outline-none border border-gray-500 focus:border-green-600" placeholder="Leg Press" required />
                                    </div>

                                    <div>
                                        <label htmlFor="weight" className="block mb-2 font-medium text-sm text-white">Weight</label>
                                        <div className="group">
                                            <div className="flex w-full rounded-lg bg-gray-600 text-sm text-white placeholder-gray-400">
                                                <input {...register("weight")} type="number" className="flex items-center grow p-2.5 rounded-l-lg bg-gray-600 outline-none border-l border-y border-gray-500 peer focus:border-green-600" placeholder="120" required />

                                                <span className="flex items-center whitespace-nowrap w-fit px-5 py-2.5 rounded-r-lg bg-gray-500 outline-none border-r border-y border-gray-500 peer-focus:border-green-600">lbs.</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                {/* Modal Footer*/}
                                <div className="border-t-[1px] border-gray-500">
                                    <div className="px-6 py-4 lg:px-8 flex flex-row-reverse">
                                        <Button type="submit" className=" text-white bg-green-700 hover:bg-green-800 focus:ring-2 focus:outline-none focus:ring-green-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center" disabled={loadingState}>
                                            <span className="flex items-center">
                                                {loadingState ? <>Submit&nbsp;<CircularProgress size={16} sx={{ color: "white" }} /></> : <>Submit&nbsp;<SendIcon className="text-lg flex items-center" /></>}
                                            </span>
                                        </Button>
                                        <span className={`flex items-center text-right font-semibold pr-3 text-md  ${GetResponseCssClass()}`}>{responseMessage}</span>
                                    </div>

                                </div>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}