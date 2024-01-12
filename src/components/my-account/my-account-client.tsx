"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Accordion from "./accordion";

import type { User } from "@supabase/auth-helpers-nextjs";
import type { UserType } from "../../app/lib/type-library";

export default function MyAccount() {

    const [user, setUser] = useState<User>();
    const [userDetails, setUserDetails] = useState<UserType>();
    const [loading, setLoading] = useState(true);

    const router = useRouter();
    const supabase = createClientComponentClient();

    useEffect(() => {
        async function getUser() {
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user!);
            setLoading(false);
        }

        setUserDetails({
            UUID: user?.id!,
            FirstName: user?.user_metadata.first_name,
            LastName: user?.user_metadata.last_name,
            EmailAddress: user?.email!,
            Initials: user?.user_metadata.Initials
        });

        getUser();
    }, [supabase.auth, user?.email, user?.id, user?.user_metadata.Initials, user?.user_metadata.first_name, user?.user_metadata.last_name]);

    function getPage() {

        return <>
            <div className="flex w-full">
                <h1 className="text-4xl mx-auto my-6">Hello, {userDetails?.FirstName}!</h1>
            </div>

            <Accordion />
        </>;
    }

    if (!loading) {
        if (!user) {
            router.push("/access-denied");
        } else {
            return getPage();
        }
    }
}