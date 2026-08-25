import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState, type ReactNode } from "react";
import {
  Building2,
  TrendingDown,
  BarChart3,
  Calculator,
  Receipt,
  Wallet,
  Users,
  Landmark,
  Check,
  X,
  ArrowRight,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SectionHeader } from "@/components/site/section";
import { LeadCapture } from "@/components/site/lead-capture";
import { site } from "@/lib/site-config";

export const Route = createFileRoute("/ferramentas")({
  head: () => ({
    meta: [
      { title: "Calculadoras e Simuladores Contábeis | RD Solutions" },
      {
        name: "description",
        content:
          "Use calculadoras e simuladores contábeis para explorar cenários de regime tributário, pró-labore, custos de contratação, MEI, abertura de empresa e planejamento financeiro.",
      },
      { property: "og:title", content: "Calculadoras e Simuladores Contábeis | RD Solutions" },
      {
        property: "og:description",
        content:
          "Ferramentas gratuitas para simular cenários contábeis, tributários e financeiros da sua empresa.",
      },
      { name: "twitter:title", content: "Calculadoras Contábeis | RD Solutions" },
      {
        name: "twitter:description",
        content:
          "Simule regimes tributários, pró-labore, contratação, MEI e outros cenários empresariais.",
      },
    ],
  }),
  component: FerramentasPage,
});

const BRL = (n: number) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

