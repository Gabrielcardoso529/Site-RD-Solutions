import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, FileText, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site-config";

export const Route = createFileRoute("/area-cliente")({
  head: () => ({
    meta: [
      { title: "Área do Cliente - RD Solutions" },
      {
        name: "description",
        content:
          "Área do Cliente RD Solutions. Acesse nossos canais de atendimento e acompanhe a evolução do novo portal exclusivo para clientes.",
      },
      { property: "og:title", content: "Área do Cliente - RD Solutions" },
      {
        property: "og:description",
        content:
          "Um novo espaço para centralizar documentos, informações e atendimento aos clientes RD Solutions.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ClientArea,
});
function ClientArea() {
  return (
    <section className="section-page">
      <div className="container-page">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              Área do Cliente
            </div>
            <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Um espaço pensado para deixar sua rotina{" "}
              <span className="text-gradient-brand"> ainda mais simples. </span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Estamos preparando uma nova Área do Cliente da RD Solutions, criada para centralizar
              documentos, informações e serviços em um ambiente mais prático e organizado.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <div className="card-premium p-6 text-center">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                <FileText className="h-5 w-5" />
              </div>
              <h2 className="mt-4 font-display text-lg font-semibold text-foreground">
                Documentos
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Futuramente, você poderá enviar e acessar documentos da sua empresa diretamente pelo
                site.
              </p>
            </div>
            <div className="card-premium p-6 text-center">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h2 className="mt-4 font-display text-lg font-semibold text-foreground">
                Organização
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Informações e solicitações poderão ficar reunidas em um único ambiente para
                facilitar o acompanhamento da rotina.
              </p>
            </div>
            <div className="card-premium p-6 text-center">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                <MessageCircle className="h-5 w-5" />
              </div>
              <h2 className="mt-4 font-display text-lg font-semibold text-foreground">
                Atendimento
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Enquanto o novo portal está em desenvolvimento, nossa equipe continua disponível
                pelos canais atuais de atendimento.
              </p>
            </div>
          </div>
          <div className="mt-10 rounded-3xl border border-border/70 bg-surface/60 p-6 text-center sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              Portal em desenvolvimento
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-foreground">
              Precisa de atendimento agora?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Fale diretamente com a equipe da RD Solutions pelo WhatsApp. Vamos direcionar sua
              solicitação e ajudar no que for necessário.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-6 rounded-full bg-gradient-brand text-primary-foreground hover:opacity-95"
            >
              <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
                Falar com nossa equipe
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
