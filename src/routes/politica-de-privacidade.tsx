import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade e LGPD — RD Solutions" },
      { name: "description", content: "Como a RD Solutions coleta, armazena e protege seus dados em conformidade com a LGPD." },
      { property: "og:title", content: "Política de Privacidade — RD Solutions" },
      { property: "og:description", content: "Nosso compromisso com a proteção dos seus dados." },
      { property: "og:url", content: "/politica-de-privacidade" },
    ],
    links: [{ rel: "canonical", href: "/politica-de-privacidade" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <article className="container-page prose prose-neutral dark:prose-invert max-w-3xl py-16">
      <h1 className="font-display text-3xl font-semibold">Política de Privacidade e LGPD</h1>
      <p className="mt-3 text-muted-foreground">
        A RD Solutions Assessoria Contábil valoriza sua privacidade e trata dados pessoais em
        conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).
      </p>
      <h2 className="mt-8 text-xl font-semibold">1. Dados que coletamos</h2>
      <p className="text-sm text-muted-foreground">
        Coletamos apenas os dados necessários para a prestação dos nossos serviços contábeis,
        fiscais e financeiros: nome, e-mail, telefone, CNPJ, documentos societários e informações
        fiscais.
      </p>
      <h2 className="mt-6 text-xl font-semibold">2. Finalidade</h2>
      <p className="text-sm text-muted-foreground">
        Utilizamos as informações para atender obrigações legais e regulatórias, comunicação com
        clientes e melhoria contínua dos nossos serviços.
      </p>
      <h2 className="mt-6 text-xl font-semibold">3. Direitos do titular</h2>
      <p className="text-sm text-muted-foreground">
        Você pode a qualquer momento solicitar acesso, correção, portabilidade ou exclusão dos
        seus dados escrevendo para dpo@rdsolutions.com.br.
      </p>
    </article>
  );
}
