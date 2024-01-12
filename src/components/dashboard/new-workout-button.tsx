"use client";

import NewWorkoutModal from "./new-workout-modal";
import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import type { User } from "@supabase/auth-helpers-nextjs";

export default function NewWorkoutButton() {

    const [showModal, setShowModal] = useState<boolean>(false);
    const [user, setUser] = useState<User | null>(null);

    const supabase = createClientComponentClient();

    useEffect(() => {
        async function getUser() {
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user);
        }

        getUser();
    });

    if (!user) {
        return null;
    } else {

        return (
            <>
                <div className="relative md:absolute md:right-0 mb-8 md:mb-0 shadow">
                    <Button onClick={() => { setShowModal(true); }} className="text-base font-normal tracking-normal leading-normal normal-case bg-sky-600 hover:bg-sky-700 shadow">New Workout</Button>
                </div>

                {showModal ? <NewWorkoutModal onClose={() => { setShowModal(false); }} /> : null}
            </>
        );
    }
}