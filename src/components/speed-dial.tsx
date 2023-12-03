"use client";

import { Button } from "@material-tailwind/react";
import AddIcon from "@mui/icons-material/Add";
import NewWorkoutModal from "./new-workout-modal";
import { useState } from "react";

export default function CustomSpeedDial() {

    const [showModal, setShowModal] = useState<boolean>(false);

    return (
        <>
            <div className="absolute bottom-8 right-8">
                <div className="absolute bottom-4 right-4 h-fit w-fit group">
                    <Button size="lg" onClick={() => { setShowModal(true); }} className="bg-green-600 rounded-full shadow-xl transition-transform group-hover:rotate-45">
                        <AddIcon className="text-white h-12 w-12 p-1" />
                    </Button>
                </div>
            </div>

            {showModal ? <NewWorkoutModal onClose={() => { setShowModal(false); }} /> : null}
        </>
    );
}