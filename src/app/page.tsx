import { cookies } from "next/headers";
import NewWorkoutButton from "../components/dashboard/new-workout-button";
import WorkoutTable from "../components/dashboard/table-data";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

export default async function Page() {

    const cookieStore = cookies();
    const supabase = createServerComponentClient({ cookies: () => cookieStore });

    const { data: { user } } = await supabase.auth.getUser();

    return <>
        <div className="w-full md:w-4/5 mx-auto p-2 md:p-6">

            <div className="relative flex flex-col md:flex-row items-center w-full">
                <h1 className="text-4xl mx-auto my-6">Gym Record</h1>
                {
                    user ? <NewWorkoutButton /> : null
                }
            </div>

            <WorkoutTable />

        </div>
    </>;
}