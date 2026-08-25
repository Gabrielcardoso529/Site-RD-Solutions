import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
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
import { Reveal } from "@/components/ui/reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RD Solutions | Contabilidade Estratégica para Empresas" },
      {
        name: "description",
        content:
          "Assessoria contábil estratégica para empresas: planejamento tributário, BPO financeiro, abertura de empresas, gestão fiscal e atendimento digital.",
      },
      { property: "og:title", content: "RD Solutions | Contabilidade Estratégica para Empresas" },
      {
        property: "og:description",
        content:
          "Contabilidade, planejamento tributário e soluções empresariais para ajudar sua empresa a crescer com mais segurança e organização.",
      },
      { name: "twitter:title", content: "RD Solutions | Contabilidade Estratégica" },
      {
        name: "twitter:description",
        content: "Soluções contábeis, tributárias e financeiras para empresas.",
      },
    ],
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
      <div className="container-page relative grid gap-10 pb-16 pt-8 sm:pt-10 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:pb-28 lg:pt-16">
        <div className="max-w-2xl animate-rd-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-primary sm:text-[11px] sm:tracking-[0.16em]">
            <Sparkles className="h-3.5 w-3.5 shrink-0" /> Contabilidade estratégica para empresas
          </div>
          <h1 className="mt-5 font-display text-[2.5rem] font-semibold leading-[1.08] tracking-[-0.03em] text-foreground sm:text-5xl md:text-6xl md:leading-[1.02]">
            Sua contabilidade deve ajudar sua empresa a{" "}
            <span className="text-gradient-brand">crescer com segurança.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            A RD Solutions cuida da contabilidade, do fiscal e da gestão da sua empresa com
            proximidade, tecnologia e visão estratégica. Você ganha mais segurança para tomar
            decisões, reduzir riscos e identificar oportunidades de economia tributária dentro da
            lei.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button
              asChild
              size="lg"
              className="w-full rounded-full bg-gradient-brand text-primary-foreground hover:opacity-95 sm:w-auto"
            >
              <a href="#contato">
                Solicitar diagnóstico gratuito
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full rounded-full sm:w-auto">
              <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-1.5 h-4 w-4" />
                Falar com um especialista
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost" className="w-full rounded-full sm:w-auto">
              <a href="#servicos">Conhecer nossos serviços</a>
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="card-premium relative overflow-hidden rounded-3xl">
            <img
              src={hero}
              alt="Consultores analisando indicadores financeiros"
              width={1600}
              height={1100}
              className="h-[340px] w-full object-cover sm:h-[420px] md:h-[560px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
          </div>
          {/* Floating dashboard cards */}
          <div className="glass animate-rd-float absolute -left-4 top-8 hidden w-56 rounded-2xl p-4 shadow-[var(--shadow-elevated)] md:block">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Planejamento tributário</span>
              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
                2026
              </span>
            </div>
            <div className="mt-2 font-display text-2xl font-semibold text-foreground">
              Análise personalizada
            </div>
            <div className="mt-1 flex items-center gap-1 text-xs font-medium text-[oklch(0.55_0.13_150)]">
              <TrendingDown className="h-3.5 w-3.5" /> Oportunidades identificadas dentro da
              legislação
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
        <div className="container-page grid grid-cols-2 gap-x-6 gap-y-4 py-6 text-center text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground sm:grid-cols-4 sm:text-[11px] lg:flex lg:items-center lg:justify-between lg:text-left lg:tracking-[0.18em]">
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
    <section id="sobre" className="section-page">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="relative">
            <div className="card-premium overflow-hidden rounded-3xl">
              <img
                src={office}
                alt="Escritório moderno da RD Solutions"
                width={1400}
                height={1000}
                loading="lazy"
                className="h-[440px] w-full object-cover"
              />
            </div>

            <div className="glass absolute -bottom-6 -right-4 hidden max-w-[240px] rounded-2xl p-4 shadow-[var(--shadow-elevated)] md:block">
              <div className="flex items-center gap-2 text-xs font-semibold text-primary">
                <BadgeCheck className="h-4 w-4" />
                Atendimento 100% digital
              </div>

              <p className="mt-2 text-[13px] leading-snug text-muted-foreground">
                Envie documentos online, acompanhe processos e tenha suporte sempre que precisar.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div>
            <SectionHeader
              align="left"
              eyebrow="Por que escolher a RD Solutions?"
              title={
                <>
                  Você cuida da sua empresa.{" "}
                  <span className="text-gradient-brand">Nós cuidamos da contabilidade.</span>
                </>
              }
              description="Na RD Solutions, transformamos a contabilidade em uma ferramenta estratégica para o crescimento da sua empresa. Cuidamos das obrigações fiscais, tributárias e contábeis com segurança, enquanto você dedica seu tempo ao que realmente importa: fazer o seu negócio crescer."
            />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: Handshake,
                  t: "Atendimento próximo",
                  d: "Você fala diretamente com especialistas que acompanham a realidade da sua empresa.",
                },
                {
                  icon: Cpu,
                  t: "Processos digitais",
                  d: "Mais agilidade, menos burocracia e acesso rápido às informações da sua empresa.",
                },
                {
                  icon: Shield,
                  t: "Segurança e conformidade",
                  d: "Sua empresa sempre em conformidade com a legislação, reduzindo riscos e evitando problemas fiscais.",
                },
                {
                  icon: Rocket,
                  t: "Planejamento tributário",
                  d: "Buscamos oportunidades legais para reduzir a carga tributária e melhorar os resultados do seu negócio.",
                },
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
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- SERVIÇOS ---------------- */
const servicos = [
  {
    icon: Building2,
    t: "Abertura de Empresas",
    d: "Cuidamos do CNPJ, enquadramento tributário, inscrições e licenças para você começar com segurança.",
  },
  {
    icon: Handshake,
    t: "Troca de Contador",
    d: "Fazemos uma transição organizada, analisamos pendências e mantemos a continuidade de sua operação.",
  },
  {
    icon: FileText,
    t: "Contabilidade Empresarial",
    d: "Escrituração contábil, demonstrativos e informações confiáveis para apoiar suas decisões.",
  },
  {
    icon: Receipt,
    t: "Departamento Fiscal",
    d: "Apuração de tributos, entrega de obrigações e acompanhamento preventivo da situação fiscal.",
  },
  {
    icon: Users,
    t: "Departamento Pessoal",
    d: "Admissões, folha de pagamento, férias, rescisões, eSocial e rotinas trabalhistas.",
  },
  {
    icon: TrendingDown,
    t: "Planejamento Tributário",
    d: "Analisamos regimes e operações para identificar oportunidades legais de economia tributária.",
  },
  {
    icon: Briefcase,
    t: "Consultoria Empresarial",
    d: "Apoio estratégico em estrutura societária, organização de processos e tomada de decisões.",
  },
  {
    icon: BarChart3,
    t: "Consultoria Financeira",
    d: "Organização do fluxo de caixa, precificação e indicadores para melhorar a gestão do negócio.",
  },
  {
    icon: Wallet,
    t: "BPO Financeiro",
    d: "Gestão de contas a pagar e receber, conciliações bancárias e organização da rotina financeira.",
  },
  {
    icon: ScrollText,
    t: "IR Pessoa Física",
    d: "Elaboração e revisão da declaração, análise de documentos e suporte em eventuais pendências.",
  },
  {
    icon: ScrollText,
    t: "Obrigações da Pessoa Jurídica",
    d: "Preparação e transmissão de declarações e escriturações, incluindo ECD e ECF quando aplicáveis.",
  },
  {
    icon: Shield,
    t: "Regularização Fiscal",
    d: "Identificamos pendências e conduzimos a regularização perante os órgãos competentes.",
  },
  {
    icon: PiggyBank,
    t: "Parcelamentos Tributários",
    d: "Analisamos débitos e auxiliamos na adesão às modalidades de parcelamento disponíveis.",
  },
  {
    icon: KeyRound,
    t: "Certificado Digital",
    d: "Orientação e suporte para emissão ou renovação de certificados e-CPF e e-CNPJ.",
  },
  {
    icon: Stamp,
    t: "Legalização Empresarial",
    d: "Alterações contratuais, abertura de filiais, encerramentos, inscrições e licenças empresariais.",
  },
];

