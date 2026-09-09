import { createServerOnlyFn } from "@tanstack/react-start";
import { getSupabaseServer } from "./supabase-server";

export const verifyAdmin = createServerOnlyFn(async (acessToken: string) => {
  if (!acessToken) {
    return false;
  }
  const supabase = getSupabaseServer();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser(acessToken);

  if (error || !user?.email) {
    return false;
  }

  const adminEmail = process.env.ADMIN_EMAIL;

  if (!adminEmail) {
    throw new Error("ADMIN_EMAIL não configurado.");
  }
  return user.email.toLowerCase() === adminEmail.toLocaleLowerCase();
});
