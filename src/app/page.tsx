import NewWorkoutButton from "@/components/dashboard/new-workout-button";
import WorkoutTable from "../components/dashboard/table-data";

export default async function Page() {

    return <>
        <div className="w-full md:w-4/5 mx-auto p-2 md:p-6">

            <div className="relative flex flex-col md:flex-row items-center w-full">
                <h1 className="text-4xl mx-auto my-6">Gym Record</h1>

                <NewWorkoutButton />
            </div>

            <WorkoutTable />

        </div>
    </>;
}