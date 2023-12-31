"use client";

import Image from "next/image";
import { roboto } from "@/app/fonts";
import { loginWithGoogle } from "@/utilities/authentication";
import { Button } from "@material-tailwind/react";

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
        <>
            <div className="desktop-only">
                <Button className="flex flex-row items-center text-base tracking-normal leading-normal bg-[#1a73e8] hover:bg-[#1a73e8]/80 drop-shadow-md p-0 rounded-full" onClick={handleClick}>
                    <div className="bg-white rounded-full p-2 m-1">
                        <Image src={"static/google-g-logo.svg"} width={20} height={20} alt={"Google Logo"} className="" />
                    </div>
                    <span className={roboto.className + " px-8 hidden lg:flex"}>Sign in with Google</span>
                </Button>
            </div>

            <div className="mobile-only flex justify-center absolute z-50 right-0 left-0 bottom-0 w-full p-3 mb-3">
                <Button className="flex flex-row items-center p-0 text-base tracking-normal leading-normal bg-[#1a73e8] hover:bg-[#1a73e8]/80 drop-shadow-md rounded-full" onClick={handleClick}>
                    <div className="bg-white rounded-full p-2 m-1">
                        <Image src={"static/google-g-logo.svg"} width={20} height={20} alt={"Google Logo"} className="" />
                    </div>
                    <span className={roboto.className + " px-8"}>Sign in with Google</span>
                </Button>
            </div>
        </>
    );
}