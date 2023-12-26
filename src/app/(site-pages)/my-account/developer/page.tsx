import { Metadata } from "next";
import CliCommands from "./../../../../components/developer/cli-commands";

export const metadata: Metadata = {
    title: "Developer Tools",
};

export default function Page() {
    return <>
        <div className="w-full md:w-4/5 mx-auto p-2 md:p-6">

            <div className="flex w-full">
                <h1 className="text-4xl mx-auto my-6">Developer Tools</h1>
            </div>

            <div className="w-full">
                <CliCommands />
            </div>

        </div>
    </>;
}