"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import {
    useEffect,
    useState
} from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@material-tailwind/react";
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";
import LoadingTable from "@/components/forgot-password/loading-table";

import type { ResponseClassType } from "@/app/lib/type-library";
import type { User } from "@supabase/auth-helpers-nextjs";

export default function Page() {
    const [email, setEmail] = useState("");
    const router = useRouter();
    const [user, setUser] = useState<User | null>(null);
    const [response, setResponse] = useState("");
    const [responseClass, setResponseClass] = useState<ResponseClassType>(" hidden");
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

    const handleRequest = async () => {
        await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: `${location.origin}/reset-password`,
        });
        setEmail("");
        setResponse("Check your email to finish resetting your password");
        setResponseClass(" positive-response");
    };

    const getForm = () => {

        if (user) {
            router.push("/my-account");
        }

        if (loading) {
            return <>
                <LoadingTable />
            </>;
        }

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

                <span className={"text-center" + responseClass}>{response}</span>

                <div className="flex flex-row space-x-4 mx-auto">
                    <Button className="flex flex-row items-center text-base font-normal tracking-normal leading-normal bg-sky-600 hover:bg-sky-700 drop-shadow-md py-2 px-2" onClick={handleRequest}>
                        <span className="pl-1 pr-3 lg:px-2">
                            <EmailIcon />
                        </span>
                        <span className="pr-4 normal-case">Reset Password</span>
                    </Button>
                </div>

                <span className="w-full text-center text-gray-600">
                    Already a user? <Link href={"/sign-in"} className="hover:text-sky-600">Sign in now</Link>
                </span>
            </div>
        </>;
    };

    return <>
        <meta name="robots" content="noindex,nofollow" />
        <div className="w-full xl:w-4/5 mx-auto p-2 md:p-6">

            <div className="flex w-full">
                <h1 className="text-4xl mx-auto my-6">Forgot Passowrd</h1>
            </div>

            {
                getForm()
            }

        </div>
    </>;
}