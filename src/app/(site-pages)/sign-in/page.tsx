"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@material-tailwind/react";
import LoginIcon from "@mui/icons-material/Login";

export default function Page() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const supabase = createClientComponentClient();

    useEffect(() => {
        async function getUser() {
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user);
            setLoading(false);
        }

        getUser();
    });

    if (user) {
        router.push("/my-account");
    }

    const handleSignUp = async () => {
        const res = await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: `${location.origin}/api/auth/callback`
            }
        });
        setUser(res.data.user);
        setEmail("");
        setPassword("");
        router.refresh();
    };

    const handleSignIn = async () => {
        const res = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        setUser(res.data.user);
        setEmail("");
        setPassword("");
        router.push("/my-account");
    };

    return <>
        <div className="w-full xl:w-4/5 mx-auto p-2 md:p-6">

            <div className="flex w-full">
                <h1 className="text-4xl mx-auto my-6">Sign In</h1>
            </div>

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

                <div className="flex flex-row space-x-4 mx-auto">
                    <Button className="flex flex-row items-center text-base font-normal tracking-normal leading-normal bg-sky-600 hover:bg-sky-700 drop-shadow-md py-2 px-2" onClick={handleSignIn}>
                        <span className="pl-1 pr-3 lg:px-2">
                            <LoginIcon />
                        </span>
                        <span className="pr-4">Sign In</span>
                    </Button>

                </div>
            </div>

        </div>
    </>;
}