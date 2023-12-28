import { Metadata } from "next";
import Accordion from "@/components/my-account/accordion";
import GitCommands from "./../../../components/my-account/git-commands";
import NodeCommands from "./../../../components/my-account/node-commands";
import SupabaseCommands from "../../../components/my-account/supabase-commands";

export const metadata: Metadata = {
    title: "My Account",
};

const accordionItems = [
    {
        title: "Supabase Commands",
        content: <SupabaseCommands />
    },
    {
        title: "Node Commands",
        content: <NodeCommands />
    },
    {
        title: "Git Commands",
        content: <GitCommands />
    }
];


export default function Page() {
    return <>
        <div className="w-full xl:w-4/5 mx-auto p-2 md:p-6">

            <div className="flex w-full">
                <h1 className="text-4xl mx-auto my-6">My Account</h1>
            </div>

            <Accordion items={accordionItems} />

        </div>
    </>;
}