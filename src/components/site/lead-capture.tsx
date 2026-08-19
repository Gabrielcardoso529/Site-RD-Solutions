import { useState } from "react";
import { Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(100),
  empresa: z.string().trim().min(2, "Informe sua empresa").max(120),
  whatsapp: z.string().trim().min(8, "WhatsApp inválido").max(20),
  email: z.string().trim().email("E-mail inválido").max(180),
});

export function LeadCapture({ context }: { context?: string }) {
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      nome: fd.get("nome"),
      empresa: fd.get("empresa"),
      whatsapp: fd.get("whatsapp"),
      email: fd.get("email"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.errors[0]?.message ?? "Verifique os dados");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDone(true);
      toast.success("Recebemos seu contato! Um especialista responderá em breve.");
    }, 700);
  };

  if (done) {
    return (
      <div className="card-premium relative overflow-hidden p-6 md:p-8">
        <div className="flex items-start gap-4">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold">
              Obrigado! Sua análise foi solicitada.
            </h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Um especialista da RD Solutions entrará em contato via WhatsApp em até 24 horas úteis.
              Seu resultado da simulação continua disponível acima.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card-premium relative overflow-hidden p-6 md:p-8">
      <div
        className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/10 blur-3xl"
        aria-hidden
      />
      <div className="relative">
        <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
          <Sparkles className="h-3.5 w-3.5" /> Análise gratuita
        </div>
        <h4 className="font-display text-xl font-semibold text-foreground md:text-2xl">
          Quer um cálculo exato para sua empresa?
        </h4>
        <p className="mt-2 text-sm text-muted-foreground">
          Nossa equipe realiza gratuitamente uma análise personalizada e identifica oportunidades
          reais de economia tributária.
          {context && <span className="text-foreground/80"> Contexto: {context}.</span>}
        </p>
        <form onSubmit={onSubmit} className="mt-5 grid gap-3 md:grid-cols-2">
          <div>
            <Label htmlFor="nome">Nome</Label>
            <Input id="nome" name="nome" required maxLength={100} placeholder="Seu nome" />
          </div>
          <div>
            <Label htmlFor="empresa">Empresa</Label>
            <Input
              id="empresa"
              name="empresa"
              required
              maxLength={120}
              placeholder="Razão social ou fantasia"
            />
          </div>
          <div>
            <Label htmlFor="whatsapp">WhatsApp</Label>
            <Input
              id="whatsapp"
              name="whatsapp"
              required
              maxLength={20}
              placeholder="(11) 90000-0000"
            />
          </div>
          <div>
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              name="email"
              required
              type="email"
              maxLength={180}
              placeholder="voce@empresa.com"
            />
          </div>
          <div className="md:col-span-2">
            <Button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-gradient-brand text-primary-foreground hover:opacity-95"
              size="lg"
            >
              {loading ? "Enviando..." : "Receber análise gratuita"}
            </Button>
            <p className="mt-2 text-[11px] text-muted-foreground">
              Seus dados são tratados conforme a LGPD e nunca compartilhados.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
