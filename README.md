<p align="center"><a href="https://lira.vegacheckout.com.br" target="_blank"><img src="https://lira.vegacheckout.com.br/og-image.png" width="600"></a></p>

<h1 align="center">
Lira Design System
</h1>
<h2 align="center">Uma forma simples para documentar a forma como componentes devem ser criados no frontend!</h2>


## Sobre o Projeto

Este projeto utiliza VitePress para criar um site de documentação para o **Lira Design System**. Ele serve como um guia abrangente para a criação e utilização de componentes frontend dentro da equipe da Vega Checkout.

## Primeiros Passos

Para ter uma cópia local em execução, siga estes passos simples.

### Pré-requisitos

Certifique-se de ter Node.js e npm (ou yarn/pnpm) instalados na sua máquina.

### Instalação

1. Clone o repositório:
   ```bash
   git clone git@github.com:Cloudfox-net/vegacheckout-lira.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd vegacheckout-lira
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

### Executando Localmente

Para iniciar o servidor de desenvolvimento com hot-reloading:

```bash
npm run docs:dev
# ou yarn docs:dev
# ou pnpm docs:dev
```

Abra seu navegador e visite `http://localhost:5173` (ou a porta indicada no terminal).

### Build para Produção

Para construir o site estático para produção:

```bash
npm run docs:build
# ou yarn docs:build
# ou pnpm docs:build
```

Os arquivos estáticos gerados estarão na pasta `.vitepress/dist`.

## Estrutura do Projeto

Uma visão geral das pastas e arquivos principais:

```
.
├── .vitepress/        # Configuração e tema do VitePress
│   ├── config.ts      # Arquivo de configuração principal
│   └── theme/         # Arquivos de tema customizado (se houver)
├── components/        # Documentação e exemplos de componentes
├── foundations/       # Documentação de fundamentos de design (cores, tipografia, etc.)
├── public/            # Arquivos estáticos (logo, favicon, etc.)
├── index.md           # Página inicial
├── team.md            # Página da equipe
├── package.json       # Dependências e scripts do projeto
└── README.md          # Este arquivo
```

## Navegação

A navegação principal inclui:

*   Equipe (`/team`)
*   Componentes (`/components/status`, com sub-itens como formulários)

A barra lateral (sidebar) organiza a documentação de Componentes e Fundações.

## Contato e Redes Sociais

Encontre-nos nas redes sociais:

*   GitHub: [https://github.com/Cloudfox-net](https://github.com/Cloudfox-net)
*   LinkedIn: [https://www.linkedin.com/company/vegacheckout](https://www.linkedin.com/company/vegacheckout)
*   Instagram: [https://www.instagram.com/vegacheckout](https://www.instagram.com/vegacheckout)

---

*Feito com 💛 pela equipe da Vega Checkout*
*Copyright © 2022-present Vega Tecnologia em Pagamentos* 