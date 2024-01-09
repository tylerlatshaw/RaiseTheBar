import { Metadata } from "next";
import Accordion from "@/components/my-account/accordion";

export const metadata: Metadata = {
    title: "My Account",
};

export default async function Page() {
    return <>
        <div className="w-full xl:w-4/5 mx-auto p-2 md:p-6">

            <div className="flex w-full">
                <h1 className="text-4xl mx-auto my-6">My Account</h1>
            </div>

            <Accordion />

        </div>
    </>;
}