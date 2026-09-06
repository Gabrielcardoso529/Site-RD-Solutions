import { createClient } from "@supabase/supabase-js";
import { createServerOnlyFn } from "@tanstack/react-start";

export const getSupabaseServer = createServerOnlyFn(() => {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;

  if (!supabaseUrl || !supabaseSecretKey) {
    throw new Error("Variáveis de ambiente do Supabase não configuradas.");
  }
  return createClient(supabaseUrl, supabaseSecretKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
});