function Servicos() {
  return (
    <section id="servicos" className="section-page">
      <div className="container-page">
        <SectionHeader
          eyebrow="Soluções para sua Empresa"
          title={
            <>
              Tudo o que sua empresa precisa para operar, crescer e{" "}
              <span className="text-gradient-brand">tomar decisões com segurança.</span>
            </>
          }
          description="Da abertura da empresa à gestão contábil, fiscal, trabalhista e financeira, a RD Solutions oferece suporte completo para cada etapa de seu negócio."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {servicos.map(({ icon: Icon, t, d }) => (
            <article
              key={t}
              className="card-premium card-premium-hover group relative flex min-h-[220px] flex-col overflow-hidden p-6"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/5 blur-2xl transition-all duration-500 group-hover:bg-primary/15" />
              <div className="relative flex items-start justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-4 w-4 -translate-x-1 translate-y-1 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
              </div>
              <h3 className="relative mt-5 font-display text-lg font-semibold text-foreground">
                {t}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-3xl border border-border/70 bg-muted/30 p-6 text-center sm:p-8 lg:flex-row lg:text-left">
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground sm:text-2xl">
              Não encontrou o serviço que procura?
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Fale com nossa equipe. Vamos entender a realidade da sua empresa e indicar a solução
              contábil mais adequada.
            </p>
          </div>

          <Button
            asChild
            className="shrink-0 rounded-full bg-gradient-brand px-6 text-primary-foreground hover:opacity-95"
          >
            <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
              Falar com um especialista
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ---------------- DIFERENCIAIS ---------------- */
const diferenciais = [
  {
    icon: Zap,
    t: "Contabilidade 100% digital",
    d: "Envio de documentos, reuniões e acompanhamento da rotina contábil de forma prática e online.",
  },
  {
    icon: HeartHandshake,
    t: "Atendimento próximo",
    d: "Você fala com especialistas que conhecem a realidade da sua empresa e acompanham suas necessidades.",
  },
  {
    icon: BadgeCheck,
    t: "Especialistas atualizados",
    d: "Acompanhamento constante das mudanças tributárias, fiscais, trabalhistas e societárias.",
  },
  {
    icon: Cpu,
    t: "Processos integrados",
    d: "Organização das informações contábeis em conjunto com seus sistemas, documentos e rotinas de gestão.",
  },
  {
    icon: TrendingDown,
    t: "Planejamento tributário contínuo",
    d: "Análises periódicas para identificar oportunidades legais de redução da carga tributária.",
  },
  {
    icon: BarChart3,
    t: "Visão estratégica do negócio",
    d: "Informações contábeis e financeiras organizadas para apoiar decisões mais seguras.",
  },
  {
    icon: LineChart,
    t: "Relatórios claros e objetivos",
    d: "Indicadores apresentados de forma simples para facilitar o acompanhamento dos resultados.",
  },
  {
    icon: Clock,
    t: "Comunicação ágil",
    d: "Atendimento organizado e retorno rápido para as demandas da rotina empresarial.",
  },
  {
    icon: Lock,
    t: "Confidencialidade das informações",
    d: "Tratamento responsável de documentos e dados empresariais, com foco em segurança e sigilo.",
  },
  {
    icon: MessageCircle,
    t: "Canal direto pelo WhatsApp",
    d: "Mais praticidade para tirar dúvidas e acompanhar solicitações do dia a dia.",
  },
];

function Diferenciais() {
  return (
    <section id="diferenciais" className="section-page relative overflow-hidden bg-surface">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
      <div className="container-page relative">
        <SectionHeader
          eyebrow="Por que escolher a RD Solutions?"
          title={
            <>
              Uma contabilidade preparada para acompanhar o{" "}
              <span className="text-gradient-brand">crescimento da sua Empresa.</span>
            </>
          }
          description="Unimos atendimento próximo, processos digitais e visão estratégica para tornar a rotina contábil mais simples, segura e eficiente."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {diferenciais.map(({ icon: Icon, t, d }) => (
            <article
              key={t}
              className="card-premium card-premium-hover group flex items-start gap-4 p-5 sm:p-6"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-sm transition-transform duration-300 group-hover:scale-105">
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <h3 className="font-display text-base font-semibold text-foreground">{t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
              <Check className="ml-auto mt-1 h-4 w-4 shrink-0 text-primary opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-4 rounded-3xl border border-border/70 bg-background/70 p-6 shadow-sm backdrop-blur-sm sm:grid-cols-3 sm:p-8">
          <div className="text-center">
            <p className="font-display text-lg font-semibold text-foreground">
              Atendimento digital
            </p>
            <p className="mt-1 text-sm text-muted-foreground">Mais praticidade para a sua rotina</p>
          </div>

          <div className="border-y border-border/70 py-4 text-center sm:border-x sm:border-y-0 sm:py-0">
            <p className="font-display text-lg font-semibold text-foreground">
              Suporte especializado
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Orientação para decisões importantes
            </p>
          </div>

          <div className="text-center">
            <p className="font-display text-lg font-semibold text-foreground">
              Gestão com segurança
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Processos organizados e preventivos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- COMO TRABALHAMOS ---------------- */
const passos = [
  {
    n: "01",
    t: "Você fala com nossa equipe",
    d: "O primeiro contato pode ser feito pelo WhatsApp, telefone ou formulário do site.",
  },
  {
    n: "02",
    t: "Entendemos sua empresa",
    d: "Conhecemos sua operação, seu momento atual e as principais necessidades do negócio.",
  },
  {
    n: "03",
    t: "Analisamos o cenário",
    d: "Avaliamos os aspectos contábeis, fiscais, trabalhistas e tributários relevantes para a sua empresa.",
  },
  {
    n: "04",
    t: "Apresentamos a solução",
    d: "Definimos o escopo do atendimento, as prioridades e os próximos passos de forma clara.",
  },
  {
    n: "05",
    t: "Acompanhamos sua rotina",
    d: "Sua empresa passa a contar com suporte contínuo, processos organizados e orientação especializada.",
  },
];

function ComoTrabalhamos() {
  return (
    <section className="section-page">
      <div className="container-page">
        <SectionHeader
          eyebrow="Como trabalhamos"
          title={
            <>
              Um processo simples, transparente e pensado para a{" "}
              <span className="text-gradient-brand">realidade da sua empresa.</span>
            </>
          }
          description="Do primeiro contato ao acompanhamento contínuo, cada etapa é conduzida com clareza, organização e proximidade."
        />
        <div className="relative mt-14">
          <div className="absolute left-6 top-6 hidden h-[calc(100%-3rem)] w-px bg-border/70 sm:block md:left-0 md:top-8 md:h-px md:w-full" />
          <div className="relative grid gap-6 md:grid-cols-5">
            {passos.map((passo) => (
              <article
                key={passo.n}
                className="card-premium card-premium-hover group relative h-full p-6"
              >
                <div className="absolute left-5 top-6 hidden h-3 w-3 -translate-x-[29px] rounded-full border-2 border-primary bg-background shadow-sm sm:block md:left-1/2 md:top-0 md:-translate-x-1/2 md:-translate-y-[29px]" />
                <div className="flex items-center justify-between gap-4">
                  <span className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    Etapa {passo.n}
                  </span>
                  <span className="font-display text-3xl font-semibold text-primary/10 transition-colors duration-300 group-hover:text-primary/20">
                    {passo.n}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                  {passo.t}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{passo.d}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-3xl border border-border/70 bg-muted/30 p-6 text-center sm:p-8 lg:flex-row lg:text-left">
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground sm:text-2xl">
              Quer entender como podemos ajudar sua empresa?
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Converse com nossa equipe e receba uma orientação inicial sobre o melhor caminho para
              sua necessidade.
            </p>
          </div>
          <Button
            asChild
            className="shrink-0 rounded-full bg-gradient-brand px-6 text-primary-foreground hover:opacity-95"
          >
            <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
              Falar com um especialista
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FERRAMENTAS TEASER ---------------- */
const ferramentas = [
  {
    icon: Building2,
    t: "Abertura de Empresa",
    d: "Faça uma simulação inicial de enquadramento, custos e etapas para abrir sua empresa.",
  },
  {
    icon: TrendingDown,
    t: "Economia Tributária",
    d: "Simule cenários e identifique possíveis oportunidades de economia tributária.",
  },
  {
    icon: BarChart3,
    t: "Comparador de Regimes",
    d: "Compare cenários entre MEI, Simples Nacional, Lucro Presumido e Lucro Real.",
  },
  {
    icon: Calculator,
    t: "Check-up Contábil",
    d: "Avalie o perfil da sua empresa e identifique o nível de acompanhamento contábil que ela pode precisar.",
  },
  {
    icon: Receipt,
    t: "Assistente Fiscal",
    d: "Consulte datas e organize melhor as principais obrigações da sua empresa.",
  },
  {
    icon: Wallet,
    t: "Retirada dos Sócios",
    d: "Compare cenários de pró-labore e distribuição de lucros para apoiar seu planejamento.",
  },
  {
    icon: Users,
    t: "Custo de Contratação",
    d: "Estime os principais custos envolvidos na contratação de um funcionário.",
  },
  {
    icon: Landmark,
    t: "Check-up MEI",
    d: "Avalie seu cenário e entenda quando pode fazer sentido migrar do MEI.",
  },
];

function Ferramentas() {
  return (
    <section id="ferramentas" className="section-page relative overflow-hidden bg-surface">
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="container-page relative">
        <SectionHeader
          eyebrow="Ferramentas inteligentes"
          title={
            <>
              Informação para transformar dúvidas em{" "}
              <span className="text-gradient-brand">decisões mais inteligentes.</span>
            </>
          }
          description="Use nossas calculadoras e simuladores para explorar cenários contábeis, tributários e financeiros antes de conversar com um especialista."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ferramentas.map(({ icon: Icon, t, d }) => (
            <Link
              key={t}
              to="/ferramentas"
              className="card-premium card-premium-hover group relative flex h-full min-h-[230px] flex-col overflow-hidden p-6"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/5 blur-2xl transition-all duration-500 group-hover:bg-primary/15" />
              <div className="relative grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105">
                <Icon className="h-5 w-5" />
              </div>

              <h3 className="relative mt-5 font-display text-base font-semibold text-foreground">
                {t}
              </h3>
              <p className="relative mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {d}
              </p>
              <span className="relative mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                Simular agora{" "}
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 text-center">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-gradient-brand text-primary-foreground hover:opacity-95"
          >
            <Link to="/ferramentas">
              Explorar todas as ferramentas <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </Button>
          <p className="max-w-2xl text-xs leading-relaxed text-muted-foreground">
            Os resultados apresentados são estimativas para fins informativos e não substituem uma
            análise contábil, fiscal ou tributária individualizada.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- DEPOIMENTOS ---------------- */
const depos = [
  {
    icon: HeartHandshake,
    t: "Atendimento próximo",
    d: "Cada empresa recebe acompanhamento com comunicação clara, suporte acessível e orientação ao longo da rotina.",
  },
  {
    icon: Shield,
    t: "Segurança nas decisões",
    d: "As informações contábeis são organizadas para reduzir riscos e apoiar escolhas mais conscientes.",
  },
  {
    icon: TrendingDown,
    t: "Visão tributária estratégica",
    d: "Analisamos cenários e oportunidades legais para tornar a gestão tributária mais eficiente.",
  },
  {
    icon: MessageCircle,
    t: "Comunicação simples",
    d: "Nada de complicar o que pode ser explicado de forma clara. Nossa equipe facilita o contato e o acompanhamento.",
  },
];

function Depoimentos() {
  return (
    <section className="section-page">
      <div className="container-page">
        <SectionHeader
          eyebrow="Uma relação baseada em confiança"
          title={
            <>
              Contabilidade feita para quem espera{" "}
              <span className="text-gradient-brand">mais do que cumprir obrigações.</span>
            </>
          }
          description="Nosso objetivo é construir uma relação próxima com cada empresa, oferecendo segurança, clareza e suporte para decisões importantes."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {depos.map(({ icon: Icon, t, d }) => (
            <article
              key={t}
              className="card-premium card-premium-hover group flex h-full flex-col p-6"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Quer entender como esse atendimento funciona na prática?
          </p>
          <Button
            asChild
            className="mt-4 rounded-full bg-gradient-brand px-6 text-primary-foreground hover:opacity-95"
          >
            <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
              Conversar com nossa equipe
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
const faq = [
  {
    q: "Quanto custa a assessoria contábil da RD Solutions?",
    a: "O valor depende de fatores como porte da empresa, regime tributário, quantidade de funcionários, volume de movimentação e serviços contratados. Nossa equipe analisa o seu cenário e apresenta uma proposta personalizada.",
  },
  {
    q: "Posso trocar de contador sem interromper minha operação?",
    a: "Sim. A RD Solutions acompanha o processo de transição, organiza o recebimento das informações do contador anterior e verifica possíveis pendências para que a mudança aconteça de forma estruturada.",
  },
  {
    q: "Vocês atendem em todo o Brasil?",
    a: "Sim. Nosso modelo de atendimento permite acompanhar empresas de diferentes regiões de forma digital, com envio de documentos, suporte e reuniões realizados online.",
  },
  {
    q: "Como funciona o atendimento e o suporte?",
    a: "Nossa equipe acompanha as demandas da sua empresa por canais digitais, incluindo WhatsApp e e-mail. Quando necessário, também realizamos reuniões para orientar decisões e esclarecer questões contábeis, fiscais e tributárias.",
  },
  {
    q: "Quanto tempo leva para abrir uma empresa?",
    a: "O prazo varia conforme a atividade, o município, os órgãos envolvidos e a necessidade de licenças ou autorizações. Nossa equipe acompanha todas as etapas e orienta você durante o processo de abertura.",
  },
  {
    q: "Quais documentos preciso enviar para começar?",
    a: "Os documentos necessários variam de acordo com o serviço contratado e o tipo de empresa. Após o primeiro contato, nossa equipe informa exatamente o que será necessário para dar andamento ao atendimento.",
  },
  {
    q: "A RD Solutions também faz planejamento tributário?",
    a: "Sim. Analisamos o enquadramento e a operação da empresa para identificar oportunidades legais de organização e eficiência tributária, sempre considerando as características de cada negócio.",
  },
  {
    q: "Preciso ir presencialmente no escritório?",
    a: "Na maioria das rotinas, não. Grande parte do atendimento pode ser realizada digitalmente, facilitando o envio de documentos, reuniões e acompanhamento das solicitações.",
  },
];

function FaqSection() {
  return (
    <section id="faq" className="section-page relative overflow-hidden bg-surface">
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

      <div className="container-page relative">
        <SectionHeader
          eyebrow="Dúvidas frequentes"
          title={
            <>
              Tudo o que você precisa saber antes de{" "}
              <span className="text-gradient-brand">começar com a RD Solutions.</span>
            </>
          }
          description="Reunimos as principais dúvidas de empresários sobre contratação, atendimento e serviços contábeis."
        />

        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faq.map((item, index) => (
              <AccordionItem
                key={item.q}
                value={`faq-${index}`}
                className="card-premium overflow-hidden border-0 px-5 transition-shadow duration-300 hover:shadow-md sm:px-6"
              >
                <AccordionTrigger className="py-5 text-left font-display text-base font-semibold text-foreground hover:no-underline sm:text-lg">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-10 text-center">
            <p className="text-sm text-muted-foreground">Ainda ficou com alguma dúvida?</p>
            <Button
              asChild
              className="mt-4 rounded-full bg-gradient-brand px-6 text-primary-foreground hover:opacity-95"
            >
              <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
                Falar com nossa equipe
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA FINAL ---------------- */
function CtaFinal() {
  return (
    <section id="contato" className="section-page">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-8 text-primary-foreground shadow-[var(--shadow-glow)] sm:p-10 md:p-16">
          <div className="pointer-events-none absolute inset-0 bg-grid-soft opacity-20" />
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-black/10 blur-3xl" />

          <div className="relative grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em]">
                <Sparkles className="h-3.5 w-3.5" /> Próximo passo
              </div>

              <h2 className="mt-5 max-w-3xl font-display text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
                Sua empresa pode crescer com mais organização, segurança e estratégia.
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
                Converse com nossa equipe, explique o momento da sua empresa e receba uma orientação
                inicial sobre a solução contábil mais adequada.
              </p>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/90">
                <span className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4" />
                  Atendimento personalizado
                </span>
                <span className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4" />
                  Análise da sua necessidade
                </span>
                <span className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4" />
                  Sem compromisso
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm sm:p-5">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-white text-[color:var(--terracota)] hover:bg-white/90"
              >
                <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Solicitar diagnóstico gratuito
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full rounded-full border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                <a href="#servicos">Conhecer nossos serviços</a>
              </Button>

              <p className="px-3 pt-1 text-center text-xs leading-relaxed text-white/70">
                Você será direcionado ao WhatsApp para falar diretamente com nossa equipe.
              </p>
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
      <ComoTrabalhamos />
      <Ferramentas />
      <Depoimentos />
      <FaqSection />
      <CtaFinal />
    </>
  );
}
