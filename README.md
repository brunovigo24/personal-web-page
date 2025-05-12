# Personal Website

Este é o código-fonte do meu site pessoal, desenvolvido com **Next.js** e **React**, utilizando **Tailwind CSS** para estilização. O site apresenta informações sobre mim, minhas habilidades, projetos e links para redes sociais.

## 🚀 Tecnologias Utilizadas

- **Next.js**: Framework React para renderização no lado do servidor e geração de sites estáticos.
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida e responsiva.
- **Lucide Icons**: Biblioteca de ícones SVG para React.
- **Radix UI**: Componentes acessíveis e estilizados para interfaces modernas.

## 📂 Estrutura do Projeto

Abaixo está uma visão geral da estrutura de diretórios do projeto:

/app

├── layout.tsx         # Layout principal do site

├── page.tsx           # Página inicial

└── portfolio/         # Página de portfólio

/components

└── ui/                # Componentes reutilizáveis (botões, tabelas, etc.)

/styles

└── globals.css        # Estilos globais do projeto

/hooks

└── use-toast.ts       # Hook para gerenciamento de notificações

/lib

└── utils.ts           # Funções utilitárias


## 🖼️ Funcionalidades

- **Página Inicial**:
  - Exibe informações pessoais, como nome, profissão e uma breve descrição.
  - Links para redes sociais (GitHub, Instagram, LinkedIn).
  - Navegação entre abas: "Social" e "Portfólio".

- **Página de Portfólio**:
  - Apresenta projetos com descrições, tecnologias utilizadas e links para o código-fonte.

- **Design Responsivo**:
  - Totalmente adaptado para dispositivos móveis e desktops.

## 🛠️ Como Rodar o Projeto

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/personal-website.git
   cd personal-website

2. **Instale as dependências**:
   ```bash
   pnpm install

3. **Inicie o servidor de desenvolvimento**:
    ```bash
    pnpm dev

4. **Acesse no navegador**:
- O site estará disponível em `http://localhost:3000`.

## 📦 Scripts Disponíveis

- `pnpm dev`: Inicia o servidor de desenvolvimento.
- `pnpm build`: Gera a build de produção.
- `pnpm start`: Inicia o servidor em modo de produção.
- `pnpm lint`: Verifica problemas de lint no código.

## 🖌️ Estilização

O projeto utiliza **Tailwind CSS** para estilização. As cores e variáveis globais estão definidas em [`globals.css`](styles/globals.css).

---

Feito com ❤️ por [Bruno Vigo](https://www.linkedin.com/in/bruno-vigo-506026206/).
