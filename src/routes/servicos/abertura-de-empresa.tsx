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
          "Quer abrir uma empresa em São Paulo? A RD Solutions auxilia na abertura do CNPJ, escolha do CNAE, regime tributário e registros. Solicite atendimento!",
      },
      {
        property: "og:title",
        content: "Abertura de Empresa em São Paulo | RD Solutions",
      },
      {
        property: "og:description",
        content:
          "Abra sua empresa com orientação contábil. Assessoria para CNPJ, natureza jurídica, CNAE, tributação e formalização do negócio.",
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
      "Orientação sobre as estruturas empresariais disponíveis, como empresário individual e sociedade limitada, considerando o perfil e as necessidades do negócio.",
  },
  {
    titulo: "Definição das atividades (CNAE)",
    descricao:
      "Identificação dos códigos CNAE adequados às atividades da empresa e análise das exigências relacionadas ao seu funcionamento.",
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
      "Orientação sobre inscrições estaduais ou municipais, alvarás e licenças que possam ser exigidos conforme a atividade e a localização.",
  },
  {
    titulo: "Orientações após a abertura",
    descricao:
      "Informações sobre emissão de notas fiscais e obrigações fiscais, contábeis e trabalhistas para iniciar as atividades de forma organizada.",
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
      "Orientamos sobre natureza jurídica, CNAEs, regime tributário, endereço empresarial e documentação necessária.",
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
      "A documentação depende da natureza jurídica, das atividades e das exigências dos órgãos responsáveis. Geralmente, são necessários documentos dos responsáveis, informações do endereço e dados sobre a atividade empresarial.",
  },
  {
    pergunta: "Quanto tempo demora para abrir uma empresa?",
    resposta:
      "O prazo varia conforme o município, a natureza jurídica, a atividade exercida e a necessidade de licenças ou autorizações. A RD Solutions orienta sobre as etapas e acompanha o andamento do processo.",
  },
  {
    pergunta: "Quanto custa abrir uma empresa em São Paulo?",
    resposta:
      "Os custos dependem da natureza jurídica, das taxas aplicáveis, dos registros necessários e dos serviços contratados. Algumas atividades também exigem licenças específicas. Nossa equipe avalia o caso e apresenta uma proposta.",
  },
  {
    pergunta: "Qual é o melhor regime tributário para minha empresa?",
    resposta:
      "A escolha depende de fatores como atividade, faturamento, despesas e requisitos legais. Simples Nacional, Lucro Presumido e Lucro Real possuem características diferentes e devem ser avaliados conforme o perfil do negócio.",
  },
  {
    pergunta: "Posso abrir uma empresa sem sócios?",
    resposta:
      "Sim. Existem estruturas empresariais que permitem a abertura de uma empresa com apenas um titular, como o empresário individual e a sociedade limitada unipessoal. A escolha deve considerar as características do negócio.",
  },
  {
    pergunta: "Preciso de um contador para abrir minha empresa?",
    resposta:
      "As exigências variam conforme o tipo de empresa e o procedimento. A assessoria contábil auxilia na escolha do enquadramento, na documentação, nos registros e na organização das obrigações após a abertura.",
  },
  {
    pergunta: "Posso abrir uma empresa em São Paulo pela internet?",
    resposta:
      "Diversas etapas da abertura empresarial podem ser realizadas digitalmente por meio dos sistemas dos órgãos competentes. Entretanto, as exigências variam conforme o município, a atividade e a natureza jurídica.",
  },
];

function AberturaEmpresaPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* APRESENTAÇÃO */}
      <section className="border-b border-border bg-muted/30 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            Serviços empresariais
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Abertura de empresa em São Paulo
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Quer abrir seu próprio negócio e precisa de orientação
            para formalizar sua empresa? A RD Solutions oferece
            assessoria contábil para abertura de empresas em São Paulo,
            auxiliando na escolha da natureza jurídica, definição
            das atividades, planejamento tributário e obtenção do CNPJ.
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

      {/* O QUE É A ABERTURA DE EMPRESA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">
            Como abrir uma empresa em São Paulo?
          </h2>

          <div className="mt-6 max-w-4xl space-y-4 leading-relaxed text-muted-foreground">
            <p>
              Abrir uma empresa envolve a formalização de uma
              atividade econômica perante os órgãos competentes.
              Esse processo permite que o negócio obtenha seu
              CNPJ e realize as inscrições e os registros
              necessários para exercer suas atividades.
            </p>

            <p>
              Em São Paulo, a abertura pode envolver procedimentos
              perante a Junta Comercial do Estado de São Paulo
              (JUCESP), a Receita Federal, a prefeitura e outros
              órgãos responsáveis, conforme as características
              da empresa.
            </p>

            <p>
              Antes de iniciar os registros, é importante definir
              corretamente as atividades econômicas (CNAE),
              a natureza jurídica, o endereço empresarial
              e o regime tributário mais adequado ao negócio.
            </p>

            <p>
              A RD Solutions auxilia empreendedores durante
              essas etapas, oferecendo orientação contábil
              desde o planejamento até a formalização
              e o início das atividades.
            </p>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="bg-muted/30 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">
            Como ajudamos na abertura da sua empresa?
          </h2>

          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
            Cada negócio possui necessidades específicas.
            Nossa equipe auxilia nas principais decisões
            e etapas envolvidas na constituição de uma empresa.
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

      {/* DOCUMENTOS NECESSÁRIOS */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold">
            Quais documentos são necessários para abrir uma empresa?
          </h2>

          <p className="mt-5 leading-relaxed text-muted-foreground">
            A documentação exigida pode variar conforme
            a natureza jurídica, as atividades econômicas
            e os órgãos responsáveis pelo registro.
            Entre os documentos e informações normalmente
            solicitados estão:
          </p>

          <ul className="mt-6 list-disc space-y-3 pl-6 text-muted-foreground">
            <li>
              Documento de identificação dos responsáveis pela empresa;
            </li>
            <li>
              CPF e informações cadastrais dos sócios ou titular;
            </li>
            <li>
              Endereço residencial dos responsáveis, quando exigido;
            </li>
            <li>
              Endereço onde a empresa exercerá suas atividades;
            </li>
            <li>
              Descrição das atividades econômicas que serão desenvolvidas;
            </li>
            <li>
              Informações sobre capital social e participação societária,
              quando aplicáveis;
            </li>
            <li>
              Outros documentos específicos exigidos para
              determinadas atividades ou registros.
            </li>
          </ul>

          <p className="mt-6 leading-relaxed text-muted-foreground">
            Nossa equipe orienta sobre a documentação
            necessária para evitar inconsistências
            e facilitar o andamento dos procedimentos.
          </p>
        </div>
      </section>

      {/* PROCESSO */}
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

      {/* CUSTOS */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold">
            Quanto custa abrir uma empresa em São Paulo?
          </h2>

          <p className="mt-5 leading-relaxed text-muted-foreground">
            O custo para abrir uma empresa depende de fatores
            como natureza jurídica, município, atividade
            econômica e procedimentos necessários.
          </p>

          <p className="mt-5 leading-relaxed text-muted-foreground">
            Conforme o caso, podem existir taxas de registro,
            custos com certificados digitais, licenças,
            autorizações e honorários pelos serviços
            de assessoria contábil.
          </p>

          <p className="mt-5 leading-relaxed text-muted-foreground">
            A RD Solutions analisa as características
            do seu negócio e apresenta uma proposta
            de atendimento de acordo com os serviços
            necessários para a formalização.
          </p>
        </div>
      </section>

      {/* PRAZOS */}
      <section className="bg-muted/30 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold">
            Quanto tempo demora para abrir uma empresa?
          </h2>

          <p className="mt-5 leading-relaxed text-muted-foreground">
            O prazo para abertura de uma empresa varia
            conforme o município, a atividade econômica,
            a natureza jurídica e a necessidade
            de licenças ou autorizações.
          </p>

          <p className="mt-5 leading-relaxed text-muted-foreground">
            Algumas etapas podem ser realizadas digitalmente,
            enquanto outras dependem de análises e aprovações
            dos órgãos responsáveis.
          </p>

          <p className="mt-5 leading-relaxed text-muted-foreground">
            Nossa equipe acompanha os procedimentos
            e orienta o empreendedor sobre o andamento
            e os próximos passos da formalização.
          </p>
        </div>
      </section>

      {/* PLANEJAMENTO TRIBUTÁRIO */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold">
            Qual regime tributário escolher ao abrir uma empresa?
          </h2>

          <p className="mt-5 leading-relaxed text-muted-foreground">
            A escolha do regime tributário é uma das
            decisões importantes no planejamento
            de uma nova empresa.
          </p>

          <p className="mt-5 leading-relaxed text-muted-foreground">
            Dependendo das características do negócio
            e dos requisitos legais, podem ser avaliados
            regimes como Simples Nacional, Lucro Presumido
            e Lucro Real.
          </p>

          <p className="mt-5 leading-relaxed text-muted-foreground">
            Cada regime possui regras específicas
            para apuração dos tributos e cumprimento
            das obrigações fiscais.
          </p>

          <p className="mt-5 leading-relaxed text-muted-foreground">
            A RD Solutions considera fatores como
            atividade econômica, faturamento previsto,
            estrutura de custos e características
            da operação para orientar a escolha
            tributária mais adequada.
          </p>
        </div>
      </section>

      {/* PERGUNTAS FREQUENTES */}
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

      {/* CHAMADA FINAL */}
      <section className="px-6 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">
            Quer abrir sua empresa em São Paulo?
          </h2>

          <p className="mt-5 text-muted-foreground">
            Conte com a RD Solutions Assessoria Contábil
            para planejar a abertura do seu negócio,
            organizar os registros necessários
            e iniciar suas atividades com orientação
            contábil especializada.
          </p>

          <p className="mt-4 text-muted-foreground">
            Atendimento digital para empreendedores
            de São Paulo e de outras regiões do Brasil.
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