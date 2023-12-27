import SigninButton from "@/components/sign-in/sign-in-button";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sign In",
};

export default function Page() {

    return <>
        <div className="w-full md:w-4/5 mx-auto p-2 md:p-6">

            <div className="flex w-full">
                <h1 className="text-4xl mx-auto my-6">Sign In</h1>
            </div>

            <SigninButton />

        </div>
    </>;
}