function ToolShell({
  title,
  subtitle,
  children,
  aside,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
  aside?: ReactNode;
}) {
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
      <div className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
        Resultado
      </div>
      <dl className="grid gap-4 sm:grid-cols-2">
        {items.map((it) => (
          <div key={it.label} className="rounded-2xl border border-border bg-surface/60 p-4">
            <dt className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              {it.label}
            </dt>
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
  const [estado, setEstado] = useState("SP");
  const [cidade, setCidade] = useState("São Paulo");
  const [atividade, setAtividade] = useState("Consultoria em tecnologia");
  const [fat, setFat] = useState(20000);
  const [estrutura, setEstrutura] = useState("individual");
  const [func, setFunc] = useState(0);
  const [atividadeMei, setAtividadeMei] = useState("nao-sei");

  const faturamentoAnual = Math.max(0, fat) * 12;
  const dentroLimiteMei = faturamentoAnual <= 81000;
  const semSocios = estrutura === "individual";
  const limiteFuncionariosMei = func <= 1;
  const atividadePermitidaMei = atividadeMei === "sim";

  const meiPossivel =
    dentroLimiteMei && semSocios && limiteFuncionariosMei && atividadePermitidaMei;

  const simplesPodeSerAvaliado = faturamentoAnual <= 4800000;
  const situacaoMei =
    atividadeMei === "nao-sei"
      ? "Precisa verificar"
      : meiPossivel
        ? "Pode ser avaliado"
        : "Há impedimentos";

  const proximoPasso = meiPossivel
    ? "Validar atividade e formalização"
    : simplesPodeSerAvaliado
      ? "Analisar natureza jurídica e regime tributário"
      : "Realizar análise tributária individualizada";
  return (
    <ToolShell
      title="Simulador de Abertura de Empresa"
      subtitle="Faça uma análise inicial do enquadramento da sua empresa e descubra quais pontos precisam ser avaliados antes da abertura. "
      aside={
        <>
          <Result
            items={[
              {
                label: "Faturamento anual estimado",
                value: BRL(faturamentoAnual),
                hint: "Projeção baseada no faturamento mensal informado.",
              },
              {
                label: "Possibilidade de MEI",
                value: situacaoMei,
                hint:
                  atividadeMei === "nao-sei"
                    ? "A atividade exercida precisa estar entre as ocupações permitidas."
                    : meiPossivel
                      ? "Os critérios básicos informados são compatíveis, sujeitos à validação."
                      : "Um ou mais critérios informados não são compatíveis com o MEI.",
              },
              {
                label: "Simples Nacional",
                value: simplesPodeSerAvaliado ? "Pode ser avaliado" : "Acima do limite geral",
                hint: simplesPodeSerAvaliado
                  ? "A opção depende também da atividade, natureza jurídica e demais impedimentos legais."
                  : "O faturamento projetado ultrapassa R$ 4,8 milhões ao ano. ",
              },
              {
                label: "Próximo passo",
                value: proximoPasso,
                hint: `${cidade}/${estado} • ${atividade}`,
              },
            ]}
          />
          <div className="rounded-2xl border border-border/70 bg-surface/60 p-5">
            <p className="tex-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Importante
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Esta simulação não define automaticamente o melhor regime tributário. Atividade,
              natureza jurídica, quadro societário, localização, folha de pagamento e outras
              características podem alterar o enquadramento.
            </p>
          </div>
          <Button
            asChild
            className="w-full rounded-full bg-gradient-brand text-primary-foreground"
            size="lg"
          >
            <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
              Solicitar análise para abertura
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </a>
          </Button>
          <LeadCapture context="Abertura de empresa" />
        </>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label>Estado</label>
          <Select value={estado} onValueChange={setEstado}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {["SP", "RJ", "MG", "RS", "PR", "SC", "BA", "DF"].map((uf) => (
                <SelectItem key={uf} value={uf}>
                  {uf}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <label>Cidade</label>
          <Input
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            placeholder="Ex.: São Paulo"
          />
        </div>
        <div className="sm:col-span-2">
          <label>Atividade principal</label>
          <Input
            value={atividade}
            onChange={(e) => setAtividade(e.target.value)}
            placeholder="Ex.: Comércio de roupas"
          />
        </div>
        <div>
          <label>Faturamento mensal estimado</label>
          <Input
            type="number"
            min={0}
            value={fat}
            onChange={(e) => setFat(Math.max(0, Number(e.target.value) || 0))}
          />
        </div>
        <div>
          <label>Estrutura pretendida</label>
          <Select value={estrutura} onValueChange={setEstrutura}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="individual">Apenas o titular</SelectItem>
              <SelectItem value="sociedade">Empresa com sócios</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label>Funcionários previstos</label>
          <Input
            type="number"
            min={0}
            value={func}
            onChange={(e) => setFunc(Math.max(0, Number(e.target.value) || 0))}
          />
        </div>
        <div>
          <label>Sua atividade é permitida no MEI?</label>
          <Select value={atividadeMei} onValueChange={setAtividadeMei}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sim">Sim</SelectItem>
              <SelectItem value="nao">Não</SelectItem>
              <SelectItem value="nao-sei">Não sei</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </ToolShell>
  );
}

/* ------------- Economia Tributária ------------- */
function EconomiaTributaria() {
  const [fat, setFat] = useState(80000);
  const [rbt12, setRbt12] = useState(960000);
  const [segmento, setSegmento] = useState("servicos");
  const [regime, setRegime] = useState("simples");
  const [folha, setFolha] = useState(25000);
  const [margem, setMargem] = useState("nao-sei");
  const faturamentoMensal = Math.max(0, fat);
  const receita12Meses = Math.max(0, rbt12);
  const folhaMensal = Math.max(0, folha);
  const folha12Meses = folhaMensal * 12;
  const fatorR = receita12Meses > 0 ? folha12Meses / receita12Meses : 0;
  const dentroLimiteSimples = receita12Meses <= 4800000;
  const fatorRRelevante = segmento === "servicos";
  const fatorRFavoravel = fatorR >= 0.28;
  const pontosAnalise: string[] = [];
  if (regime === "simples") {
    pontosAnalise.push("Revisar enquadramento, anexo e alíquota efetiva do Simples Nacional.");
    if (fatorRRelevante) {
      pontosAnalise.push(
        fatorRFavoravel
          ? "A relação entre folha e receita pode impactar positivamente o enquadramento de determinadas atividades de serviços."
          : "A relação entre folha e receita merece análise para atividades sujeitas ao Fator R.",
      );
    }
  }
  if (regime === "presumido") {
    pontosAnalise.push(
      "Comparar os percentuais de presunção aplicáveis à atividade com a margem real da empresa.",
    );
  }
  if (margem === "baixa") {
    pontosAnalise.push(
      "Margens reduzidas podem justificar uma comparação mais detalhada entre regimes.",
    );
  }
  if (margem === "alta") {
    pontosAnalise.push(
      "Margem elevada também deve ser considerada na comparação entre regimes de tributação.",
    );
  }
  const nivelAnalise = pontosAnalise.length >= 3 ? "Análise recomendada" : "Vale revisar";

  return (
    <ToolShell
      title="Análise de Economia Tributária"
      subtitle="Identifique pontos que podem justificar uma revisão do regime tributário da sua empresa."
      aside={
        <>
          <Result
            items={[
              { label: "Faturamento mensal informado", value: BRL(faturamentoMensal) },
              { label: "Receita acumulada em 12 meses", value: BRL(receita12Meses) },
              {
                label: "Situação do Simples Nacional",
                value: dentroLimiteSimples ? "Dentro do limite geral" : "Acima do limite geral",
                hint: "O limite geral de receita bruta anual do Simples Nacional é de 4,8 milhões.",
              },
              {
                label: "Nível de análise",
                value: nivelAnalise,
                hint: "O resultado indica necessidade de revisão, não uma economia garantida.",
              },
            ]}
          />
          {fatorRRelevante && (
            <div className="card-premium p-6">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                Relação folha x faturamento
              </div>
              <p className="mt-1 text-xs text-muted-foreground">Fator R do Simples Nacional</p>
              <div className="mt-2 font-display text-2xl font-semibold text-foreground">
                {(fatorR * 100).toFixed(1)}%
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Para algumas atividades de serviços no Simples Nacional, a relação entre folha de
                pagamento e o faturamento pode influenciar a forma de tributação. Em determinadas
                situações, atingir 28% ou mais pode levar a uma tributação mais favorável.
              </p>
            </div>
          )}
          <div className="card-premium p-6">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              Pontos para revisão
            </div>
            <ul className="mt-4 space-y-3">
              {pontosAnalise.map((ponto) => (
                <li
                  key={ponto}
                  className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{ponto}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border/70 bg-surface/60 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Importante
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Esta ferramenta não calcula economia tributária garantida. A comparação entre regimes
              depende da atividade, receita acumulada, folha de pagamento, margem, créditos
              tributários e outras características de operação.
            </p>
          </div>

          <Button
            asChild
            className="w-full rounded-full bg-gradient-brand text-primary-foreground"
            size="lg"
          >
            <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
              Solicitar análise tributária
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </a>
          </Button>
          <LeadCapture context="Economia tributária" />
        </>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label>Faturamento mensal</Label>
          <Input
            type="number"
            min={0}
            value={fat}
            onChange={(e) => setFat(Math.max(0, Number(e.target.value) || 0))}
          />
        </div>
        <div>
          <Label>Receita acumulada nos últimos 12 meses</Label>
          <Input
            type="number"
            min={0}
            value={rbt12}
            onChange={(e) => setRbt12(Math.max(0, Number(e.target.value) || 0))}
          />
        </div>
        <div>
          <Label>Segmento</Label>
          <Select value={segmento} onValueChange={setSegmento}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="servicos">Serviços</SelectItem>
              <SelectItem value="comercio">Comércio</SelectItem>
              <SelectItem value="industria">Indústria</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Regime tributário atual</Label>
          <Select value={regime} onValueChange={setRegime}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="simples">Simples Nacional</SelectItem>
              <SelectItem value="presumido">Lucro Presumido</SelectItem>
              <SelectItem value="real">Lucro Real</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Folha de pagamento mensal</Label>
          <Input
            type="number"
            min={0}
            value={folha}
            onChange={(e) => setFolha(Math.max(0, Number(e.target.value) || 0))}
          />
        </div>
        <div>
          <Label>Margem aproximada do negócio</Label>
          <Select value={margem} onValueChange={setMargem}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="baixa">Baixa</SelectItem>
              <SelectItem value="media">Média</SelectItem>
              <SelectItem value="alta">Alta</SelectItem>
              <SelectItem value="nao-sei">Não sei</SelectItem>
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
  const [segmento, setSegmento] = useState("servicos");
  const [estrutura, setEstrutura] = useState("individual");
  const [funcionarios, setFuncionarios] = useState(0);
  const [folha, setFolha] = useState(10000);
  const [margem, setMargem] = useState("nao-sei");
  const [atividadeMei, setAtividadeMei] = useState("nao-sei");

  const faturamentoMensal = Math.max(0, fat);
  const faturamentoAnual = faturamentoMensal * 12;
  const folhaMensal = Math.max(0, folha);

  const dentroLimiteMei = faturamentoAnual <= 81000;
  const estruturaCompativelMei = estrutura === "individual";
  const funcionariosCompativeisMei = funcionarios <= 1;
  const atividadeCompativelMei = atividadeMei === "sim";
  const meiPodeSerAvaliado =
    dentroLimiteMei &&
    estruturaCompativelMei &&
    funcionariosCompativeisMei &&
    atividadeCompativelMei;
  const dentroLimiteSimples = faturamentoAnual <= 4800000;
  const relacaoFolhaFaturamento = faturamentoMensal > 0 ? folhaMensal / faturamentoMensal : 0;
  const cenarios = [
    {
      nome: "MEI",
      status:
        atividadeMei === "nao-sei"
          ? "Precisa verificar"
          : meiPodeSerAvaliado
            ? "Pode ser avaliado"
            : "Há impedimentos",
      destaque: meiPodeSerAvaliado,
      pontos: [
        dentroLimiteMei
          ? "Faturamento dentro do limite informado."
          : "Faturamento acima do limite anual do MEI.",
        estruturaCompativelMei
          ? "Estrutura individual compatível."
          : "Empresas com sócios não podem ser enquadradas como MEI.",
        funcionariosCompativeisMei
          ? "Quantidade de funcionários dentro do critério considerado."
          : "Quantidade de funcionários incompatível com o critério considerado.",
        atividadeMei === "nao-sei"
          ? "É necessário verificar se a atividade é permitida."
          : atividadeCompativelMei
            ? "Atividade informada como permitida."
            : "Atividade informada como não permitida.",
      ],
    },
    {
      nome: "Simples Nacional",
      status: dentroLimiteSimples ? "Pode ser analisado" : "Acima do limite geral",
      destaque: dentroLimiteSimples,
      pontos: [
        dentroLimiteSimples
          ? "Receita projetada dentro do limite geral."
          : "Receita projetada acima de R$ 4,8 milhões ao ano.",
        segmento === "servicos"
          ? "Atividades de serviços podem exigir análise do anexo e da relação entre folha e faturamento."
          : "A tributação depende da atividade e do anexo aplicável.",
        `Relação folha x faturamento informada: ${(relacaoFolhaFaturamento * 100).toFixed(1)}%.`,
        "É necessário verificar impedimentos, atividade e enquadramento.",
      ],
    },
    {
      nome: "Lucro Presumido",
      status: "Requer simulação",
      destaque: margem === "alta",
      pontos: [
        "A tributação depende dos percentuais de presunção aplicáveis à atividade.",
        margem === "alta"
          ? "A margem informada justifica incluir este regime na comparação."
          : "É necessário comparar a margem real com a base presumida.",
        "ISS, ICMS, PIS, Cofins, IRPJ e CSLL devem ser analisados conforme a operação.",
        "Possui mais obrigações acessórias do que regimes simplificados.",
      ],
    },
    {
      nome: "Lucro Real",
      status: "Requer simulação",
      destaque: margem === "baixa",
      pontos: [
        margem === "baixa"
          ? "Margem baixa pode justificar uma análise mais detalhada deste regime."
          : "É necessário conhecer o lucro efetivo da empresa.",
        "Despesas dedutíveis e créditos tributários podem influenciar o resultado.",
        "Exige controles contábeis e fiscais mais detalhados.",
        "Pode ser obrigatório em determinadas situações previstas na legislação.",
      ],
    },
  ];
  const cenariosParaAvaliar = cenarios.filter(
    (cenario) =>
      cenario.status === "Pode ser avaliado" ||
      cenario.status === "Pode ser analisado" ||
      cenario.status === "Requer simulação",
  ).length;
  return (
    <ToolShell
      title="Comparador de Regimes Tributários"
      subtitle="Compare os principais pontos que devem ser analisados antes de escolher o regime tributário da sua empresa."
      aside={
        <>
          <Result
            items={[
              { label: "Faturamento mensal", value: BRL(faturamentoMensal) },
              { label: "Faturamento anual projetado", value: BRL(faturamentoAnual) },
              {
                label: "Cenários para avaliação",
                value: `${cenariosParaAvaliar} regime(s)`,
                hint: "A quantidade não representa aprovação ou recomendação definitiva.",
              },
              {
                label: "Próximo passo",
                value: "Simulação individualizada",
                hint: "A comparação final depende dos dados contábeis e operacionais da empresa.",
              },
            ]}
          />
          <div className="grid gap-4">
            {cenarios.map((cenario) => (
              <article
                key={cenario.nome}
                className={`card-premium p-5 ${
                  cenario.destaque ? "border-primary/40 ring-1 ring-primary/15" : ""
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {cenario.nome}
                  </h3>
                  <span
                    className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${
                      cenario.status === "Há impedimentos" ||
                      cenario.status === "Acima do limite geral"
                        ? "bg-destructive/10 text-destructive"
                        : cenario.destaque
                          ? "bg-primary/10 text-primary"
                          : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {cenario.status}
                  </span>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {cenario.pontos.map((ponto) => (
                    <li
                      key={ponto}
                      className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{ponto}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="rounded-2xl border border-border/70 bg-surface/60 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Importante
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Este comparador apresenta uma triagem inicial. Ele não calcula a carga tributária
              definitiva nem determina automaticamente o regime mais econômico para sua empresa.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="w-full rounded-full bg-gradient-brand text-primary-foreground hover:opacity-95"
          >
            <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
              Solicitar comparação tributária
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </a>
          </Button>
          <LeadCapture context="Comparador tributário" />
        </>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label>Faturamento mensal estimado</Label>
          <Input
            type="number"
            min={0}
            value={fat}
            onChange={(e) => setFat(Math.max(0, Number(e.target.value) || 0))}
          />
        </div>
        <div>
          <Label>Segmento da empresa</Label>
          <Select value={segmento} onValueChange={setSegmento}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="servicos">Serviços</SelectItem>
              <SelectItem value="comercio">Comércio</SelectItem>
              <SelectItem value="industria">Indústria</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Estrutura da empresa</Label>
          <Select value={estrutura} onValueChange={setEstrutura}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="individual"> Apenas o titular </SelectItem>
              <SelectItem value="sociedade"> Empresa com sócios </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Funcionários registrados</Label>
          <Input
            type="number"
            min={0}
            value={funcionarios}
            onChange={(e) => setFuncionarios(Math.max(0, Number(e.target.value) || 0))}
          />
        </div>
        <div>
          <Label>Folha de pagamento mensal</Label>
          <Input
            type="number"
            min={0}
            value={folha}
            onChange={(e) => setFolha(Math.max(0, Number(e.target.value) || 0))}
          />
        </div>
        <div>
          <Label>Margem aproximada do negócio</Label>
          <Select value={margem} onValueChange={setMargem}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="baixa"> Baixa </SelectItem>
              <SelectItem value="media"> Média </SelectItem>
              <SelectItem value="alta"> Alta </SelectItem>
              <SelectItem value="nao-sei"> Não sei</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="sm:col-span-2">
          <Label>Sua atividade é permitida no MEI?</Label>
          <Select value={atividadeMei} onValueChange={setAtividadeMei}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sim"> Sim </SelectItem>
              <SelectItem value="nao"> Não </SelectItem>
              <SelectItem value="nao-sei"> Não sei </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </ToolShell>
  );
}

/* ------------- Custos Contábeis ------------- */
function CustosContabeis() {
  const [regime, setRegime] = useState("simples");
  const [func, setFunc] = useState(5);
  const [notas, setNotas] = useState(40);
  const [operacaoComplexa, setOperacaoComplexa] = useState("nao");

  const funcionarios = Math.max(0, func);
  const notasMensais = Math.max(0, notas);

  let pontuacao = 0;

  if (regime === "simples") pontuacao += 1;
  if (regime === "presumido") pontuacao += 2;
  if (regime === "real") pontuacao += 4;

  if (funcionarios >= 3) pontuacao += 1;
  if (funcionarios >= 10) pontuacao += 2;

  if (notasMensais >= 30) pontuacao += 1;
  if (notasMensais >= 100) pontuacao += 2;

  if (operacaoComplexa === "sim") pontuacao += 2;

  const complexidade = pontuacao <= 2 ? "Baixa" : pontuacao <= 5 ? "Intermediária" : "Alta";

  const resultado =
    complexidade === "Baixa"
      ? {
          titulo: "Sua empresa possui uma rotina contábil mais simples.",
          descricao:
            "Com base nas informações preenchidas, sua operação aparenta ter um volume reduzido de movimentações e obrigações. Mesmo assim, o acompanhamento contábil é importante para manter a empresa organizada e regular.",
        }
      : complexidade === "Intermediária"
        ? {
            titulo: "Sua empresa precisa de acompanhamento contábil periódico.",
            descricao:
              "O volume de documentos, funcionários e obrigações exige organização das rotinas fiscais, contábeis e trabalhistas para reduzir riscos e apoiar decisões mais seguras.",
          }
        : {
            titulo: "Sua empresa exige uma estrutura contábil mais próxima e organizada.",
            descricao:
              "A operação informada apresenta maior volume ou complexidade. Um acompanhamento mais próximo pode ajudar a controlar obrigações, reduzir riscos e gerar informações melhores para a gestão.",
          };
  const indicador =
    complexidade === "Baixa"
      ? "bg-[oklch(0.6_0.12_150)]"
      : complexidade === "Intermediária"
        ? "bg-[oklch(0.72_0.12_75)]"
        : "bg-destructive";
  return (
    <ToolShell
      title="Check-up Contábil"
      subtitle="Responda quatro perguntas rápidas e entenda o nível de acompanhamento que sua empresa pode precisar."
      aside={
        <>
          <div className="card-premium overflow-hidden p-6 md:p-7">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              Resultado da análise
            </div>
            <div className="mt-5 flex items-center gap-3">
              <span aria-hidden="true" className={`h-3 w-3 shrink-0 rounded-full ${indicador}`} />
              <p className="font-display text-2xl font-semibold text-foreground">
                Complexidade {complexidade.toLowerCase()}
              </p>
            </div>
            <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
              {resultado.titulo}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {resultado.descricao}
            </p>
          </div>
          <div className="rounded-2xl border border-border/70 bg-surface/60 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Próximo passo
            </p>

            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Nossa equipe pode analisar a realidade da sua empresa e indicar um modelo de
              atendimento adequado às suas necessidades.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="w-full rounded-full bg-gradient-brand text-primary-foreground hover:opacity-95"
          >
            <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
              Solicitar diagnóstico gratuito
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </a>
          </Button>
          <LeadCapture context="Check-up contábil" />
        </>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label>Regime tributário</Label>
          <Select value={regime} onValueChange={setRegime}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mei">MEI</SelectItem>
              <SelectItem value="simples">Simples Nacional</SelectItem>
              <SelectItem value="presumido">Lucro Presumido</SelectItem>
              <SelectItem value="real">Lucro Real</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Número de funcionários</Label>
          <Input
            type="number"
            min={0}
            value={func}
            onChange={(e) => setFunc(Math.max(0, Number(e.target.value) || 0))}
          />
        </div>
        <div>
          <Label>Notas fiscais por mês</Label>
          <Input
            type="number"
            min={0}
            value={notas}
            onChange={(e) => setNotas(Math.max(0, Number(e.target.value) || 0))}
          />
        </div>
        <div>
          <Label>Possui filial ou uma operação mais complexa?</Label>
          <Select value={operacaoComplexa} onValueChange={setOperacaoComplexa}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="nao">Não</SelectItem>
              <SelectItem value="sim">Sim</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </ToolShell>
  );
}

/* ------------- Calculadora Fiscal ------------- */
function CalendarioFiscal() {
  const [regime, setRegime] = useState("simples");
  const [possuiFuncionarios, setPossuiFuncionarios] = useState("sim");
  const obrigacoesPorRegime = {
    mei: [
      "Organização das notas fiscais emitidas",
      "Pagamento mensal do DAS",
      "Declaração anual do MEI",
      "Controle do faturamento",
      "Guarda dos documentos da atividade",
    ],
    simples: [
      "Apuração e pagamento dos tributos",
      "Emissão e conferência de notas fiscais",
      "Entrega das declarações obrigatórias",
      "Controle do faturamento acumulado",
      "Organização dos documentos contábeis e fiscais",
    ],
    presumido: [
      "Apuração dos tributos da empresa",
      "Controle das receitas e documentos fiscais",
      "Entrega das declarações e escriturações aplicáveis",
      "Acompanhamento das obrigações contábeis",
      "Conferência periódica da situação fiscal",
    ],
    real: [
      "Apuração detalhada dos tributos",
      "Controle contábil e fiscal da operação",
      "Análise das despesas e créditos aplicáveis",
      "Entrega das escriturações e declarações",
      "Acompanhamento contínuo da conformidade fiscal",
    ],
  };
  const obrigacoesTrabalhistas =
    possuiFuncionarios === "sim"
      ? [
          "Processamento da folha de pagamento",
          "Controle de admissões, férias e desligamentos",
          "Envio das informações trabalhistas",
          "Recolhimento dos encargos da folha",
        ]
      : [];
  const regimeLabel =
    regime === "mei"
      ? "MEI"
      : regime === "simples"
        ? "Simples Nacional"
        : regime === "presumido"
          ? "Lucro Presumido"
          : "Lucro Real";
  const obrigacoes = [
    ...obrigacoesPorRegime[regime as keyof typeof obrigacoesPorRegime],
    ...obrigacoesTrabalhistas,
  ];
  return (
    <ToolShell
      title="Assistente Fiscal"
      subtitle="Selecione o perfil da sua empresa e conheça as principais rotinas que precisam de acompanhamento."
      aside={
        <>
          <div className="card-premium p-6 md:p-7">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              Rotina fiscal estimada
            </div>
            <h3 className="mt-3 font-display text-2xl font-semibold text-foreground">
              Empresa no {regimeLabel}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Com base nas informações preenchidas, estas são algumas das principais rotinas que
              normalmente precisam ser acompanhadas.
            </p>
            <ul className="mt-5 space-y-3">
              {obrigacoes.map((obrigacao) => (
                <li
                  key={obrigacao}
                  className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{obrigacao}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border/70 bg-surface/60 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Como a RD Solutions ajuda
            </p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {[
                "Organização e controle das obrigações",
                "Acompanhamento dos prazos aplicáveis",
                "Conferência das informações fiscais",
                "Orientação sobre mudanças na legislação",
                "Suporte para dúvidas da rotina empresarial",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border/70 bg-surface/60 p-5">
            <p className="text-sm leading-relaxed text-muted-foreground">
              As obrigações podem variar conforme atividade, localização, porte da empresa e
              características da operação.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="w-full rounded-full bg-gradient-brand text-primary-foreground hover:opacity-95"
          >
            <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
              Falar com um especialista
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </a>
          </Button>
          <LeadCapture context="Assistente fiscal" />
        </>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label> Regime tributário </Label>
          <Select value={regime} onValueChange={setRegime}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mei"> MEI </SelectItem>
              <SelectItem value="simples"> Simples Nacional </SelectItem>
              <SelectItem value="presumido"> Lucro Presumido </SelectItem>
              <SelectItem value="real"> Lucro Real </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label> A empresa possui funcionários? </Label>
          <Select value={possuiFuncionarios} onValueChange={setPossuiFuncionarios}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="nao"> Não </SelectItem>
              <SelectItem value="sim"> Sim </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </ToolShell>
  );
}

/* ------------- Pró-Labore ------------- */
function ProLabore() {
  const [total, setTotal] = useState(20000);
  const [pl, setPl] = useState(6000);
  const retiradaTotal = Math.max(0, total);
  const proLabore = Math.min(Math.max(0, pl), retiradaTotal);
  const distribuicao = Math.max(0, retiradaTotal - proLabore);

  const percentualProLabore = retiradaTotal > 0 ? (proLabore / retiradaTotal) * 100 : 0;
  const distribuicaoAlta = distribuicao > 50000;
  const mensagem =
    percentualProLabore < 20
      ? "A parcela destinada ao pró-labore está relativamente baixa em relação à retirada total. Vale revisar a estrutura com um contador."
      : percentualProLabore > 70
        ? "A maior parte da retirada está concentrada em pró-labore. Uma análise pode ajudar a entender se essa estrutura está adequada à realidade da empresa."
        : "A composição informada merece uma análise conjunta entre pró-labore, lucros disponíveis e situação tributária da empresa.";
  return (
    <ToolShell
      title="Planejador de Retirada dos Sócios"
      subtitle="Visualize como sua retirada mensal está distribuída entre pró-labore e lucros e identifique pontos que merecem análise."
      aside={
        <>
          <Result
            items={[
              { label: "Retirada total informada", value: BRL(retiradaTotal) },
              {
                label: "Pró-labore",
                value: BRL(proLabore),
                hint: `${percentualProLabore.toFixed(0)}% da retirada total.`,
              },
              {
                label: "Distribuição de lucros planejada",
                value: BRL(distribuicao),
                hint: "A distribuição depende da existência de lucro apurado e da situação contábil da empresa.",
              },
              {
                label: "Próximo passo",
                value: "Revisar a estrutura",
                hint: "A melhor composição depende da realidade da empresa e do sócio.",
              },
            ]}
          />
          <div className="rounded-2xl border border-border/70 bg-surface/60 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Leitura inicial
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{mensagem}</p>
          </div>
          {distribuicaoAlta && (
            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                Atenção a tributação de 2026
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                O valor de lucros informado ultrapassa R$ 50 mil no mês. Dependendo da forma de
                distribuição, pode haver retenção de Imposto de Renda retido na fonte e a operação
                deve ser analisada antes do pagamento.
              </p>
            </div>
          )}
          <div className="rounded-2xl border border-border/70 bg-surface/60 p-5">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Esta ferramenta não calcula INSS ou Imposto de Renda definitivos. Esses valores
              dependem de fatores como base de contribuição, outros rendimentos, deduções e regras
              tributárias aplicáveis.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="w-full rounded-full bg-gradient-brand text-primary-foreground hover:opacity-95"
          >
            <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
              Solicitar análise de pró-labore
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </a>
          </Button>
          <LeadCapture context="Otimização pró-labore" />
        </>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label>Retirada total mensal desejada</Label>
          <Input
            type="number"
            min={0}
            value={total}
            onChange={(e) => setTotal(Math.max(0, Number(e.target.value) || 0))}
          />
        </div>
        <div>
          <Label>Valor planejado de pró-labore</Label>
          <Input
            type="number"
            min={0}
            max={total}
            value={pl}
            onChange={(e) => setPl(Math.max(0, Number(e.target.value) || 0))}
          />
        </div>
      </div>
    </ToolShell>
  );
}

/* ------------- Contratação ------------- */
function Contratacao() {
  const [salario, setSalario] = useState(3500);
  const [regime, setRegime] = useState("simples");
  const [anexoIV, setAnexoIV] = useState("nao");
  const salarioBruto = Math.max(0, salario);
  const fgts = salarioBruto * 0.08;
  const ferias = (salarioBruto * 4) / 36;
  const decimoTerceiro = salarioBruto / 12;
  const aplicaCpp =
    regime === "presumido" || regime === "real" || (regime === "simples" && anexoIV === "sim");
  const cppEstimativa = aplicaCpp ? salarioBruto * 0.2 : 0;
  const custoBase = salarioBruto + fgts + ferias + decimoTerceiro + cppEstimativa;
  const percentualAdicional =
    salarioBruto > 0 ? ((custoBase - salarioBruto) / salarioBruto) * 100 : 0;
  return (
    <ToolShell
      title="Simulador de Custo de Contratação"
      subtitle="Veja uma estimativa inicial do custo mensal de contratar um funcionário pelo regime CLT."
      aside={
        <>
          <Result
            items={[
              { label: "Salário bruto", value: BRL(salarioBruto) },
              {
                label: "FGTS estimado",
                value: BRL(fgts),
                hint: "Referência de 8% para empregado comum.",
              },
              { label: "Provisão de férias + 1/3", value: BRL(ferias) },
              { label: "Provisão de 13º salário", value: BRL(decimoTerceiro) },
              {
                label: "Contribuição patronal estimada",
                value: aplicaCpp ? BRL(cppEstimativa) : "Não incluída",
                hint: aplicaCpp
                  ? "Estimativa de 20%, sujeita ao enquadramento da empresa."
                  : "Em muitos casos do Simples Nacional, a CPP já está incluída no DAS.",
              },
              {
                label: "Custo mensal estimado",
                value: BRL(custoBase),
                hint: `${percentualAdicional.toFixed(0)}% acima do salário bruto nesta simulação.`,
              },
            ]}
          />
          <div className="rounded-2xl border border-border/70 bg-surface/60 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              O que não está incluído
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Benefícios, vale-transporte, vale-refeição, adicionais, convenção coletiva, RAT,
              contribuções a terceiros e outras particularidades da contratação podem aumentar o
              custo final.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="w-full rounded-full bg-gradient-brand text-primary-foreground hover:opacity-95"
          >
            <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
              Solicitar análise da contratação
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </a>
          </Button>
          <LeadCapture context="Simulação de contratação" />
        </>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label>Salário bruto</Label>
          <Input
            type="number"
            min={0}
            value={salario}
            onChange={(e) => setSalario(Math.max(0, Number(e.target.value) || 0))}
          />
        </div>
        <div>
          <Label>Regime tributário da empresa</Label>
          <Select value={regime} onValueChange={setRegime}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="simples">Simples Nacional</SelectItem>
              <SelectItem value="presumido">Lucro Presumido</SelectItem>
              <SelectItem value="real">Lucro Real</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {regime === "simples" && (
          <div className="sm:col-span-2">
            <Label> A empresa está enquadrada no Anexo IV? </Label>
            <Select value={anexoIV} onValueChange={setAnexoIV}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nao">Não</SelectItem>
                <SelectItem value="sim">Sim</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}
      </div>
    </ToolShell>
  );
}

/* ------------- MEI ------------- */
function SimuladorMei() {
  const [fat, setFat] = useState(5500);
  const [func, setFunc] = useState(0);
  const [atividadePermitida, setAtividadePermitida] = useState("nao-sei");
  const [participaOutraEmpresa, setParticipaOutraEmpresa] = useState("nao");
  const [possuiFilial, setPossuiFilial] = useState("nao");

  const faturamentoMensal = Math.max(0, fat);
  const faturamentoAnual = faturamentoMensal * 12;
  const funcionarios = Math.max(0, func);

  const dentroLimite = faturamentoAnual <= 81000;
  const funcionariosOK = funcionarios <= 1;
  const atividadeOk = atividadePermitida === "sim";
  const naoParticipaOutraEmpresa = participaOutraEmpresa === "nao";
  const naoPossuiFilial = possuiFilial === "nao";
  const precisaVerificarAtividade = atividadePermitida === "nao-sei";
  const criteriosCompativeis =
    dentroLimite && funcionariosOK && atividadeOk && naoParticipaOutraEmpresa && naoPossuiFilial;
  const pontosAtencao: string[] = [];

  if (!dentroLimite) {
    pontosAtencao.push("O faturamento projetado ultrapassa o limite anual geral do MEI.");
  }
  if (!funcionariosOK) {
    pontosAtencao.push(
      "A quantidade de funcionários informada ultrapassa o limite permitido para o MEI.",
    );
  }
  if (atividadePermitida === "nao") {
    pontosAtencao.push("A atividade informada não é compatível com o MEI.");
  }
  if (precisaVerificarAtividade) {
    pontosAtencao.push(
      "É necessário confirmar se a atividade exercida está entre as ocupações permitidas.",
    );
  }
  if (!naoParticipaOutraEmpresa) {
    pontosAtencao.push(
      "Quem participa de outra empresa como titular, sócio ou administrador não pode permanecer como MEI.",
    );
  }
  if (!naoPossuiFilial) {
    pontosAtencao.push("O MEI não pode possuir filial.");
  }
  const status = precisaVerificarAtividade
    ? "Precisa verificar"
    : criteriosCompativeis
      ? "Perfil inicialmente compatível"
      : "Existem pontos de impedimento";
  const mensagem = precisaVerificarAtividade
    ? "As informações preenchidas ainda não são suficientes para concluir a análise, porque a atividade precisa ser validada."
    : criteriosCompativeis
      ? "Com base nas informações preenchidas, seu perfil atende aos principais critérios iniciais do MEI. A atividade e demais condições ainda devem ser confirmadas antes da formalização."
      : "Um ou mais critérios informados podem impedir o enquadramento ou a permanência como MEI.";

  return (
    <ToolShell
      title="Check-up MEI"
      subtitle="Responda algumas perguntas rápidas e veja se o seu perfil atende aos principais critérios do MEI."
      aside={
        <>
          <div className="card-premium p-6 md:p-7">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              Resultado da análise
            </div>
            <h3 className="mt-3 font-display text-2xl font-semibold text-foreground">{status}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{mensagem}</p>
            <div className="mt-5 rounded-2xl border border-border/70 bg-surface/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                Faturamento anual projetado
              </p>
              <p className="mt-1 font-display text-xl font-semibold text-foreground">
                {BRL(faturamentoAnual)}
              </p>
            </div>
          </div>
          {pontosAtencao.length > 0 && (
            <div className="card-premium p-6">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                Pontos para verificar
              </div>
              <ul className="mt-4 space-y-3">
                {pontosAtencao.map((ponto) => (
                  <li
                    key={ponto}
                    className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{ponto}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="rounded-2xl border border-border/70 bg-surface/60 p-5">
            <p className="text-sm leading-relaxed text-muted-foreground">
              O resultado é uma análise inicial. Existem situações específicas que podem alterar o
              enquadramento ou exigir o desenquadramento do MEI.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="w-full rounded-full bg-gradient-brand text-primary-foreground hover:opacity-95"
          >
            <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
              Solicitar análise do MEI
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </a>
          </Button>
          <LeadCapture context="Check-up MEI" />
        </>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label>Faturamento mensal médio</Label>
          <Input
            type="number"
            min={0}
            value={fat}
            onChange={(e) => setFat(Math.max(0, Number(e.target.value) || 0))}
          />
        </div>
        <div>
          <Label>Funcionários registrados</Label>
          <Input
            type="number"
            min={0}
            value={func}
            onChange={(e) => setFunc(Math.max(0, Number(e.target.value) || 0))}
          />
        </div>
        <div>
          <Label>Sua atividade é permitida no MEI?</Label>
          <Select value={atividadePermitida} onValueChange={setAtividadePermitida}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sim"> Sim </SelectItem>
              <SelectItem value="nao"> Não </SelectItem>
              <SelectItem value="nao-sei"> Não sei</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Participa de outra empresa?</Label>
          <Select value={participaOutraEmpresa} onValueChange={setParticipaOutraEmpresa}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="nao"> Não </SelectItem>
              <SelectItem value="sim"> Sim </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="sm:col-span-2">
          <Label>Possui filial?</Label>
          <Select value={possuiFilial} onValueChange={setPossuiFilial}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="nao"> Não </SelectItem>
              <SelectItem value="sim"> Sim </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </ToolShell>
  );
}

function StatusIcon({ ok }: { ok: boolean }) {
  return ok ? (
    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[oklch(0.6_0.12_150)]/15 text-[oklch(0.42_0.13_150)]">
      <Check className="h-3 w-3" />
    </span>
  ) : (
    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-destructive/15 text-destructive">
      <X className="h-3 w-3" />
    </span>
  );
}

const tabs = [
  { v: "economia", i: TrendingDown, l: "Economia Tributária", C: EconomiaTributaria },
  { v: "comparador", i: BarChart3, l: "Comparador", C: Comparador },
  { v: "abertura", i: Building2, l: "Abertura", C: AberturaEmpresa },
  { v: "custos", i: Calculator, l: "Check-up Contábil", C: CustosContabeis },
  { v: "fiscal", i: Receipt, l: "Assistente Fiscal", C: CalendarioFiscal },
  { v: "prolabore", i: Wallet, l: "Retirada dos Sócios", C: ProLabore },
  { v: "contratacao", i: Users, l: "Contratação", C: Contratacao },
  { v: "mei", i: Landmark, l: "Check-up MEI", C: SimuladorMei },
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
            title={
              <>
                Simule cenários e tome decisões com{" "}
                <span className="text-gradient-brand"> mais informação. </span>
              </>
            }
            description="Explore cenários contábeis, tributários e financeiros com estimativas orientativas para apoiar suas decisões."
          />
          <div className="mx-auto mt-6 max-w-3xl rounded-2xl border border-border/70 bg-background/70 p-4 text-center">
            <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
              As simulações apresentadas têm caráter informativo e utilizam premissas simplificadas.
              O resultado não substitui uma análise contábil, fiscal, tributária ou trabalhista
              individualizada.
            </p>
          </div>
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
