"use client";

import NewWorkoutModal from "./new-workout-modal";
import { Button } from "@material-tailwind/react";
import { useState } from "react";

export default function NewWorkoutButton() {

    const [showModal, setShowModal] = useState<boolean>(false);

    return (
        <>
            <div className="relative md:absolute md:right-0 mb-8 md:mb-0">
                <Button onClick={() => { setShowModal(true); }} className="text-base font-normal tracking-normal leading-normal bg-sky-600 hover:bg-sky-700 shadow">New Workout</Button>
            </div>

            {showModal ? <NewWorkoutModal onClose={() => { setShowModal(false); }} /> : null}
        </>
    );
}