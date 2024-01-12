import { Metadata } from "next";
import MyAccount from "@/components/my-account/my-account-client";

export const metadata: Metadata = {
    title: "My Account",
};

export default function Page() {
    return <>
        <div className="w-full mx-auto p-2 md:p-6">

            <MyAccount />

        </div>
    </>;
}