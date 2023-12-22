import { createClient } from "@supabase/supabase-js";

const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey: string = process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);