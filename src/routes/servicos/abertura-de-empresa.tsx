import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/servicos/abertura-de-empresa")({
  head: () => ({
    meta: [
      {
        title: "Abertura de Empresa em São Paulo | RD Solutions",
      },
      {
        name: "description",
        content:
          "Abra sua empresa em São Paulo com a assessoria da RD Solutions. Orientação sobre CNPJ, CNAE, natureza jurídica, regime tributário e registros.",
      },
      {
        property: "og:title",
        content: "Abertura de Empresa em São Paulo | RD Solutions",
      },
      {
        property: "og:description",
        content:
          "Assessoria contábil para abertura de empresas em São Paulo, do planejamento inicial à formalização do negócio.",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://rdsolutionsassessoria.com.br/servicos/abertura-de-empresa",
      },
    ],
  }),
  component: AberturaEmpresaPage,
});

const servicos = [
  {
    titulo: "Escolha da natureza jurídica",
    descricao:
      "Orientação sobre as características das estruturas empresariais, considerando o perfil e as necessidades do negócio.",
  },
  {
    titulo: "Definição das atividades (CNAE)",
    descricao:
      "Identificação das atividades econômicas que representam a atuação da empresa e análise dos enquadramentos aplicáveis.",
  },
  {
    titulo: "Planejamento tributário inicial",
    descricao:
      "Avaliação dos regimes tributários disponíveis, considerando as atividades, o faturamento previsto e os requisitos legais.",
  },
  {
    titulo: "Registro e obtenção do CNPJ",
    descricao:
      "Acompanhamento dos procedimentos de registro empresarial e inscrição no Cadastro Nacional da Pessoa Jurídica.",
  },
  {
    titulo: "Inscrições e licenças",
    descricao:
      "Orientação sobre inscrições estaduais ou municipais e licenças que possam ser exigidas conforme a atividade e a localização.",
  },
  {
    titulo: "Orientações após a abertura",
    descricao:
      "Informações sobre obrigações fiscais, contábeis e trabalhistas para ajudar a empresa a iniciar suas atividades de forma organizada.",
  },
];

const etapas = [
  {
    numero: "01",
    titulo: "Entendimento do negócio",
    descricao:
      "Conhecemos a atividade, os objetivos e as necessidades do empreendedor para identificar os procedimentos aplicáveis.",
  },
  {
    numero: "02",
    titulo: "Planejamento da abertura",
    descricao:
      "Orientamos sobre natureza jurídica, CNAEs, regime tributário e documentação necessária.",
  },
  {
    numero: "03",
    titulo: "Formalização e registros",
    descricao:
      "Acompanhamos as solicitações e os registros perante os órgãos competentes, conforme as exigências do caso.",
  },
  {
    numero: "04",
    titulo: "Início das atividades",
    descricao:
      "Apresentamos as principais obrigações da empresa e orientamos sobre os próximos passos após a formalização.",
  },
];

const perguntas = [
  {
    pergunta: "Quais documentos são necessários para abrir uma empresa?",
    resposta:
      "A documentação depende da natureza jurídica, das atividades e das exigências dos órgãos responsáveis. Em geral, são solicitados documentos de identificação, informações dos responsáveis, endereço e dados sobre a atividade empresarial.",
  },
  {
    pergunta: "Quanto tempo demora para abrir uma empresa?",
    resposta:
      "O prazo varia conforme o município, a natureza jurídica, a atividade exercida e a necessidade de licenças ou autorizações. A RD Solutions orienta sobre as etapas e acompanha o andamento do processo.",
  },
  {
    pergunta: "Quanto custa abrir uma empresa?",
    resposta:
      "Os custos dependem do tipo de empresa, das taxas aplicáveis, dos registros necessários e dos serviços contratados. Nossa equipe pode avaliar o caso e apresentar orientações sobre os custos envolvidos.",
  },
  {
    pergunta: "Qual é o melhor regime tributário para minha empresa?",
    resposta:
      "A escolha depende de fatores como atividade, faturamento, despesas e requisitos legais. Simples Nacional, Lucro Presumido e Lucro Real possuem características diferentes e devem ser avaliados conforme o perfil do negócio.",
  },
  {
    pergunta: "Preciso de um contador para abrir minha empresa?",
    resposta:
      "As exigências variam conforme o tipo de empresa e o procedimento. A assessoria contábil auxilia no enquadramento, na documentação e na organização das obrigações que surgem após a abertura.",
  },
];

function AberturaEmpresaPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Apresentação */}
      <section className="border-b border-border bg-muted/30 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            Serviços empresariais
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Abertura de empresa em São Paulo
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Está planejando abrir seu próprio negócio? A RD Solutions
            oferece assessoria contábil para auxiliar empreendedores
            na formalização de empresas, desde as decisões iniciais
            até os procedimentos de registro e as orientações para
            o início das atividades.
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

      {/* Serviços */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">
            Como ajudamos na abertura da sua empresa?
          </h2>

          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
            Cada negócio possui necessidades específicas. Nossa
            equipe auxilia nas principais decisões e etapas
            envolvidas na constituição de uma empresa.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {servicos.map((item) => (
              <article
                key={item.titulo}
                className="rounded-2xl border border-border bg-card p-7"
              >
                <h3 className="text-xl font-semibold">
                  {item.titulo}
                </h3>

                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {item.descricao}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="bg-muted/30 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">
            Como funciona o processo de abertura?
          </h2>

          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
            Organizamos o atendimento em etapas para facilitar
            o acompanhamento e esclarecer os próximos passos.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {etapas.map((etapa) => (
              <article
                key={etapa.numero}
                className="rounded-2xl border border-border bg-card p-7"
              >
                <span className="text-3xl font-bold text-primary">
                  {etapa.numero}
                </span>

                <h3 className="mt-5 text-xl font-semibold">
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

      {/* Conteúdo explicativo */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold">
            Por que planejar a abertura da empresa?
          </h2>

          <p className="mt-5 leading-relaxed text-muted-foreground">
            Abrir uma empresa envolve decisões que podem influenciar
            sua operação e suas obrigações futuras. A definição
            das atividades econômicas, da natureza jurídica e do
            regime tributário deve considerar as características
            do negócio e a legislação aplicável.
          </p>

          <p className="mt-5 leading-relaxed text-muted-foreground">
            Com orientação contábil, o empreendedor consegue
            compreender melhor essas escolhas, organizar os
            documentos necessários e se preparar para cumprir
            as obrigações após a formalização.
          </p>
        </div>
      </section>

      {/* Perguntas frequentes */}
      <section className="bg-muted/30 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold">
            Perguntas frequentes sobre abertura de empresa
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

      {/* Chamada para contato */}
      <section className="px-6 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">
            Quer abrir sua empresa com orientação especializada?
          </h2>

          <p className="mt-5 text-muted-foreground">
            Converse com a RD Solutions para entender os
            procedimentos necessários para formalizar seu negócio.
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