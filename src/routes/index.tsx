import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Users,
  Calculator,
  Receipt,
  FileText,
  Shield,
  ScrollText,
  Landmark,
  BarChart3,
  Briefcase,
  Wallet,
  PiggyBank,
  KeyRound,
  Stamp,
  BadgeCheck,
  Sparkles,
  MessageCircle,
  Clock,
  Lock,
  HeartHandshake,
  Zap,
  Cpu,
  TrendingDown,
  LineChart,
  Rocket,
  Handshake,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader } from "@/components/site/section";
import { site } from "@/lib/site-config";
import hero from "@/assets/hero.jpg";
import office from "@/assets/office.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RD Solutions — Contabilidade estratégica para empresas que crescem" },
      {
        name: "description",
        content:
          "Consultoria contábil premium: planejamento tributário, BPO financeiro, abertura de empresas, IR e consultoria empresarial. Atendimento digital em todo o Brasil.",
      },
      { property: "og:title", content: "RD Solutions — Contabilidade estratégica" },
      { property: "og:description", content: "Transformamos números em decisões inteligentes." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-soft opacity-[0.35]" aria-hidden />
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-40 h-[28rem] w-[28rem] rounded-full bg-[color:var(--gold)]/20 blur-3xl" />
      <div className="container-page relative grid gap-12 pt-10 pb-20 lg:grid-cols-[1.05fr_1fr] lg:pt-16 lg:pb-28">
        <div className="max-w-2xl animate-rd-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
            <Sparkles className="h-3.5 w-3.5" /> Consultoria contábil premium
          </div>
          <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-foreground md:text-6xl md:leading-[1.02]">
            Sua empresa merece uma <span className="text-gradient-brand">contabilidade estratégica</span>, não apenas operacional.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Na RD Solutions transformamos números em decisões inteligentes. Atuamos como parceiros
            estratégicos para empresas que desejam crescer com segurança, reduzir impostos
            legalmente e tomar decisões financeiras mais inteligentes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full bg-gradient-brand text-primary-foreground hover:opacity-95">
              <a href="#contato">Solicitar Proposta <ArrowRight className="ml-1.5 h-4 w-4" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <a href={site.whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle className="mr-1.5 h-4 w-4" /> Falar pelo WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost" className="rounded-full">
              <a href="#contato">Agendar reunião</a>
            </Button>
          </div>
          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-6">
            {[
              { k: "+500", v: "empresas atendidas" },
              { k: "98%", v: "clientes satisfeitos" },
              { k: "15", v: "anos de experiência" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-display text-2xl font-semibold text-foreground">{s.k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="card-premium relative overflow-hidden rounded-3xl">
            <img
              src={hero}
              alt="Consultores analisando indicadores financeiros"
              width={1600}
              height={1100}
              className="h-[420px] w-full object-cover md:h-[560px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
          </div>
          {/* Floating dashboard cards */}
          <div className="glass animate-rd-float absolute -left-4 top-8 hidden w-56 rounded-2xl p-4 shadow-[var(--shadow-elevated)] md:block">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Economia tributária</span>
              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">2026</span>
            </div>
            <div className="mt-2 font-display text-2xl font-semibold text-foreground">R$ 148.320</div>
            <div className="mt-1 flex items-center gap-1 text-xs font-medium text-[oklch(0.55_0.13_150)]">
              <TrendingDown className="h-3.5 w-3.5" /> -32% em impostos
            </div>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted">
              <div className="h-full w-2/3 rounded-full bg-gradient-brand" />
            </div>
          </div>
          <div className="glass absolute -right-2 bottom-6 hidden w-60 rounded-2xl p-4 shadow-[var(--shadow-elevated)] md:block">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-medium text-foreground">
                <LineChart className="h-4 w-4 text-primary" /> Faturamento vs. meta
              </div>
              <span className="text-[10px] text-muted-foreground">últimos 6m</span>
            </div>
            <div className="mt-3 flex h-16 items-end gap-1.5">
              {[24, 42, 30, 60, 48, 78].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-md bg-gradient-to-t from-primary/70 to-[color:var(--gold)]/80"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="border-y border-border bg-surface/60">
        <div className="container-page flex flex-wrap items-center justify-between gap-6 py-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          <span>Confiam na RD Solutions</span>
          <span>Indústria</span>
          <span>Varejo</span>
          <span>Startups SaaS</span>
          <span>Clínicas médicas</span>
          <span>E-commerce</span>
          <span>Serviços B2B</span>
          <span>Holdings familiares</span>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SOBRE ---------------- */
function Sobre() {
  return (
    <section id="sobre" className="py-24">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <div className="card-premium overflow-hidden rounded-3xl">
            <img src={office} alt="Escritório moderno da RD Solutions" width={1400} height={1000} loading="lazy" className="h-[440px] w-full object-cover" />
          </div>
          <div className="glass absolute -bottom-6 -right-4 hidden max-w-[240px] rounded-2xl p-4 shadow-[var(--shadow-elevated)] md:block">
            <div className="flex items-center gap-2 text-xs font-semibold text-primary">
              <BadgeCheck className="h-4 w-4" /> ISO-friendly, sigilo total
            </div>
            <p className="mt-2 text-[13px] leading-snug text-muted-foreground">
              Processos auditáveis, protocolos de segurança e ambiente 100% digital.
            </p>
          </div>
        </div>
        <div>
          <SectionHeader
            align="left"
            eyebrow="Sobre a RD Solutions"
            title={<>Mais que contabilidade. Uma parceira para o <span className="text-gradient-brand">crescimento do seu negócio.</span></>}
            description="Somos uma consultoria contábil que combina especialistas experientes, tecnologia integrada e uma metodologia estratégica para transformar informações fiscais e financeiras em vantagem competitiva real."
          />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { icon: Handshake, t: "Parceria estratégica", d: "Atuamos ao lado da liderança em decisões críticas do seu negócio." },
              { icon: Cpu, t: "Tecnologia integrada", d: "Ecossistema conectado ao seu ERP, banco e sistemas de gestão." },
              { icon: Shield, t: "Segurança e compliance", d: "Processos com controles, LGPD e sigilo absoluto." },
              { icon: Rocket, t: "Foco em performance", d: "Redução legal de impostos e ganhos reais de margem." },
            ].map(({ icon: Icon, t, d }) => (
              <li key={t} className="card-premium card-premium-hover p-5">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="mt-3 font-display text-base font-semibold">{t}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVIÇOS ---------------- */
const servicos = [
  { icon: Building2, t: "Abertura de Empresas", d: "Legalização completa, do CNPJ ao alvará, em processo 100% digital." },
  { icon: Handshake, t: "Troca de Contador", d: "Transição sem dor de cabeça, com auditoria de conformidade." },
  { icon: FileText, t: "Contabilidade Mensal", d: "Escrituração, balancetes e relatórios gerenciais estratégicos." },
  { icon: Receipt, t: "Departamento Fiscal", d: "Apurações e obrigações acessórias com controle preventivo." },
  { icon: Users, t: "Departamento Pessoal", d: "Folha, admissão, rescisões, eSocial e DIRF sem falhas." },
  { icon: TrendingDown, t: "Planejamento Tributário", d: "Redução legal de impostos com análise de regime otimizada." },
  { icon: Briefcase, t: "Consultoria Empresarial", d: "Estratégia, governança e estruturação societária." },
  { icon: BarChart3, t: "Consultoria Financeira", d: "Fluxo de caixa, precificação e indicadores de gestão." },
  { icon: Wallet, t: "BPO Financeiro", d: "Terceirização de contas a pagar, receber e conciliação bancária." },
  { icon: ScrollText, t: "IR Pessoa Física", d: "Declaração completa, restituição otimizada e malha fina zero." },
  { icon: ScrollText, t: "IR Pessoa Jurídica", d: "ECF, ECD e apurações precisas para sua empresa." },
  { icon: Shield, t: "Regularização Fiscal", d: "Colocamos sua empresa em dia com Receita e órgãos estaduais." },
  { icon: PiggyBank, t: "Parcelamentos Tributários", d: "Negociação e adesão aos programas de parcelamento vigentes." },
  { icon: KeyRound, t: "Certificado Digital", d: "Emissão de e-CNPJ e e-CPF A1/A3 com atendimento presencial." },
  { icon: Stamp, t: "Legalização Empresarial", d: "Alterações contratuais, filiais, encerramentos e licenças." },
];

function Servicos() {
  return (
    <section id="servicos" className="py-24">
      <div className="container-page">
        <SectionHeader
          eyebrow="Nossos serviços"
          title={<>Solução completa para sua empresa <span className="text-gradient-brand">crescer com segurança</span></>}
          description="Do CNPJ à consultoria estratégica: cobrimos todas as frentes contábeis, fiscais, trabalhistas e financeiras da sua operação."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {servicos.map(({ icon: Icon, t, d }) => (
            <article key={t} className="card-premium card-premium-hover group relative overflow-hidden p-6">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/5 blur-2xl transition-all duration-500 group-hover:bg-primary/15" />
              <div className="relative flex items-start justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-4 w-4 -translate-x-1 translate-y-1 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
              </div>
              <h3 className="relative mt-5 font-display text-lg font-semibold text-foreground">{t}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- DIFERENCIAIS ---------------- */
const diferenciais = [
  { icon: Zap, t: "Atendimento totalmente digital", d: "Onboarding, envio de documentos e reuniões — tudo online." },
  { icon: HeartHandshake, t: "Atendimento humanizado", d: "Você fala com pessoas, não com bots." },
  { icon: BadgeCheck, t: "Especialistas atualizados", d: "Time em constante formação nas novas legislações." },
  { icon: Cpu, t: "Tecnologia integrada", d: "Conectamos ao seu ERP, banco e ferramentas de gestão." },
  { icon: TrendingDown, t: "Economia tributária", d: "Planejamento contínuo para pagar apenas o justo." },
  { icon: BarChart3, t: "Planejamento estratégico", d: "Metas e projeções para decisões guiadas por dados." },
  { icon: LineChart, t: "Relatórios inteligentes", d: "Dashboards claros com o que realmente importa." },
  { icon: Clock, t: "Atendimento rápido", d: "Resposta média em até 24h úteis." },
  { icon: Lock, t: "Sigilo absoluto", d: "Ambiente com criptografia e controles rígidos." },
  { icon: MessageCircle, t: "Suporte via WhatsApp", d: "Canal direto para dúvidas do dia a dia." },
];

function Diferenciais() {
  return (
    <section id="diferenciais" className="relative overflow-hidden bg-surface py-24">
      <div className="container-page">
        <SectionHeader
          eyebrow="Diferenciais"
          title={<>Por que empresas escolhem a <span className="text-gradient-brand">RD Solutions</span></>}
          description="Um modelo de atendimento pensado para quem valoriza velocidade, precisão e clareza."
        />
        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
          {diferenciais.map(({ icon: Icon, t, d }) => (
            <div key={t} className="card-premium card-premium-hover flex items-start gap-4 p-5">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-brand text-primary-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-display text-base font-semibold text-foreground">{t}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </div>
              <Check className="ml-auto h-4 w-4 shrink-0 text-primary" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- INDICADORES ---------------- */
function useCounter(target: number, run: boolean, duration = 1400) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf = 0;
    const start = performance.now();
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, run, duration]);
  return val;
}

function Indicadores() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.35 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const stats = [
    { v: useCounter(site.stats.empresas, visible), p: "+", s: "", l: "Empresas atendidas" },
    { v: useCounter(site.stats.satisfacao, visible), p: "", s: "%", l: "Clientes satisfeitos" },
    { v: useCounter(site.stats.anos, visible), p: "", s: "", l: "Anos de experiência" },
    { v: useCounter(site.stats.respostaHoras, visible), p: "", s: "h", l: "Tempo médio de resposta" },
  ];
  return (
    <section ref={ref} className="py-24">
      <div className="container-page">
        <div className="card-premium relative overflow-hidden rounded-3xl p-10 md:p-16">
          <div className="pointer-events-none absolute inset-0 bg-grid-soft opacity-30" />
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
          <div className="relative grid gap-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.l}>
                <div className="font-display text-5xl font-semibold tracking-tight text-gradient-brand md:text-6xl">
                  {s.p}{s.v}{s.s}
                </div>
                <div className="mt-2 text-sm font-medium text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- COMO TRABALHAMOS ---------------- */
const passos = [
  { n: "01", t: "Você entra em contato", d: "Solicite uma conversa por WhatsApp, formulário ou telefone." },
  { n: "02", t: "Conhecemos sua empresa", d: "Diagnóstico completo do seu negócio, operação e histórico contábil." },
  { n: "03", t: "Analisamos oportunidades", d: "Estudamos regime tributário, obrigações e pontos de otimização." },
  { n: "04", t: "Montamos uma estratégia", d: "Plano personalizado com ações, prazos e projeção de resultados." },
  { n: "05", t: "Assessoria completa", d: "Sua empresa passa a contar com nossa consultoria estratégica no dia a dia." },
];

function ComoTrabalhamos() {
  return (
    <section className="py-24">
      <div className="container-page">
        <SectionHeader
          eyebrow="Como trabalhamos"
          title={<>Um processo claro, do <span className="text-gradient-brand">primeiro contato</span> à execução</>}
        />
        <div className="mt-14 grid gap-6 md:grid-cols-5">
          {passos.map((p, i) => (
            <div key={p.n} className="relative">
              <div className="card-premium card-premium-hover h-full p-6">
                <span className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                  Passo {p.n}
                </span>
                <h4 className="mt-3 font-display text-lg font-semibold">{p.t}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              </div>
              {i < passos.length - 1 && (
                <div className="absolute -right-3 top-1/2 hidden h-px w-6 -translate-y-1/2 bg-gradient-to-r from-primary/40 to-transparent md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FERRAMENTAS TEASER ---------------- */
const ferramentas = [
  { icon: Building2, t: "Abertura de Empresa", d: "Simule regime, custos e tempo estimado." },
  { icon: TrendingDown, t: "Economia Tributária", d: "Descubra quanto sua empresa pode economizar." },
  { icon: BarChart3, t: "Comparador Tributário", d: "MEI x Simples x Presumido x Real." },
  { icon: Calculator, t: "Custos Contábeis", d: "Estimativa de honorários e obrigações." },
  { icon: Receipt, t: "Calculadora Fiscal", d: "Impostos, calendário fiscal e obrigações." },
  { icon: Wallet, t: "Simulador Pró-Labore", d: "Pró-labore vs. distribuição de lucros." },
  { icon: Users, t: "Simulador de Contratação", d: "Custo real do funcionário na sua região." },
  { icon: Landmark, t: "Simulador MEI", d: "Posso ser MEI? Vale migrar para Simples?" },
];

function Ferramentas() {
  return (
    <section id="ferramentas" className="relative overflow-hidden bg-surface py-24">
      <div className="container-page">
        <SectionHeader
          eyebrow="Ferramentas inteligentes"
          title={<>Calculadoras e simuladores <span className="text-gradient-brand">exclusivos</span> para empresários</>}
          description="Tome decisões com base em dados. Simule impostos, custos e economias em segundos."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ferramentas.map(({ icon: Icon, t, d }) => (
            <Link
              key={t}
              to="/ferramentas"
              className="card-premium card-premium-hover group flex h-full flex-col p-6"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h4 className="mt-4 font-display text-base font-semibold">{t}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary opacity-0 transition group-hover:opacity-100">
                Abrir ferramenta <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild size="lg" className="rounded-full bg-gradient-brand text-primary-foreground hover:opacity-95">
            <Link to="/ferramentas">Explorar todas as ferramentas <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ---------------- DEPOIMENTOS ---------------- */
const depos = [
  { n: "Marina Alves", e: "CEO, Alcance Digital", c: "Reduziram 28% da nossa carga tributária no primeiro ano. Atendimento impecável.", a: "MA" },
  { n: "Rafael Nogueira", e: "Sócio, Nogueira Indústria", c: "Migramos de contador em 15 dias, sem nenhum problema. Profissionais nível consultoria top-tier.", a: "RN" },
  { n: "Camila Ferraz", e: "Fundadora, Studio F.", c: "Finalmente uma contabilidade que me ajuda a decidir, não apenas a cumprir obrigações.", a: "CF" },
  { n: "Diego Prado", e: "Diretor, Prado Comércio", c: "Os dashboards e a agilidade no WhatsApp mudaram minha rotina como empresário.", a: "DP" },
];

function Depoimentos() {
  return (
    <section className="py-24">
      <div className="container-page">
        <SectionHeader
          eyebrow="Depoimentos"
          title={<>O que nossos <span className="text-gradient-brand">clientes</span> dizem</>}
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {depos.map((d) => (
            <figure key={d.n} className="card-premium card-premium-hover flex h-full flex-col p-6">
              <div className="flex gap-0.5 text-primary">
                {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
              </div>
              <blockquote className="mt-3 text-sm leading-relaxed text-foreground/85">"{d.c}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-brand font-display text-sm font-semibold text-primary-foreground">
                  {d.a}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{d.n}</div>
                  <div className="text-xs text-muted-foreground">{d.e}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
const faq = [
  { q: "Quanto custa a assessoria contábil da RD Solutions?", a: "O investimento depende do porte, regime tributário e complexidade da sua operação. Use nossa calculadora de custos ou solicite uma proposta personalizada em minutos." },
  { q: "Posso trocar de contador facilmente?", a: "Sim. Cuidamos de todo o processo de transição em até 15 dias úteis, incluindo auditoria de conformidade e recepção de arquivos do contador anterior." },
  { q: "Vocês atendem em todo o Brasil?", a: "Sim. Somos uma consultoria 100% digital. Atendemos empresas de todos os estados com o mesmo padrão de excelência." },
  { q: "Como funciona o suporte?", a: "Você tem um contador dedicado, canal exclusivo por WhatsApp, e-mail e reuniões estratégicas mensais. Nosso SLA médio de resposta é de 24 horas úteis." },
  { q: "Quanto tempo leva para abrir uma empresa?", a: "Em média entre 3 e 10 dias úteis, dependendo do município, atividade e órgãos envolvidos. Nossa ferramenta gratuita simula o prazo exato para o seu caso." },
];

function FaqSection() {
  return (
    <section id="faq" className="bg-surface py-24">
      <div className="container-page">
        <SectionHeader
          eyebrow="Dúvidas frequentes"
          title={<>Perguntas <span className="text-gradient-brand">respondidas</span> pelos nossos especialistas</>}
        />
        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faq.map((f, i) => (
              <AccordionItem
                key={i}
                value={`i-${i}`}
                className="card-premium overflow-hidden border-0 px-5"
              >
                <AccordionTrigger className="text-left font-display text-base font-semibold hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA FINAL ---------------- */
function CtaFinal() {
  return (
    <section className="py-24">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-10 text-primary-foreground shadow-[var(--shadow-glow)] md:p-16">
          <div className="pointer-events-none absolute inset-0 opacity-20 bg-grid-soft" />
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
          <div className="relative grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em]">
                <Sparkles className="h-3.5 w-3.5" /> Pronto para começar?
              </div>
              <h3 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-5xl">
                Vamos cuidar da sua contabilidade — enquanto você cuida do crescimento da sua empresa.
              </h3>
              <p className="mt-4 max-w-xl text-white/85">
                Fale com um especialista da RD Solutions e receba uma proposta personalizada em até 24 horas.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Button asChild size="lg" className="rounded-full bg-white text-[color:var(--terracota)] hover:bg-white/90">
                <a href="#contato">Solicitar orçamento <ArrowRight className="ml-1.5 h-4 w-4" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white">
                <a href={site.whatsappUrl} target="_blank" rel="noreferrer">
                  <MessageCircle className="mr-1.5 h-4 w-4" /> Falar no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <Sobre />
      <Servicos />
      <Diferenciais />
      <Indicadores />
      <ComoTrabalhamos />
      <Ferramentas />
      <Depoimentos />
      <FaqSection />
      <CtaFinal />
    </>
  );
}
