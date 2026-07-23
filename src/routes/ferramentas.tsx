import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState, type ReactNode } from "react";
import {
  Building2, TrendingDown, BarChart3, Calculator, Receipt, Wallet, Users, Landmark,
  Check, X, ArrowRight,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SectionHeader } from "@/components/site/section";
import { LeadCapture } from "@/components/site/lead-capture";

export const Route = createFileRoute("/ferramentas")({
  head: () => ({
    meta: [
      { title: "Ferramentas inteligentes — RD Solutions" },
      { name: "description", content: "Simuladores e calculadoras contábeis: economia tributária, comparador de regimes, custos contábeis, pró-labore, MEI e mais." },
      { property: "og:title", content: "Ferramentas Inteligentes — RD Solutions" },
      { property: "og:description", content: "Calculadoras contábeis para tomar decisões inteligentes." },
      { property: "og:url", content: "/ferramentas" },
    ],
    links: [{ rel: "canonical", href: "/ferramentas" }],
  }),
  component: FerramentasPage,
});

const BRL = (n: number) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

function ToolShell({ title, subtitle, children, aside }: { title: string; subtitle: string; children: ReactNode; aside?: ReactNode }) {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr]">
      <div className="card-premium p-6 md:p-8">
        <h3 className="font-display text-2xl font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
        <div className="mt-6 space-y-4">{children}</div>
      </div>
      <div className="space-y-6">{aside}</div>
    </div>
  );
}

function Result({ items }: { items: { label: string; value: ReactNode; hint?: string }[] }) {
  return (
    <div className="card-premium overflow-hidden p-6 md:p-7">
      <div className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-primary">Resultado</div>
      <dl className="grid gap-4 sm:grid-cols-2">
        {items.map((it) => (
          <div key={it.label} className="rounded-2xl border border-border bg-surface/60 p-4">
            <dt className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{it.label}</dt>
            <dd className="mt-1 font-display text-xl font-semibold text-foreground">{it.value}</dd>
            {it.hint && <p className="mt-1 text-[11px] text-muted-foreground">{it.hint}</p>}
          </div>
        ))}
      </dl>
    </div>
  );
}

