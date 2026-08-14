# Sistemas de Informação — Palestra para Calouros

Site interativo em React + Vite feito para a palestra de boas-vindas do curso de Sistemas de Informação. Cards clicáveis, animações, easter eggs e um besouro que sai voando quando você menos espera. 🪲

## Rodando localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

---

## Arquitetura do projeto

O código é organizado por responsabilidade, não tudo em um arquivo só. A ideia é que qualquer pessoa consiga achar o que precisa mexer em segundos, só olhando os nomes das pastas.

```
src/
├── App.jsx                  # Componente raiz — só orquestra estado e compõe as seções
├── main.jsx                 # Ponto de entrada do React
├── index.css                # Import do Tailwind + estilos globais
│
├── styles/
│   ├── theme.js              # Paleta de cores e fontes (fonte única de verdade)
│   └── globals.css           # Keyframes de animação e utilitários CSS
│
├── data/                     # Todo o CONTEÚDO do site, separado da apresentação
│   ├── about.js               # Bio de quem está falando
│   ├── projects.js            # Projetos do portfólio
│   ├── courses.js             # Comparação entre cursos
│   ├── challenges.js          # Dificuldades da área
│   ├── careers.js             # Trilhas de carreira
│   ├── certificates.js        # Certificados (seção em carrossel)
│   ├── concepts.js            # Git/GitHub, linguagens, frameworks
│   ├── devEnv.js              # Ambiente de desenvolvimento
│   ├── tools.js                # Ferramentas essenciais
│   ├── glossary.js            # Glossário de termos
│   ├── curiosities.js         # Curiosidades da programação
│   └── nav.js                 # Itens do menu de navegação
│
├── hooks/                    # Lógica reutilizável, sem JSX
│   ├── useReveal.js            # Anima elementos ao entrar na viewport
│   ├── useScrollProgress.js    # Progresso de scroll (barra do topo)
│   ├── useTypewriter.js        # Efeito de máquina de escrever (Hero)
│   ├── usePagination.js        # Paginação genérica (projetos)
│   ├── useKonamiCode.js        # Detecta o Konami Code
│   └── useEasterEggs.js        # Consolida confete, besouro e toast
│
├── utils/
│   └── assetUrl.js             # Resolve caminhos de imagens considerando o base path
│
└── components/
    ├── common/                # Peças pequenas e reutilizáveis em várias seções
    │   ├── Reveal.jsx           # Wrapper de animação de entrada
    │   ├── Section.jsx          # Wrapper padrão de seção (fundo, largura, id)
    │   ├── SectionHeader.jsx    # Eyebrow + título + subtítulo
    │   ├── Eyebrow.jsx          # Rótulo pequeno estilo comentário de código
    │   ├── TrafficLights.jsx    # Bolinhas de janela (estética terminal)
    │   ├── Modal.jsx            # Modal genérico usado por TODAS as seções clicáveis
    │   ├── Confetti.jsx         # Efeito de confete
    │   ├── FlyingBug.jsx        # Easter egg do besouro voando
    │   ├── Toast.jsx            # Notificação flutuante
    │   └── BootOverlay.jsx      # Tela de "boot" ao carregar a página
    │
    ├── layout/                # Estrutura fixa da página
    │   ├── Nav.jsx               # Menu fixo + barra de progresso
    │   └── Footer.jsx            # Rodapé com CTA final
    │
    ├── cards/
    │   ├── ProjectCard.jsx      # Card de projeto com imagem de capa
    │   └── CertificateCard.jsx  # Card de certificado (usado no carrossel)
    │
    └── sections/              # Uma seção da página = um arquivo
        ├── Hero.jsx
        ├── AboutSection.jsx
        ├── ProjectsSection.jsx
        ├── CourseSection.jsx
        ├── ChallengesSection.jsx
        ├── CareersSection.jsx
        ├── CertificatesSection.jsx
        ├── ConceptsSection.jsx   # Compõe os 3 blocos abaixo
        │   └── concepts/
        │       ├── ConceptsGrid.jsx
        │       ├── DevEnvGrid.jsx
        │       └── ToolsGrid.jsx
        ├── GlossarySection.jsx
        └── CuriositiesSection.jsx
```

**Por que essa separação?**
- **`data/`** guarda só conteúdo (textos, arrays). Quer mudar o texto de uma carreira ou adicionar um projeto novo? Mexe só ali, nunca no componente visual.
- **`hooks/`** guarda lógica sem interface. Cada hook faz uma coisa só (Single Responsibility) e pode ser testado isoladamente.
- **`components/common/`** são as peças de Lego reaproveitadas em quase todas as seções — em especial o `Modal.jsx`, que é genérico o suficiente pra servir carreiras, projetos, glossário e curiosidades ao mesmo tempo.
- **`components/sections/`** cada seção da página é seu próprio arquivo, então `App.jsx` fica curto e só mostra a "ordem" das seções — dá pra entender o site inteiro lendo esse um arquivo.

---

## Publicando no seu repositório (GitHub Pages)

Este projeto já vem com um workflow do GitHub Actions (`.github/workflows/deploy.yml`) que builda e publica o site automaticamente a cada push na branch `main`.

**1. Dentro da pasta do projeto, rode:**

```bash
git init
git add .
git commit -m "primeira versão do site da palestra"
git branch -M main
git remote add origin https://github.com/DevLaneSousa/Palestra-SI.git
git push -u origin main
```

> Se o GitHub recusar o push com um erro de "remote contains work that you do not have" (ou seja, o repositório já tem algum commit, tipo um README criado pela interface do GitHub), rode `git pull origin main --allow-unrelated-histories` antes do `push`, resolva qualquer conflito indicado e tente de novo.

**2. Ativar o GitHub Pages no repositório:**

1. Acesse `https://github.com/DevLaneSousa/Palestra-SI`
2. Vá em **Settings → Pages**
3. Em **Source**, selecione **GitHub Actions**
4. Pronto — a cada push na `main`, o site é rebuildado e publicado sozinho

Depois do primeiro deploy (leva 1–2 minutos — acompanhe em **Actions**, na aba do repositório), o site fica disponível em:

```
https://devlanesousa.github.io/Palestra-SI/
```

---

## Trocando as imagens dos projetos

As capas em `public/projects/` já são screenshots reais dos seus projetos. Pra trocar ou adicionar um projeto novo:

1. Salve as imagens em `public/projects/` (recomendo até 900px de largura pra manter o repositório leve)
2. Adicione ou edite uma entrada no array `PROJECTS`, em `src/data/projects.js` — é só copiar o formato de um item existente
3. Pronto, o card e o modal já aparecem automaticamente na próxima seção de projetos

## Easter eggs escondidos

- Clique no card **"Por que bug?"** (seção de curiosidades) — um besouro sai voando pela tela 🪲
- Abra o console do navegador (F12) — tem uma mensagem escondida lá
- Digite o Konami Code em qualquer lugar da página: `↑ ↑ ↓ ↓ ← → ← → B A`
- O botão final "Vamos nessa!" solta confete 🎉

## Stack

- React 18 + Vite
- Tailwind CSS
- lucide-react (ícones)
- Sem dependências externas de animação — tudo em CSS puro
