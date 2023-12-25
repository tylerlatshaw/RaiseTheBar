"use client";

import {
    MuscleGroupType,
    NewWorkoutNameType,
    NewWorkoutType,
    WorkoutNameType
} from "../../app/lib/type-library";
import {
    DropdownItemType,
    dropdownStyles,
    inputStyles,
    labelStyles
} from "./dropdown-configuration";
import noDataFound from "../global-components/no-data-found";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import {
    Controller,
    SubmitHandler,
    useForm
} from "react-hook-form";
import Select from "react-select";
import { components } from "react-select";
import CreatableSelect from "react-select/creatable";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import { CircularProgress } from "@mui/material/";
import { Button } from "@material-tailwind/react";
import { Avatar } from "@material-tailwind/react";
import { muscleGroupImages } from "@/app/lib/dashboard-data";

type SubmitState = "Idle" | "Success" | "Error";

type FormInputs = {
    workout: DropdownItemType,
    maxWeight: number,
    workoutDate: Date,
    muscleGroup: DropdownItemType
};

type NewWorkoutModalProps = {
    onClose: () => void
}

export default function NewWorkoutModal({ onClose }: NewWorkoutModalProps) {

    const {
        register,
        handleSubmit,
        control,
        reset
    } = useForm<FormInputs>();

    const [submitState, setSubmitState] = useState<SubmitState>("Idle");
    const [responseMessage, setResponseMessage] = useState<string>("");
    const [loadingState, setLoadingState] = useState<boolean>(false);
    const [muscleGroups, setMuscleGroups] = useState<MuscleGroupType[]>([]);
    const [workoutNames, setWorkoutNames] = useState<WorkoutNameType[]>([]);

    const muscleGroupOptions: DropdownItemType[] = muscleGroups.map((value) => ({
        value: value.MuscleGroupId,
        label: value.Name,
        image: muscleGroupImages.find(muscleGroups => muscleGroups.muscleGroup === value.Name)?.url ?? "/static/chest.png"
    }));

    const workoutNameOptions: DropdownItemType[] = workoutNames.map((value) => ({
        value: value.WorkoutNameId,
        label: value.Name,
        image: null
    }));

    useEffect(() => {
        axios.get("/api/get-muscle-groups").then((response) => {
            setMuscleGroups(response.data);
        });

        axios.get("/api/get-workout-names").then((response) => {
            setWorkoutNames(response.data);
        });
    }, []);

    const onSubmit: SubmitHandler<FormInputs> = async (formData) => {
        setSubmitState("Idle");
        setResponseMessage("");
        setLoadingState(true);

        try {
            let workoutId: number;

            if (isNaN(+formData.workout.value!)) {
                const { data } = await axios.post("/api/add-workout-name", {
                    name: formData.workout.label
                } as NewWorkoutNameType);
                workoutId = +data.message[0].WorkoutNameId;
            } else {
                workoutId = +formData.workout.value!;
            }

            const { data } = await axios.post("/api/add-workout", {
                workoutNameId: workoutId,
                maxWeight: +formData.maxWeight,
                workoutDate: new Date(formData.workoutDate),
                muscleGroupId: +formData.muscleGroup.value!
            } as NewWorkoutType);

            setResponseMessage(data.message);
            setSubmitState("Success");
            reset({
                workout: undefined,
                maxWeight: NaN,
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

    function getDateTime() {
        var now = new Date();
        now.setMinutes(now.getMinutes() - now.getTimezoneOffset());

        now.setSeconds(0);
        now.setMilliseconds(0);

        return now.toISOString().slice(0, -1);
    }

    return (
        <>
            <div className="fixed top-0 left-0 right-0 flex items-center w-screen h-screen bg-gray-300/60 z-40">
                <div className="flex items-center w-full m-2">
                    <div className="z-50 w-full sm:w-1/2 md:w-1/3 mx-auto shadow-lg shadow-black rounded-lg bg-gray-700">
                        <div className="relative max-h-full rounded-lg">

                            <form method="POST" onSubmit={handleSubmit(onSubmit)}>

                                {/* Modal Header */}
                                <div className="border-b-[1px] border-gray-500">
                                    <button type="button" onClick={closeModal} className="absolute top-4 right-4 inline-flex justify-center items-center rounded-lg w-8 h-8 text-gray-400 hover:text-white bg-transparent hover:bg-gray-600">
                                        <CloseIcon />
                                    </button>
                                    <div className="px-6 py-5 lg:px-8">
                                        <h3 className="text-xl font-medium text-white">Add New Workout</h3>
                                    </div>
                                </div>

                                {/* Modal Body*/}
                                <div className="px-4 py-6 lg:px-6 space-y-6">

                                    <div className="w-full">
                                        <label htmlFor="workoutDate" className={labelStyles}>
                                            Date
                                        </label>
                                        <input {...register("workoutDate")} type="datetime-local" className={inputStyles} value={getDateTime()} required />
                                    </div>

                                    <div className="w-full">
                                        <label htmlFor="muscleGroup" className={labelStyles}>
                                            Muscle Group
                                        </label>
                                        <Controller name="muscleGroup" control={control} rules={{ required: true }} render={({ field }) =>
                                            <Select {...field}
                                                isClearable={false}
                                                isMulti={false}
                                                isLoading={loadingState}
                                                options={loadingState ? [] : muscleGroupOptions}
                                                noOptionsMessage={() => noDataFound("Muscle Groups")}
                                                styles={dropdownStyles}
                                                components={{ Input: props => <components.Input {...props} maxLength={50} /> }}
                                                required
                                                formatOptionLabel={item => (
                                                    <div className="flex flex-row items-center">
                                                        <Avatar src={item.image!} className="h-8 w-8 mr-2 shadow-md rounded-full" />
                                                        <span>{item.label}</span>
                                                    </div>
                                                )}
                                            />
                                        } />
                                    </div>

                                    <div className="w-full">
                                        <label htmlFor="workout" className={labelStyles}>
                                            Workout
                                        </label>
                                        <Controller name="workout" control={control} rules={{ required: true }} render={({ field }) =>
                                            <CreatableSelect {...field}
                                                isClearable={false}
                                                isMulti={false}
                                                isLoading={loadingState}
                                                options={loadingState ? [] : workoutNameOptions}
                                                noOptionsMessage={() => noDataFound("Workouts")}
                                                styles={dropdownStyles}
                                                components={{ Input: props => <components.Input {...props} maxLength={50} /> }}
                                                required
                                            />
                                        } />
                                    </div>

                                    <div className="w-full">
                                        <label htmlFor="maxWeight" className={labelStyles}>
                                            Weight
                                        </label>
                                        <div className="group">
                                            <div className="flex w-full rounded-lg bg-gray-600 text-sm text-white placeholder-gray-400">
                                                <input {...register("maxWeight")} type="number" className={inputStyles + " rounded-r-none"} placeholder="120" required />

                                                <span className="flex items-center whitespace-nowrap w-fit px-5 py-2.5 rounded-r-lg bg-gray-500 outline-none border-r border-y border-gray-500 peer-focus:border-sky-600">lbs.</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                {/* Modal Footer*/}
                                <div className="border-t-[1px] border-gray-500">
                                    <div className="px-6 py-4 lg:px-8 flex flex-row-reverse">
                                        <Button type="submit" className=" text-white bg-sky-600 hover:bg-sky-700 focus:ring-2 focus:outline-none focus:ring-sky-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center" disabled={loadingState}>
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