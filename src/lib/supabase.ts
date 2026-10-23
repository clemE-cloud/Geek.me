import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// The publishable key is meant to be public: what it can do is limited by the
// row-level security rules in supabase/schema.sql. Never put a secret key here.
const url: string = import.meta.env.VITE_SUPABASE_URL ?? "https://lnovhmmervkxdrrhszsy.supabase.co";
const key: string = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ?? "sb_publishable_FFTL0Tvj9vAif87oKc9CcQ_p0ms92NH";

export const supabase: SupabaseClient | null =
  url && key
    ? createClient(url, key, {
        auth: {
          // PKCE puts a one-time ?code= in the link, which doesn't clash with the app's #/ routes.
          flowType: "pkce",
          persistSession: true,
          autoRefreshToken: true,
          detectSessionInUrl: true,
        },
      })
    : null;
