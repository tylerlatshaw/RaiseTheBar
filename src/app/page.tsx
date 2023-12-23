import SpeedDial from "@/components/speed-dial";
import WorkoutTable from "@/components/workout-table";

export default function Page() {
    return <>
        <div className="h-full w-full">
            <div className="container w-full md:w-4/5 xl:w-3/5 mx-auto p-2 md:p-6">
                <div className="flex w-full">
                    <h1 className="text-4xl mx-auto my-6">Gym Record</h1>
                </div>
                <WorkoutTable />
            </div>
        </div>
        <SpeedDial />
    </>;
}