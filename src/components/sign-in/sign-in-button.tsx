"use client";

import { loginWithGoogle } from "@/utilities/authentication";

export default function SigninButton() {

    const handleClick = () => {
        try {
            loginWithGoogle();
            return "logged in";
        } catch (error) {
            return error;
        }
    };

    return (
        <button className="bg-red-300" onClick={handleClick}>
            Log In
        </button>
    );
}