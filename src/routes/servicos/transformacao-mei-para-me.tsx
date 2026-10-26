import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/servicos/transformacao-mei-para-me")({
  head: () => ({
    meta: [
      {
        title: "Transformação de MEI para ME em São Paulo | RD Solutions",
      },
      {
        name: "description",
        content:
          "Precisa transformar seu MEI em ME? A RD Solutions auxilia no desenquadramento do SIMEI, regularização cadastral e procedimentos na Junta Comercial e Receita Federal.",
      },
      {
        property: "og:title",
        content: "Transformação de MEI para ME | RD Solutions",
      },
      {
        property: "og:description",
        content:
          "Assessoria contábil completa para desenquadramento do MEI e adequação da empresa à condição de Microempresa.",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://rdsolutionsassessoria.com.br/servicos/transformacao-mei-para-me",
      },
    ],
  }),
  component: TransformacaoMeiPage,
});

const situacoes = [
  {
    titulo: "Faturamento acima do limite",
    descricao:
      "Quando o faturamento ultrapassa o limite permitido ao MEI, pode ser necessário realizar o desenquadramento, observando as regras e os prazos aplicáveis.",
  },
  {
    titulo: "Contratação de mais funcionários",
    descricao:
      "O MEI possui limitações para contratação de empregados. O crescimento da equipe pode exigir a mudança de enquadramento.",
  },
  {
    titulo: "Atividades não permitidas ao MEI",
    descricao:
      "Algumas atividades econômicas não são permitidas nessa modalidade e exigem adequação do enquadramento empresarial.",
  },
  {
    titulo: "Entrada de sócios",
    descricao:
      "O MEI não permite a participação de sócios. Para alterar a estrutura societária, é necessário avaliar os procedimentos de desenquadramento e alteração empresarial.",
  },
];

const etapas = [
  {
    numero: "01",
    titulo: "Análise da situação da empresa",
    descricao:
      "Avaliamos o faturamento, as atividades, a situação cadastral e as necessidades do negócio.",
  },
  {
    numero: "02",
    titulo: "Desenquadramento do SIMEI",
    descricao:
      "Orientamos e realizamos os procedimentos de desenquadramento, considerando o motivo e os efeitos legais da mudança.",
  },
  {
    numero: "03",
    titulo: "Adequações cadastrais",
    descricao:
      "Realizamos as atualizações necessárias nos órgãos competentes, incluindo Junta Comercial e Receita Federal, quando aplicáveis.",
  },
  {
    numero: "04",
    titulo: "Orientação contábil e tributária",
    descricao:
      "Ajudamos sua empresa a compreender as obrigações fiscais, contábeis e trabalhistas após a mudança.",
  },
];

const perguntas = [
  {
    pergunta: "Ao sair do MEI, preciso abrir outro CNPJ?",
    resposta:
      "Em regra, não. O desenquadramento do SIMEI não exige, por si só, a abertura de outro CNPJ. Entretanto, alterações cadastrais podem ser necessárias conforme a situação da empresa.",
  },
  {
    pergunta: "Qual é a diferença entre MEI e ME?",
    resposta:
      "MEI é uma modalidade simplificada de formalização. ME significa Microempresa e corresponde a um porte empresarial. As regras de tributação, faturamento e obrigações podem ser diferentes.",
  },
  {
    pergunta: "Quanto custa transformar MEI em ME?",
    resposta:
      "O custo depende das alterações necessárias, das taxas eventualmente aplicáveis e dos serviços envolvidos. A RD Solutions analisa sua situação e apresenta uma proposta.",
  },
  {
    pergunta: "Quanto tempo demora o processo?",
    resposta:
      "O prazo varia conforme o motivo do desenquadramento, os procedimentos necessários e os órgãos envolvidos.",
  },
];

function TransformacaoMeiPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* APRESENTAÇÃO */}
      <section className="border-b border-border bg-muted/30 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            Serviços empresariais
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Transformação de MEI para ME em São Paulo
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Seu negócio cresceu e chegou a hora de deixar de ser MEI?
            A RD Solutions oferece assessoria contábil para realizar
            o desenquadramento e orientar sua empresa durante essa transição.
          </p>

          <Link
            to="/"
            hash="contato"
            className="mt-8 inline-flex rounded-full bg-primary px-7 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Solicitar atendimento
          </Link>
        </div>
      </section>

      {/* O QUE É */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">
            O que significa transformar MEI em ME?
          </h2>

          <div className="mt-6 max-w-4xl space-y-4 leading-relaxed text-muted-foreground">
            <p>
              O Microempreendedor Individual (MEI) é uma modalidade
              simplificada voltada a pequenos negócios que atendem
              a determinados requisitos legais.
            </p>

            <p>
              Quando a empresa deixa de atender a esses requisitos,
              pode ser necessário realizar o desenquadramento do SIMEI,
              passando a cumprir as obrigações correspondentes ao novo
              enquadramento tributário.
            </p>

            <p>
              A Microempresa (ME), por sua vez, é uma classificação
              relacionada ao porte da empresa. A mudança pode envolver
              procedimentos fiscais e cadastrais, dependendo de cada caso.
            </p>
          </div>
        </div>
      </section>

      {/* QUANDO É NECESSÁRIO */}
      <section className="bg-muted/30 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">
            Quando é necessário deixar de ser MEI?
          </h2>

          <p className="mt-4 max-w-3xl text-muted-foreground">
            Existem diferentes situações que podem exigir o
            desenquadramento. Conheça algumas das principais:
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {situacoes.map((situacao) => (
              <article
                key={situacao.titulo}
                className="rounded-2xl border border-border bg-card p-7"
              >
                <h3 className="text-xl font-semibold">
                  {situacao.titulo}
                </h3>

                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {situacao.descricao}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">
            Como a RD Solutions realiza o processo?
          </h2>

          <p className="mt-4 max-w-3xl text-muted-foreground">
            Nossa equipe acompanha as etapas necessárias para que
            sua empresa faça a transição com orientação e segurança.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {etapas.map((etapa) => (
              <article
                key={etapa.numero}
                className="rounded-2xl border border-border bg-card p-7"
              >
                <span className="text-2xl font-bold text-primary">
                  {etapa.numero}
                </span>

                <h3 className="mt-4 text-xl font-semibold">
                  {etapa.titulo}
                </h3>

                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {etapa.descricao}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PERGUNTAS FREQUENTES */}
      <section className="bg-muted/30 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold">
            Perguntas frequentes sobre MEI para ME
          </h2>

          <div className="mt-10 space-y-5">
            {perguntas.map((item) => (
              <article
                key={item.pergunta}
                className="rounded-2xl border border-border bg-card p-7"
              >
                <h3 className="text-lg font-semibold">
                  {item.pergunta}
                </h3>

                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {item.resposta}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CHAMADA FINAL */}
      <section className="px-6 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">
            Precisa transformar seu MEI em ME?
          </h2>

          <p className="mt-5 text-muted-foreground">
            Converse com a RD Solutions para analisar sua situação,
            realizar os procedimentos necessários e receber
            orientações para essa nova etapa do seu negócio.
          </p>

          <Link
            to="/"
            hash="contato"
            className="mt-8 inline-flex rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Falar com a RD Solutions
          </Link>
        </div>
      </section>
    </div>
  );
}