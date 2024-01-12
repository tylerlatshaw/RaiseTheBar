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
import { InfoBubble } from "@/components/sign-up/info-bubble";
import LoadingTable from "@/components/sign-up/loading-table";

import type { ResponseClassType } from "@/app/lib/type-library";
import type { User } from "@supabase/auth-helpers-nextjs";

export default function Page() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [accessCode, setAccessCode] = useState("");
    const [user, setUser] = useState<User>();
    const [loading, setLoading] = useState(true);
    const [response, setResponse] = useState("");
    const [responseClass, setResponseClass] = useState<ResponseClassType>(" hidden");
    const router = useRouter();

    const supabase = createClientComponentClient();

    const apiKey = process.env.NEXT_PUBLIC_API_KEY;

    useEffect(() => {
        async function getUser() {
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user!);
            setLoading(false);
        }

        getUser();
    });

    if (user) {
        router.push("/my-account");
    }

    const handleSignUp = async () => {

        if (accessCode === apiKey) {
            const res = await supabase.auth.signUp({
                email,
                password,
                options: {
                    emailRedirectTo: `${location.origin}/api/auth/callback`,
                    data: {
                        first_name: firstName,
                        last_name: lastName,
                        display_name: firstName + " " + lastName,
                        initials: firstName.charAt(0) + lastName.charAt(0)
                    }
                }
            });

            setUser(res.data.user!);
            setResponse("Success! Check your email to finish");
            setResponseClass(" positive-response");
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setAccessCode("");
            router.refresh();
        } else {
            setResponse("Error: Invalid Access Code");
            setResponseClass(" negative-response");
        }
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
                        label="First Name"
                        type="text"
                        name="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        variant="filled"
                        className="w-full md:w-96 bg-white"
                    />
                    <TextField
                        required
                        label="Last Name"
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        variant="filled"
                        className="w-full md:w-96 bg-white"
                    />
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
                    <div className="flex flex-col">
                        <TextField
                            required
                            label="Access Code"
                            type="password"
                            name="accessCode"
                            value={accessCode}
                            onChange={(e) => setAccessCode(e.target.value)}
                            variant="filled"
                            className="w-full md:w-96 bg-white"
                        />
                        <InfoBubble />
                    </div>

                    <span className={"text-center" + responseClass}>{response}</span>

                    <div className="flex flex-row space-x-4 mx-auto">
                        <Button className="flex flex-row items-center text-base font-normal tracking-normal leading-normal bg-sky-600 hover:bg-sky-700 drop-shadow-md py-2 px-2" onClick={handleSignUp}>
                            <span className="pl-1 pr-3 lg:px-2">
                                <LoginIcon />
                            </span>
                            <span className="pr-4 normal-case">Sign Up</span>
                        </Button>
                    </div>

                    <span className="w-full text-center text-gray-600">
                        Already a user? <Link href={"/sign-in"} className="hover:text-sky-600">Sign in now</Link>
                    </span>
                </div>
            </>;
        }
    };

    return <>
        <meta name="robots" content="noindex,nofollow" />
        <div className="w-full xl:w-4/5 mx-auto p-2 md:p-6">

            <div className="flex w-full">
                <h1 className="text-4xl mx-auto my-6">Sign Up</h1>
            </div>

            {
                getForm()
            }

        </div>
    </>;
}