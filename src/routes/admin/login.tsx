import { createFileRoute, useNavigate } from "@tanstack/react-router";
import React, { useState } from "react";
import { supabaseClient } from "@/lib/supabase-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export const Route = createFileRoute("/admin/login")({
  component: AdminLoginPage,
});

function AdminLoginPage() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = String(formData.get("email") ?? "");
    const password = String(formData.get("password") ?? "");

    setLoading(true);

    try {
      const { error } = await supabaseClient.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        toast.error("Email ou senha inválidos.");
        return;
      }

      toast.success("Login realizado com sucesso.");

      await navigate({
        to: "/admin",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className="min-h-screen grid place-items-center px-4">
      <div className="w-full max-w-md card-premium p-6 md:p-8">
        <h1 className="font-display text-2xl font-semibold">Área Administrativa</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Acesse o painel interno da RD Solutions.
        </p>
        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div>
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" name="email" type="email" required autoComplete="email" />
          </div>
          <div>
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
            />
          </div>
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Entrando..." : "Entrar"}
          </Button>
        </form>
      </div>
    </main>
  );
}