/* ------------- Abertura ------------- */
function AberturaEmpresa() {
  const [fat, setFat] = useState(20000);
  const [socios, setSocios] = useState(2);
  const [func, setFunc] = useState(3);
  const regime = fat * 12 < 81000 ? "MEI" : fat * 12 < 4800000 ? "Simples Nacional" : "Lucro Presumido";
  const impostos = Math.round(fat * (regime === "MEI" ? 0.02 : regime === "Simples Nacional" ? 0.09 : 0.135));
  const tempo = regime === "MEI" ? "1 a 3 dias úteis" : "5 a 10 dias úteis";
  return (
    <ToolShell
      title="Simulador de Abertura de Empresa"
      subtitle="Descubra em segundos o regime recomendado, prazo estimado e carga inicial de impostos."
      aside={
        <>
          <Result
            items={[
              { label: "Regime recomendado", value: regime },
              { label: "Tempo estimado", value: tempo },
              { label: "Estimativa mensal de impostos", value: BRL(impostos) },
              { label: "Documentos necessários", value: "RG, CPF, CCM, IPTU", hint: "Enviamos check-list completo." },
            ]}
          />
          <Button className="w-full rounded-full bg-gradient-brand text-primary-foreground" size="lg">
            Solicitar abertura da empresa <ArrowRight className="ml-1.5 h-4 w-4" />
          </Button>
          <LeadCapture context="Abertura de empresa" />
        </>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label>Estado</Label>
          <Select defaultValue="SP"><SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>{["SP","RJ","MG","RS","PR","SC","BA","DF"].map(s=><SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
          </Select>
        </div>
        <div>
          <Label>Cidade</Label><Input defaultValue="São Paulo" />
        </div>
        <div className="sm:col-span-2">
          <Label>Atividade principal</Label><Input defaultValue="Consultoria em tecnologia" />
        </div>
        <div>
          <Label>Faturamento mensal estimado</Label>
          <Input type="number" value={fat} onChange={(e)=>setFat(+e.target.value||0)} />
        </div>
        <div>
          <Label>Número de sócios</Label>
          <Input type="number" min={1} value={socios} onChange={(e)=>setSocios(+e.target.value||1)} />
        </div>
        <div>
          <Label>Funcionários</Label>
          <Input type="number" min={0} value={func} onChange={(e)=>setFunc(+e.target.value||0)} />
        </div>
      </div>
    </ToolShell>
  );
}

/* ------------- Economia Tributária ------------- */
function EconomiaTributaria() {
  const [fat, setFat] = useState(80000);
  const [segmento, setSegmento] = useState("servicos");
  const [regime, setRegime] = useState("simples");
  const atual = fat * (regime === "simples" ? 0.135 : regime === "presumido" ? 0.163 : 0.19);
  const otimizado = fat * (segmento === "servicos" ? 0.099 : segmento === "comercio" ? 0.086 : 0.108);
  const economia = Math.max(0, atual - otimizado) * 12;
  const percentual = atual > 0 ? Math.round(((atual - otimizado) / atual) * 100) : 0;
  return (
    <ToolShell
      title="Simulador de Economia Tributária"
      subtitle="Compare quanto sua empresa paga hoje com o modelo tributário mais eficiente para seu perfil."
      aside={
        <>
          <Result
            items={[
              { label: "Economia anual estimada", value: BRL(economia) },
              { label: "Redução percentual", value: `${percentual}%` },
              { label: "Imposto atual (mês)", value: BRL(atual) },
              { label: "Imposto otimizado (mês)", value: BRL(otimizado) },
            ]}
          />
          <Button className="w-full rounded-full bg-gradient-brand text-primary-foreground" size="lg">
            Solicitar análise gratuita <ArrowRight className="ml-1.5 h-4 w-4" />
          </Button>
          <LeadCapture context="Economia tributária" />
        </>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label>Faturamento mensal</Label>
          <Input type="number" value={fat} onChange={(e)=>setFat(+e.target.value||0)} />
        </div>
        <div>
          <Label>Funcionários</Label><Input type="number" defaultValue={5} />
        </div>
        <div>
          <Label>Segmento</Label>
          <Select value={segmento} onValueChange={setSegmento}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="servicos">Serviços</SelectItem>
              <SelectItem value="comercio">Comércio</SelectItem>
              <SelectItem value="industria">Indústria</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Regime atual</Label>
          <Select value={regime} onValueChange={setRegime}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="simples">Simples Nacional</SelectItem>
              <SelectItem value="presumido">Lucro Presumido</SelectItem>
              <SelectItem value="real">Lucro Real</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </ToolShell>
  );
}

/* ------------- Comparador Tributário ------------- */
function Comparador() {
  const [fat, setFat] = useState(50000);
  const anos = fat * 12;
  const regimes = [
    { n: "MEI", elegivel: anos <= 81000, tributo: Math.min(fat, 6750) * 0.02 + 75, pros: ["Simplicidade", "Baixo custo"], cons: ["Limite R$ 81 mil/ano"] },
    { n: "Simples Nacional", elegivel: anos <= 4800000, tributo: fat * 0.09, pros: ["Alíquota reduzida", "DAS unificado"], cons: ["Limite de faturamento"] },
    { n: "Lucro Presumido", elegivel: true, tributo: fat * 0.135, pros: ["Presunção de lucro", "Sem restrição de atividade"], cons: ["Mais obrigações"] },
    { n: "Lucro Real", elegivel: true, tributo: fat * 0.19, pros: ["Ideal para margens baixas", "Compensação de prejuízos"], cons: ["Complexidade alta"] },
  ];
  const melhor = regimes.filter(r=>r.elegivel).sort((a,b)=>a.tributo-b.tributo)[0]?.n;
  return (
    <ToolShell
      title="Comparador Tributário"
      subtitle="Compare MEI, Simples Nacional, Lucro Presumido e Lucro Real com base no seu faturamento."
      aside={
        <>
          <div className="card-premium p-6">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Melhor opção</div>
            <div className="mt-2 font-display text-3xl font-semibold text-gradient-brand">{melhor}</div>
            <p className="mt-2 text-sm text-muted-foreground">Baseado no seu faturamento anual estimado de {BRL(anos)}.</p>
          </div>
          <div className="grid gap-3">
            {regimes.map((r) => (
              <div key={r.n} className={`card-premium p-5 ${r.n === melhor ? "border-primary/50 ring-1 ring-primary/20" : ""}`}>
                <div className="flex items-center justify-between">
                  <div className="font-display text-base font-semibold">{r.n}</div>
                  {r.elegivel ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-[oklch(0.6_0.12_150)]/15 px-2 py-0.5 text-[10px] font-semibold text-[oklch(0.4_0.12_150)]"><Check className="h-3 w-3" /> elegível</span>
                  ) : (
                    <span className="inline-flex items-center gap-1 rounded-full bg-destructive/15 px-2 py-0.5 text-[10px] font-semibold text-destructive"><X className="h-3 w-3" /> não elegível</span>
                  )}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">Tributo estimado: <strong className="text-foreground">{BRL(r.tributo)}/mês</strong></div>
                <div className="mt-2 grid gap-1 text-[12px]">
                  {r.pros.map(p=><div key={p} className="flex items-center gap-1.5 text-foreground/80"><Check className="h-3 w-3 text-primary" /> {p}</div>)}
                  {r.cons.map(c=><div key={c} className="flex items-center gap-1.5 text-muted-foreground"><X className="h-3 w-3" /> {c}</div>)}
                </div>
              </div>
            ))}
          </div>
          <LeadCapture context="Comparador tributário" />
        </>
      }
    >
      <div>
        <Label>Faturamento mensal</Label>
        <Input type="number" value={fat} onChange={(e)=>setFat(+e.target.value||0)} />
      </div>
    </ToolShell>
  );
}

/* ------------- Custos Contábeis ------------- */
function CustosContabeis() {
  const [regime, setRegime] = useState("simples");
  const [func, setFunc] = useState(5);
  const [notas, setNotas] = useState(40);
  const base = regime === "mei" ? 89 : regime === "simples" ? 399 : regime === "presumido" ? 699 : 1290;
  const honorarios = base + func * 22 + notas * 3;
  return (
    <ToolShell
      title="Calculadora de Custos Contábeis"
      subtitle="Estimativa transparente de honorários mensais para sua empresa."
      aside={
        <>
          <Result
            items={[
              { label: "Estimativa de honorários (mês)", value: BRL(honorarios) },
              { label: "Complexidade da empresa", value: honorarios < 500 ? "Baixa" : honorarios < 900 ? "Média" : "Alta" },
              { label: "Obrigações fiscais", value: regime === "mei" ? "DASN-SIMEI" : regime === "simples" ? "DAS, DEFIS" : "ECD, ECF, EFD" },
              { label: "Departamento pessoal", value: `${func} colaborador(es)` },
            ]}
          />
          <Button className="w-full rounded-full bg-gradient-brand text-primary-foreground" size="lg">
            Solicitar proposta oficial <ArrowRight className="ml-1.5 h-4 w-4" />
          </Button>
          <LeadCapture context="Proposta de honorários" />
        </>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label>Regime tributário</Label>
          <Select value={regime} onValueChange={setRegime}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="mei">MEI</SelectItem>
              <SelectItem value="simples">Simples Nacional</SelectItem>
              <SelectItem value="presumido">Lucro Presumido</SelectItem>
              <SelectItem value="real">Lucro Real</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Nº de funcionários</Label>
          <Input type="number" min={0} value={func} onChange={(e)=>setFunc(+e.target.value||0)} />
        </div>
        <div className="sm:col-span-2">
          <Label>Notas fiscais emitidas / mês</Label>
          <Input type="number" min={0} value={notas} onChange={(e)=>setNotas(+e.target.value||0)} />
        </div>
      </div>
    </ToolShell>
  );
}

/* ------------- Calculadora Fiscal ------------- */
function CalendarioFiscal() {
  const items = [
    { d: "20", m: "Todo mês", n: "FGTS (GRRF/GFIP)" },
    { d: "30", m: "Todo mês", n: "IRPJ / CSLL (Presumido)" },
    { d: "20", m: "Todo mês", n: "DAS — Simples Nacional" },
    { d: "20", m: "Todo mês", n: "INSS Empresa" },
    { d: "25", m: "Todo mês", n: "PIS / COFINS / ICMS" },
    { d: "31", m: "Anualmente", n: "DIRF, ECD, ECF" },
  ];
  return (
    <ToolShell
      title="Calculadora e Calendário Fiscal"
      subtitle="Fique por dentro dos próximos vencimentos e obrigações acessórias."
      aside={<LeadCapture context="Calendário fiscal" />}
    >
      <ul className="divide-y divide-border">
        {items.map((i, idx) => (
          <li key={idx} className="flex items-center gap-4 py-3">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand text-primary-foreground">
              <span className="font-display text-sm font-bold">{i.d}</span>
            </div>
            <div className="flex-1">
              <div className="font-medium text-foreground">{i.n}</div>
              <div className="text-xs text-muted-foreground">{i.m}</div>
            </div>
            <span className="text-xs text-primary">próximo</span>
          </li>
        ))}
      </ul>
    </ToolShell>
  );
}

/* ------------- Pró-Labore ------------- */
function ProLabore() {
  const [total, setTotal] = useState(20000);
  const [pl, setPl] = useState(6000);
  const dl = Math.max(0, total - pl);
  const inss = Math.min(pl * 0.11, 951.62);
  const ir = pl > 4664 ? pl * 0.275 - 896 : pl > 3751 ? pl * 0.225 - 662 : pl > 2826 ? pl * 0.15 - 381 : pl > 2259 ? pl * 0.075 - 169 : 0;
  return (
    <ToolShell
      title="Simulador Pró-Labore vs. Distribuição de Lucros"
      subtitle="Encontre o melhor equilíbrio entre pró-labore e distribuição de lucros."
      aside={
        <>
          <Result
            items={[
              { label: "Distribuição de Lucros (isenta de IR)", value: BRL(dl) },
              { label: "INSS sobre pró-labore", value: BRL(inss) },
              { label: "IR sobre pró-labore", value: BRL(Math.max(0, ir)) },
              { label: "Líquido total ao sócio", value: BRL(total - inss - Math.max(0, ir)) },
            ]}
          />
          <LeadCapture context="Otimização pró-labore" />
        </>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label>Retirada total desejada</Label>
          <Input type="number" value={total} onChange={(e)=>setTotal(+e.target.value||0)} />
        </div>
        <div>
          <Label>Valor de pró-labore</Label>
          <Input type="number" value={pl} onChange={(e)=>setPl(+e.target.value||0)} />
        </div>
      </div>
    </ToolShell>
  );
}

/* ------------- Contratação ------------- */
function Contratacao() {
  const [salario, setSalario] = useState(3500);
  const fgts = salario * 0.08;
  const inss = salario * 0.2;
  const ferias = (salario * 1.33) / 12;
  const decimo = salario / 12;
  const outros = salario * 0.058;
  const total = salario + fgts + inss + ferias + decimo + outros;
  return (
    <ToolShell
      title="Simulador de Contratação (CLT)"
      subtitle="Descubra o custo real de um funcionário para a empresa."
      aside={
        <>
          <Result
            items={[
              { label: "Salário base", value: BRL(salario) },
              { label: "FGTS (8%)", value: BRL(fgts) },
              { label: "INSS Patronal (20%)", value: BRL(inss) },
              { label: "Provisão de férias + 1/3", value: BRL(ferias) },
              { label: "Provisão 13º salário", value: BRL(decimo) },
              { label: "Outros encargos (S/S, RAT)", value: BRL(outros) },
              { label: "Custo total mensal", value: BRL(total), hint: `${Math.round(((total - salario) / salario) * 100)}% sobre o salário` },
            ]}
          />
          <LeadCapture context="Simulação de contratação" />
        </>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label>Salário bruto</Label>
          <Input type="number" value={salario} onChange={(e)=>setSalario(+e.target.value||0)} />
        </div>
        <div>
          <Label>Estado</Label>
          <Select defaultValue="SP"><SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>{["SP","RJ","MG","RS","PR","SC","BA","DF"].map(s=><SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
          </Select>
        </div>
        <div className="sm:col-span-2">
          <Label>Cargo</Label>
          <Input defaultValue="Analista" />
        </div>
      </div>
    </ToolShell>
  );
}

/* ------------- MEI ------------- */
function SimuladorMei() {
  const [fat, setFat] = useState(5500);
  const [func, setFunc] = useState(0);
  const anos = fat * 12;
  const podeMei = anos <= 81000 && func <= 1;
  const devMigrar = anos > 60000;
  return (
    <ToolShell
      title="Simulador MEI"
      subtitle="Descubra se você pode ser MEI, permanecer nele ou se vale migrar para Simples Nacional."
      aside={
        <div className="space-y-4">
          <div className="card-premium p-6">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Diagnóstico</div>
            <ul className="mt-3 space-y-3 text-sm">
              <li className="flex items-start gap-2"><StatusIcon ok={podeMei} /> <span>{podeMei ? "Você pode ser MEI." : "Você não se enquadra no MEI."}</span></li>
              <li className="flex items-start gap-2"><StatusIcon ok={podeMei && !devMigrar} /> <span>{podeMei && !devMigrar ? "Pode permanecer no MEI com segurança." : "Recomendamos avaliar migração."}</span></li>
              <li className="flex items-start gap-2"><StatusIcon ok={devMigrar} /> <span>{devMigrar ? "Vale a pena migrar para Simples Nacional." : "Migração para Simples ainda não necessária."}</span></li>
            </ul>
          </div>
          <LeadCapture context="Análise MEI vs Simples" />
        </div>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label>Faturamento mensal</Label>
          <Input type="number" value={fat} onChange={(e)=>setFat(+e.target.value||0)} />
        </div>
        <div>
          <Label>Funcionários registrados</Label>
          <Input type="number" min={0} value={func} onChange={(e)=>setFunc(+e.target.value||0)} />
        </div>
      </div>
    </ToolShell>
  );
}
function StatusIcon({ ok }: { ok: boolean }) {
  return ok ? (
    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[oklch(0.6_0.12_150)]/15 text-[oklch(0.42_0.13_150)]"><Check className="h-3 w-3" /></span>
  ) : (
    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-destructive/15 text-destructive"><X className="h-3 w-3" /></span>
  );
}

const tabs = [
  { v: "economia", i: TrendingDown, l: "Economia Tributária", C: EconomiaTributaria },
  { v: "comparador", i: BarChart3, l: "Comparador", C: Comparador },
  { v: "abertura", i: Building2, l: "Abertura", C: AberturaEmpresa },
  { v: "custos", i: Calculator, l: "Custos Contábeis", C: CustosContabeis },
  { v: "fiscal", i: Receipt, l: "Calendário Fiscal", C: CalendarioFiscal },
  { v: "prolabore", i: Wallet, l: "Pró-Labore", C: ProLabore },
  { v: "contratacao", i: Users, l: "Contratação", C: Contratacao },
  { v: "mei", i: Landmark, l: "MEI", C: SimuladorMei },
] as const;

function FerramentasPage() {
  const [tab, setTab] = useState<string>("economia");
  const list = useMemo(() => tabs, []);
  return (
    <>
      <section className="relative overflow-hidden py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-grid-soft opacity-30" />
        <div className="container-page relative">
          <SectionHeader
            eyebrow="Ferramentas inteligentes"
            title={<>Calculadoras <span className="text-gradient-brand">exclusivas</span> para empresários</>}
            description="Simule impostos, custos e economias em segundos — com precisão contábil e visual premium."
          />
        </div>
      </section>
      <section className="pb-24">
        <div className="container-page">
          <Tabs value={tab} onValueChange={setTab}>
            <TabsList className="mb-8 flex h-auto flex-wrap justify-start gap-2 bg-transparent p-0">
              {list.map(({ v, i: Icon, l }) => (
                <TabsTrigger
                  key={v}
                  value={v}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm data-[state=active]:border-primary/40 data-[state=active]:bg-gradient-brand data-[state=active]:text-primary-foreground data-[state=active]:shadow-[var(--shadow-soft)]"
                >
                  <Icon className="mr-1.5 h-4 w-4" /> {l}
                </TabsTrigger>
              ))}
            </TabsList>
            {list.map(({ v, C }) => (
              <TabsContent key={v} value={v} className="mt-0 animate-rd-fade-up">
                <C />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </>
  );
}
