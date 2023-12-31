import { Metadata } from "next";
import WorkoutHistoryTable from "../../../components/workout-history/table-data";

export const metadata: Metadata = {
    title: "Workout History",
};

export default function Page() {
    return <>
        <div className="w-full md:w-4/5 mx-auto p-2 md:p-6">

            <div className="flex w-full">
                <h1 className="text-4xl mx-auto my-6">Workout History</h1>
            </div>

            <WorkoutHistoryTable />

        </div>
    </>;
}