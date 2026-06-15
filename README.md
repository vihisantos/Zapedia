# Zapedia

<p align="center">
  <strong>Sua Superpotencia de Vendas no WhatsApp.</strong>
  <br>
  Plataforma premium de automacao e gestao de atendimento
  <br>
  para transformar conversas em resultados reais.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React%2019-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/Tailwind%20CSS%20v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS v4">
  <img src="https://img.shields.io/badge/Framer%20Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion">
</p>

---

## Sobre

**Zapedia** e uma landing page SaaS premium para uma plataforma de automacao de WhatsApp. Construida com React 19 e Tailwind CSS v4, focada em conversao de visitantes em leads com design de alta confianca, animacoes fluidas e experiencia premium.

---

## Tech Stack

### Frontend

| Tecnologia | Proposito |
|---|---|
| **React 19** | Biblioteca de interface |
| **TypeScript** | Tipagem estatica |
| **Vite 7** | Build tool e dev server |
| **Tailwind CSS v4** | Estilizacao utilitaria com variaveis nativas |
| **Framer Motion** | Animacoes de alta fidelidade |
| **Lucide React** | Iconografia |
| **Radix UI Slot** | Primitivo de composicao |
| **class-variance-authority + clsx + tailwind-merge** | Utilitarios de classe |

### Infraestrutura

| Tecnologia | Proposito |
|---|---|
| **GitHub Pages** | Deploy estatico |
| **ESLint** | Lint e padronizacao |
| **PostCSS + Autoprefixer** | Processamento CSS |

---

## Funcionalidades da Landing Page

- **Hero Section** — Apresentacao com gradientes e CTA de alta conversao
- **Recursos** — Cards de funcionalidades com hover animations
- **Pricing** — Tabela de precos com destaque ao plano recomendado
- **Social Proof** — Depoimentos e logos de clientes
- **FAQ** — Acordeao de perguntas frequentes
- **Footer** — Links institucionais e redes sociais
- **Design Responsivo** — Experiencia perfeita em mobile e desktop
- **Glassmorphism** — Efeitos de vidro com backdrop-blur

---

## Estrutura do Projeto

```
Zapedia/
  src/
    components/
      layout/            Componentes globais (Navbar, Footer)
      ui/                Primitivos reutilizaveis (Button, Container)
    sections/            Secoes da pagina (Hero, Pricing, FAQ)
    layouts/             Wrappers de pagina
    lib/                 Utilitarios (cn, formatacao)
    assets/              Imagens e recursos
    App.tsx              Ponto de entrada principal
    main.tsx             Renderizacao
    index.css            Tema Tailwind v4 com @theme
  public/                Assets estaticos
  dist/                  Build de producao
```

---

## Design System

| Token | Valor | Uso |
|---|---|---|
| **brand-500** | `#22c55e` | Verde primario Zapedia |
| **brand-700** | `#15803d` | Verde hover/ativo |
| **accent-500** | `#8b5cf6` | Roxo para detalhes e destaque |
| **Fundo Claro** | `slate-50` | Background principal |
| **Fundo Escuro** | `slate-900` | Footer e secoes escuras |

Tipografia: Inter (Google Fonts)

---

<p align="center">
  <br>
  <sub>Desenvolvido por <a href="https://capybaraholding.com.br" target="_blank"><strong>Capybara Holding</strong></a></sub>
  <br>
  <sub>&copy; 2026 Zapedia. Todos os direitos reservados.</sub>
</p>
