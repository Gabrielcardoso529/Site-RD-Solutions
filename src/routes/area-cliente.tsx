import { createFileRoute } from "@tanstack/react-router";
import {
  LayoutDashboard, FileDown, Upload, Receipt, Calendar, MessageSquare,
  Bell, History, LifeBuoy, MessagesSquare, Search, ChevronRight, TrendingUp,
  FileText, CheckCircle2, Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/area-cliente")({
  head: () => ({
    meta: [
      { title: "Área do Cliente — RD Solutions" },
      { name: "description", content: "Dashboard exclusivo do cliente RD Solutions: documentos, impostos, calendário fiscal, mensagens e chamados." },
      { property: "og:title", content: "Área do Cliente — RD Solutions" },
      { property: "og:description", content: "Sua central financeira e contábil, num só lugar." },
      { property: "og:url", content: "/area-cliente" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/area-cliente" }],
  }),
  component: ClientArea,
});

const nav = [
  { i: LayoutDashboard, l: "Dashboard", k: "dashboard" },
  { i: FileDown, l: "Documentos", k: "docs" },
  { i: Upload, l: "Upload de arquivos", k: "upload" },
  { i: Receipt, l: "Impostos", k: "impostos" },
  { i: Calendar, l: "Calendário fiscal", k: "calendario" },
  { i: MessageSquare, l: "Mensagens", k: "msg" },
  { i: MessagesSquare, l: "Chat com contador", k: "chat" },
  { i: History, l: "Histórico", k: "hist" },
  { i: LifeBuoy, l: "Central de chamados", k: "chamados" },
  { i: Bell, l: "Notificações", k: "notif" },
];

function ClientArea() {
  const [active, setActive] = useState("dashboard");
  return (
    <div className="container-page grid gap-6 py-10 lg:grid-cols-[260px_1fr]">
      <aside className="card-premium sticky top-24 h-fit p-3">
        <div className="px-3 pt-2 pb-3">
          <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">Área do cliente</div>
          <div className="mt-1 flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-brand text-sm font-semibold text-primary-foreground">MA</div>
            <div>
              <div className="text-sm font-semibold">Marina Alves</div>
              <div className="text-[11px] text-muted-foreground">Alcance Digital LTDA</div>
            </div>
          </div>
        </div>
        <nav className="space-y-1">
          {nav.map(({ i: Icon, l, k }) => (
            <button
              key={k}
              onClick={() => setActive(k)}
              className={cn(
                "flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-left text-sm transition",
                active === k
                  ? "bg-gradient-brand text-primary-foreground"
                  : "text-foreground/80 hover:bg-accent"
              )}
            >
              <Icon className="h-4 w-4" /> {l}
            </button>
          ))}
        </nav>
        <div className="mt-3 rounded-2xl bg-surface p-3">
          <div className="text-xs font-semibold text-foreground">Precisa de ajuda?</div>
          <p className="mt-1 text-[11px] text-muted-foreground">Fale com seu contador dedicado.</p>
          <Button size="sm" className="mt-3 w-full rounded-full bg-gradient-brand text-primary-foreground">Abrir chamado</Button>
        </div>
      </aside>

      <section className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="font-display text-2xl font-semibold">Bom te ver por aqui, Marina 👋</h1>
            <p className="text-sm text-muted-foreground">Este é um protótipo da futura Área do Cliente RD Solutions.</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input className="w-64 pl-9" placeholder="Buscar documentos, impostos..." />
            </div>
            <Button variant="outline" className="rounded-full"><Bell className="mr-1.5 h-4 w-4" /> 3</Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            { l: "DAS a vencer", v: "R$ 3.240", h: "vence em 4 dias", i: Receipt, tone: "text-primary" },
            { l: "Documentos pendentes", v: "2", h: "Notas fiscais de outubro", i: FileText, tone: "text-[oklch(0.55_0.13_60)]" },
            { l: "Faturamento acumulado", v: "R$ 1.28M", h: "+18% vs. ano anterior", i: TrendingUp, tone: "text-[oklch(0.55_0.14_150)]" },
          ].map((s) => (
            <div key={s.l} className="card-premium card-premium-hover p-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{s.l}</span>
                <s.i className={cn("h-4 w-4", s.tone)} />
              </div>
              <div className="mt-3 font-display text-3xl font-semibold">{s.v}</div>
              <div className="mt-1 text-xs text-muted-foreground">{s.h}</div>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="card-premium p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-lg font-semibold">Próximas obrigações fiscais</h3>
              <Button variant="ghost" size="sm">Ver tudo <ChevronRight className="ml-1 h-4 w-4" /></Button>
            </div>
            <ul className="mt-4 divide-y divide-border">
              {[
                { d: "20/11", n: "DAS — Simples Nacional", v: "R$ 3.240", s: "aberto" },
                { d: "25/11", n: "PIS/COFINS", v: "R$ 890", s: "aberto" },
                { d: "07/12", n: "FGTS", v: "R$ 1.120", s: "aberto" },
                { d: "31/12", n: "ECF anual", v: "—", s: "programado" },
              ].map((it) => (
                <li key={it.n} className="flex items-center gap-4 py-3">
                  <div className="grid h-10 w-14 place-items-center rounded-xl bg-gradient-brand text-primary-foreground">
                    <span className="font-display text-xs font-bold">{it.d}</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{it.n}</div>
                    <div className="text-xs text-muted-foreground">{it.v}</div>
                  </div>
                  <Badge variant={it.s === "aberto" ? "default" : "secondary"} className={it.s === "aberto" ? "bg-primary/15 text-primary hover:bg-primary/20" : ""}>
                    {it.s}
                  </Badge>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-premium p-6">
            <h3 className="font-display text-lg font-semibold">Chat com seu contador</h3>
            <p className="text-xs text-muted-foreground">Responde em média em 2h</p>
            <div className="mt-4 space-y-3">
              <div className="flex items-start gap-2.5">
                <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-brand text-xs font-semibold text-primary-foreground">RD</div>
                <div className="rounded-2xl rounded-tl-sm bg-surface p-3 text-sm">
                  Oi Marina, enviei o relatório do 3º tri no e-mail. Alguma dúvida?
                </div>
              </div>
              <div className="flex items-start justify-end gap-2.5">
                <div className="rounded-2xl rounded-tr-sm bg-primary/10 p-3 text-sm text-foreground">
                  Perfeito! Vou revisar e volto.
                </div>
                <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-secondary text-xs font-semibold">MA</div>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <Input placeholder="Escreva uma mensagem..." />
              <Button className="bg-gradient-brand text-primary-foreground">Enviar</Button>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="card-premium p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-lg font-semibold">Documentos recentes</h3>
              <Button variant="outline" size="sm" className="rounded-full"><Upload className="mr-1.5 h-4 w-4" /> Enviar</Button>
            </div>
            <ul className="mt-4 space-y-2">
              {[
                { n: "Balancete Outubro.pdf", d: "há 2 dias" },
                { n: "DAS-Setembro.pdf", d: "há 3 semanas" },
                { n: "Contrato Social — v3.docx", d: "há 1 mês" },
                { n: "Folha de pagamento — Set.pdf", d: "há 1 mês" },
              ].map((f) => (
                <li key={f.n} className="flex items-center justify-between rounded-xl border border-border p-3">
                  <div className="flex items-center gap-3">
                    <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary"><FileText className="h-4 w-4" /></div>
                    <div>
                      <div className="text-sm font-medium">{f.n}</div>
                      <div className="text-[11px] text-muted-foreground">{f.d}</div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm"><FileDown className="mr-1 h-4 w-4" /> Baixar</Button>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-premium p-6">
            <h3 className="font-display text-lg font-semibold">Central de chamados</h3>
            <ul className="mt-4 space-y-3">
              {[
                { t: "Emissão de certidão negativa", s: "concluído", i: CheckCircle2, tone: "text-[oklch(0.5_0.14_150)]" },
                { t: "Análise de contrato de prestação", s: "em análise", i: Clock, tone: "text-primary" },
                { t: "Revisão de folha de pagamento", s: "aguardando cliente", i: Clock, tone: "text-[oklch(0.55_0.14_60)]" },
              ].map((c) => (
                <li key={c.t} className="flex items-center gap-3 rounded-xl border border-border p-3">
                  <c.i className={cn("h-4 w-4", c.tone)} />
                  <div className="flex-1">
                    <div className="text-sm font-medium">{c.t}</div>
                    <div className="text-[11px] text-muted-foreground">{c.s}</div>
                  </div>
                  <Button variant="ghost" size="sm">Abrir</Button>
                </li>
              ))}
            </ul>
            <Button className="mt-4 w-full rounded-full bg-gradient-brand text-primary-foreground">Abrir novo chamado</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
