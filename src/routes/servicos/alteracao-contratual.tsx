import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/servicos/alteracao-contratual")({
  head: () => ({
    meta: [
      {
        title: "Alteração Contratual de Empresas | RD Solutions",
      },
      {
        name: "description",
        content:
          "Precisa fazer uma alteração contratual? A RD Solutions auxilia com mudança de endereço, razão social, CNAE, capital social e quadro societário.",
      },
      {
        property: "og:title",
        content: "Alteração Contratual de Empresas | RD Solutions",
      },
      {
        property: "og:description",
        content:
          "Assessoria contábil para alterações contratuais e regularização de dados empresariais.",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://rdsolutionsassessoria.com.br/servicos/alteracao-contratual",
      },
    ],
  }),
  component: AlteracaoContratualPage,
});

const alteracoes = [
  {
    titulo: "Mudança de endereço",
    descricao:
      "Atualização do endereço da empresa nos órgãos competentes.",
  },
  {
    titulo: "Alteração de razão social",
    descricao:
      "Orientação e formalização da mudança do nome empresarial.",
  },
  {
    titulo: "Alteração de CNAE",
    descricao:
      "Inclusão, exclusão ou atualização das atividades econômicas da empresa.",
  },
  {
    titulo: "Alteração de capital social",
    descricao:
      "Formalização de mudanças no capital social da empresa.",
  },
  {
    titulo: "Entrada ou saída de sócios",
    descricao:
      "Atualização do quadro societário e das informações contratuais.",
  },
];

function AlteracaoContratualPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="border-b border-border bg-muted/30 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            Serviços empresariais
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Alteração contratual de empresas
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Sua empresa precisa atualizar informações cadastrais ou
            societárias? A RD Solutions oferece assessoria contábil
            para conduzir alterações contratuais com organização,
            segurança e atenção às exigências legais.
          </p>

          <a
            href="/#contato"
            className="mt-8 inline-flex rounded-full bg-primary px-7 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Solicitar atendimento
          </a>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">
            Quais alterações realizamos?
          </h2>

          <p className="mt-4 max-w-3xl text-muted-foreground">
            Nossa equipe auxilia empresas em diferentes tipos de
            alterações contratuais, conforme as necessidades
            de cada negócio.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {alteracoes.map((item) => (
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

      <section className="bg-muted/30 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold">
            Como funciona o processo?
          </h2>

          <p className="mt-5 leading-relaxed text-muted-foreground">
            A RD Solutions analisa a alteração desejada, orienta
            sobre a documentação necessária e acompanha os
            procedimentos aplicáveis perante os órgãos competentes.
            As etapas e os prazos variam conforme o tipo de
            alteração e a situação cadastral da empresa.
          </p>

          <h2 className="mt-12 text-3xl font-bold">
            Preciso de um contador para alterar meu contrato social?
          </h2>

          <p className="mt-5 leading-relaxed text-muted-foreground">
            As exigências dependem da natureza jurídica da empresa
            e do procedimento realizado. Contar com assessoria
            contábil especializada ajuda a organizar os documentos,
            verificar as obrigações envolvidas e reduzir erros
            durante a formalização.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">
            Precisa realizar uma alteração contratual?
          </h2>

          <p className="mt-5 text-muted-foreground">
            Converse com a RD Solutions e receba orientações
            para o seu caso.
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
