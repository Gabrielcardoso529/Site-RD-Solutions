import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade e LGPD | RD Solutions" },
      {
        name: "description",
        content:
          "Saiba como a RD Solutions coleta, utiliza, armazena e protege dados pessoais em conformidade com a Lei Geral de Proteção de Dados.",
      },
      { property: "og:title", content: "Política de Privacidade | RD Solutions" },
      {
        property: "og:description",
        content:
          "Conheça as práticas da RD Solutions para proteção e tratamento de dados pessoais.",
      },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <section className="section-page">
      <div className="container-page">
        <div className="mx-auto max-w-3x1">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            Privacidade e proteção de dados
          </p>
          <h1 className="mt-4 font-display text-4x1 font-semibold tracking-tight text-foreground md:text-5x1">
            Política de Privacidade e LGPD
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            A RD Solutions Assessoria Contábil respeita a privacidade dos usuários, clientes e
            demais pessoas com quem se relaciona e realiza o tratamento de dados pessoais em
            conformidade com a Lei Geral de Proteção de Dados Pessoais - Lei nº 13.709/2018.
          </p>
          <div className="mt-10 space-y-10">
            <section>
              <h2 className="font-display text-2x1 font-semibold text-foreground">
                1. Quais dados podemos coletar
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Podemos coletar dados fornecidos diretamente por você por meio do site, formulários,
                WhatsApp, e-mail ou durante a prestação dos nossos serviços.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
                <li> nome e dados de contato; </li>
                <li> telefone e endereço de e-mail; </li>
                <li> dados da empresa, como CNPJ e informações cadastrais; </li>
                <li>
                  {" "}
                  informações fornecidas para solicitações de atendimento, propostas e
                  diagnósticos;{" "}
                </li>
                <li>
                  {" "}
                  documentos e informações contábeis, fiscais, societários e trabalhistas
                  necessários à prestação dos serviços contratados.
                </li>
              </ul>
            </section>
            <section>
              <h2 className="font-display text-2x1 font-semibold text-foreground">
                2. Para que utilizamos os dados
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Os dados pessoais podem ser utilizados para finalidades relacionadas ao atendimento,
                execução dos serviços contratados, cumprimento de obrigações legais e regulatórias,
                comunicação com clientes, elaboração de propostas e melhoria dos nossos processos.
              </p>
            </section>
            <section>
              <h2 className="font-display text-2x1 font-semibold text-foreground">
                3. Compartilhamento de informações
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                A RD Solutions poderá compartilhar dados quando isso for necessário para executar os
                serviços contratados, cumprir obrigações legais ou regulatórias ou atender
                determinações de autoridades competentes.
              </p>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Também poderão ser utilizados fornecedores de tecnologia e serviços necessários ao
                funcionamento das nossas atividades, observadas medidas adequadas de proteção de
                dados.
              </p>
            </section>
            <section>
              <h2 className="font-display text-2x1 font-semibold text-foreground">
                4. Armazenamento e segurança
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Adotamos medidas administrativas e técnicas destinadas a proteger os dados pessoais
                contra acessos não autorizados, perda, alteração, divulgação ou tratamento
                inadequado.
              </p>
            </section>
            <section>
              <h2 className="font-display text-2x1 font-semibold text-foreground">
                5. Conservação dos dados
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Os dados pessoais são mantidos pelo período necessário para cumprir as finalidades
                para as quais forem coletados e pelos prazos exigidos pela legislação aplicável.
              </p>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Mesmo após o encerramento da relação com o titular, determinados dados poderão ser
                conservados quando necessário para cumprimento de obrigação legal ou regulatória ou
                para o exercício regular de direitos.
              </p>
            </section>
            <section>
              <h2 className="font-display text-2x1 font-semibold text-foreground">
                6. Direitos do titular
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Nos termos da LGPD, o titular poderá solicitar, quando aplicável:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
                <li> confirmação da existência de tratamento; </li>
                <li> acesso aos dados pessoais; </li>
                <li> correção de dados incompletos ou desatualizados; </li>
                <li>
                  {" "}
                  anonimização, bloqueio ou eliminação de dados tratados em desconformidade com a
                  legislação;{" "}
                </li>
                <li> informações sobre o compartilhamento dos seus dados; </li>
                <li> revogação do consentimento, quando aplicável; </li>
                <li>
                  {" "}
                  eliminação dos dados tratados com base no consentimento, observadas as hipóteses
                  legais de conservação.{" "}
                </li>
              </ul>
            </section>
            <section>
              <h2 className="font-display text-2x1 font-semibold text-foreground">
                7. Cookies e tecnologias do site
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                O site poderá utilizar cookies e tecnologias semelhantes necessárias ao seu
                funcionamento e, futuramente, ferramentas de edição de desempenho e acesso.
              </p>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Caso sejam utilizadas tecnologias que dependam de consentimento, o usuário poderá
                gerenciar suas preferências por meio do aviso disponibilizado no site.
              </p>
            </section>
            <section>
              <h2 className="font-display text-2x1 font-semibold text-foreground">
                8. Contato sobre privacidade
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Para exercer seus direitos ou esclarecer dúvidas relacionadas à privacidade e ao
                tratamento de dados pessoais, entre em contato pelo e-mail:
              </p>
              <a
                href="mailto:contato@rdsolutionscontabil.com.br"
                className="mt-3 inline-block font-medium text-primary underline-offset-4 hover:underline"
              >
                contato@rdsolutionscontabil.com.br
              </a>
            </section>
            <section>
              <h2 className="font-display text-2x1 font-semibold text-foreground">
                9. Atualizações desta política
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Esta Política de Privacidade poderá ser atualizada sempre que necessário para
                refletir alterações nos nossos processos, serviços ou na legislação aplicável.
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Última atualização: agosto de 2026.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
