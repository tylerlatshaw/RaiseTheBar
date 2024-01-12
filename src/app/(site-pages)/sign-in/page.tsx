"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import {
    useEffect,
    useState
} from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@material-tailwind/react";
import LoginIcon from "@mui/icons-material/Login";
import Link from "next/link";
import LoadingTable from "@/components/sign-in/loading-table";

import type { User } from "@supabase/auth-helpers-nextjs";

export default function Page() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const [user, setUser] = useState<User>();
    const [loading, setLoading] = useState(true);

    const supabase = createClientComponentClient();

    useEffect(() => {
        async function getUser() {
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user!);
            setLoading(false);
        }

        getUser();
    });

    const handleSignIn = async () => {
        const res = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        setUser(res.data.user!);
        setEmail("");
        setPassword("");
        router.push("/my-account");
    };

    const getForm = () => {

        if (user) {
            router.push("/my-account");
            return <>
                <LoadingTable />
            </>;
        }

        if (loading) {
            return <>
                <LoadingTable />
            </>;
        }

        if (!loading && !user) {
            return <>
                <div className="flex flex-col w-full md:w-fit space-y-6 mx-auto p-4 md:p-8 bg-gray-300 rounded shadow-md">
                    <TextField
                        required
                        label="Email"
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        variant="filled"
                        className="w-full md:w-96 bg-white"
                    />
                    <div className="flex flex-col">
                        <TextField
                            required
                            label="Password"
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            variant="filled"
                            className="w-full md:w-96 bg-white"
                        />
                        <Link href={"/forgot-password"} className="w-full text-right text-gray-600 hover:text-sky-600 text-sm pt-1">Forgot Password?</Link>
                    </div>

                    <div className="flex flex-row space-x-4 mx-auto">
                        <Button className="flex flex-row items-center text-base font-normal tracking-normal leading-normal bg-sky-600 hover:bg-sky-700 drop-shadow-md py-2 px-2" onClick={handleSignIn}>
                            <span className="pl-1 pr-3 lg:px-2">
                                <LoginIcon />
                            </span>
                            <span className="pr-4 normal-case">Sign In</span>
                        </Button>
                    </div>

                    <span className="w-full text-center text-gray-600">
                        Not a user? <Link href={"/sign-up"} className="hover:text-sky-600">Sign up now</Link>
                    </span>
                </div>
            </>;
        }
    };

    return <>
        <meta name="robots" content="noindex,nofollow" />
        <div className="w-full xl:w-4/5 mx-auto p-2 md:p-6">

            <div className="flex w-full">
                <h1 className="text-4xl mx-auto my-6">Sign In</h1>
            </div>

            {
                getForm()
            }

        </div>
    </>;
}