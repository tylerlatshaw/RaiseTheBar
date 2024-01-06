"use client";

import { useState } from "react";
import { supabase } from "./supabase";
import { useRouter } from "next/navigation";

export default function AuthenticationHandler() {
    const router = useRouter();
    const [user, setUser] = useState(null);

    const handleSignIn = async () => {
        const res = await supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
                redirectTo: `${location.origin}/api/auth/callback`
            }
        });
        setUser(res.data.user);
        router.refresh();
    };

}

export function LoginWithGoogle() {
    const router = useRouter();
    const [user, setUser] = useState(null);

    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google"
    });
}

export async function logout() {
    await supabase.auth.signOut();
}