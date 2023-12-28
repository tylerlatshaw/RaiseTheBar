import { supabase } from "./supabase";

export async function loginWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google"
    });
}

export async function logout() {
    await supabase.auth.signOut();
}