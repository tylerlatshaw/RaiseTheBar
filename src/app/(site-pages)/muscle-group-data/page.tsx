import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Muscle Groups",
};

export default function Page() {
    return <>
        <div className="h-full w-full">
            <div className="container w-full md:w-4/5 xl:w-3/5 mx-auto p-6">
                <div className="flex w-full">
                    <h1 className="text-4xl mx-auto my-6">Muscle Group Data</h1>
                </div>
            </div>
        </div>
    </>;
}