# RD Solutions — Site Institucional e Sistema Web

Este é o projeto que estou desenvolvendo para a **RD Solutions Assessoria Contábil**, empresa onde trabalho. A ideia começou com a criação de um novo site institucional para apresentar melhor o escritório e seus serviços, mas o projeto foi crescendo conforme identifiquei outras necessidades que poderiam ser resolvidas com tecnologia.

Além da parte institucional, fui adicionando ferramentas contábeis, formulários para captação de contatos e uma área administrativa para acompanhar os leads recebidos pelo site.

> **Status:** projeto em desenvolvimento. Algumas funcionalidades ainda estão sendo implementadas e podem mudar até a versão final.

## Sobre o projeto

O objetivo é reunir em uma única aplicação a presença digital da RD Solutions e algumas funcionalidades que apoiem tanto quem acessa o site quanto a rotina interna do escritório.

Para os visitantes, o site apresenta os serviços da empresa, canais de atendimento e ferramentas orientativas relacionadas à rotina contábil e tributária. Na parte interna, estou desenvolvendo um fluxo para registrar e organizar os contatos recebidos pelo site.

Esse projeto também tem sido uma oportunidade de aplicar conhecimentos da graduação em um problema real, passando por desenvolvimento front-end e back-end, integração com banco de dados, experiência do usuário e necessidades do negócio.

## O que já foi desenvolvido

- Site institucional responsivo
- Apresentação dos serviços e diferenciais da RD Solutions
- Ferramentas e simuladores contábeis
- Check-up contábil
- Assistente fiscal
- Simulador de custo de contratação
- Planejamento de retirada dos sócios
- Check-up MEI
- Formulários para captação de contatos
- Integração dos leads com banco de dados
- Login e painel administrativo para acompanhamento dos leads
- Busca, filtros, status e observações no painel de leads
- Registro de origem e parâmetros UTM dos contatos
- Integração com WhatsApp
- Área do Cliente em desenvolvimento
- Política de Privacidade e recursos relacionados à LGPD
- Tema claro e escuro
- SEO e metadados para compartilhamento

## Fluxo de captação de leads

Uma das evoluções do projeto foi conectar os formulários do site a um fluxo interno de acompanhamento.

```text
Visitante
   ↓
Formulário do site
   ↓
Validação dos dados
   ↓
Supabase
   ↓
Banco de leads
   ↓
Painel administrativo
```

No painel, os contatos podem ser pesquisados e organizados por status, além de manter informações como empresa, serviço de interesse, origem do contato e observações.

## Tecnologias utilizadas

- React
- TypeScript
- Supabase
- TanStack Start
- TanStack Router
- TanStack Query
- Vite
- Tailwind CSS
- Radix UI
- Lucide React
- Nitro
- Zod

## Estrutura do projeto

```text
src/
├── assets/
├── components/
│   ├── site/
│   └── ui/
├── lib/
├── routes/
└── styles.css

public/
├── favicon.png
├── logo-rd.png
└── robots.txt
```

## Executando o projeto localmente

Clone o repositório:

```bash
git clone https://github.com/Gabrielcardoso529/Site-RD-Solutions.git
```

Entre na pasta:

```bash
cd Site-RD-Solutions
```

Instale as dependências:

```bash
npm install
```

Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

Para gerar a versão de produção:

```bash
npm run build
```

Para visualizar o build localmente:

```bash
npm run preview
```

A aplicação utiliza variáveis de ambiente para serviços externos. Os valores reais dessas configurações não fazem parte do repositório.

## Status do projeto

O projeto ainda está em desenvolvimento. Estou evoluindo as funcionalidades, revisando a experiência do usuário e preparando a aplicação para a versão final.

Por isso, a estrutura e algumas funcionalidades apresentadas neste repositório ainda podem passar por alterações.

## Autor

**Gabriel Cardoso**

Estudante de Engenharia de Software na FIAP.

GitHub: `Gabrielcardoso529`

---

Projeto desenvolvido para a **RD Solutions Assessoria Contábil**.
