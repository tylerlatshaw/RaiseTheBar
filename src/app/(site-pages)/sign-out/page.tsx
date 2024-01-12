"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import {
    useEffect,
    useState
} from "react";
import { Button } from "@material-tailwind/react";
import { CircularProgress } from "@mui/material/";
import LogoutIcon from "@mui/icons-material/Logout";

import type { User } from "@supabase/auth-helpers-nextjs";
import type { UserType } from "@/app/lib/type-library";

export default function Page() {
    const [user, setUser] = useState<User>();
    const [userDetails, setUserDetails] = useState<UserType>();
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    const supabase = createClientComponentClient();

    useEffect(() => {
        async function getUser() {
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user!);
            setUserDetails({
                UUID: user?.id!,
                FirstName: user?.user_metadata.first_name,
                LastName: user?.user_metadata.last_name,
                EmailAddress: user?.email!,
                Initials: user?.user_metadata.Initials
            });
            setLoading(false);
        }

        getUser();
    });

    const handleSignOut = async () => {
        setLoading(true);
        await supabase.auth.signOut();
        setLoading(false);

        router.refresh();
    };

    const getPage = () => {

        if (!loading) {
            if (user) {
                return <>
                    <div className="flex flex-col items-start space-y-6">
                        <span className="text-2xl">You are logged in as:</span>
                        <ul className="text-lg">
                            <li>First Name: {userDetails?.FirstName}</li>
                            <li>Last Name: {userDetails?.LastName}</li>
                            <li>Email Address: {userDetails?.EmailAddress}</li>
                        </ul>
                    </div>

                    <Button className="flex items-center text-base font-normal tracking-normal leading-normal w-fit bg-sky-600 hover:bg-sky-700 drop-shadow-md py-2 px-2" onClick={handleSignOut}>
                        <span className="pl-1 pr-3 lg:px-2">
                            {loading ? <CircularProgress size={16} sx={{ color: "white" }} /> : <LogoutIcon />}
                        </span>
                        <span className="pr-4 normal-case">Sign Out</span>
                    </Button>
                </>;
            } else {
                return <>
                    <span className="text-center text-2xl">You are not logged in</span>
                </>;
            }
        }
    };

    return <>
        <meta name="robots" content="noindex,nofollow" />
        <div className="w-full xl:w-4/5 mx-auto p-2 md:p-6">

            <div className="flex w-full">
                <h1 className="text-4xl mx-auto my-6">Sign Out</h1>
            </div>

            <div className="flex flex-col items-center w-full md:w-fit space-y-6 mx-auto p-4 md:p-8 bg-gray-300 rounded">
                {
                    getPage()
                }
            </div>

        </div>
    </>;
}