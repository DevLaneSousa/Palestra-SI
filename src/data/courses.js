import { C } from "../styles/theme";

export const COURSES = [
  {
    id: "si", name: "Sistemas de\nInformação", color: C.green, highlight: true,
    short: "Equilíbrio entre programação e gestão.",
    desc: "Prepara você pra atuar tanto no desenvolvimento quanto em análise, projetos e liderança técnica — a ponte entre a tecnologia e o negócio.",
    extra: "Disciplinas típicas: Programação, Banco de Dados, Engenharia de Software, Gestão de Projetos, Empreendedorismo e Análise de Negócios.",
  },
  {
    id: "cc", name: "Ciência da\nComputação", color: C.blue,
    short: "Mais teórico e matemático.",
    desc: "Foco em algoritmos, estruturas de dados e fundamentos — ótimo para pesquisa e áreas muito técnicas.",
    extra: "Disciplinas típicas: Cálculo avançado, Teoria da Computação, Compiladores, Inteligência Artificial.",
  },
  {
    id: "es", name: "Engenharia de\nSoftware", color: C.purple,
    short: "Processos de engenharia aplicados a software.",
    desc: "Arquitetura, qualidade e gestão de sistemas grandes e complexos, com forte disciplina de projeto.",
    extra: "Disciplinas típicas: Arquitetura de Software, Qualidade de Software, Gestão de Processos, Testes.",
  },
  {
    id: "ads", name: "Análise e Desenv.\nde Sistemas (ADS)", color: C.amber,
    short: "Tecnólogo, curto e prático.",
    desc: "2 anos, direto pro mercado de desenvolvimento, com menos disciplinas de gestão e humanas.",
    extra: "Formação mais enxuta — ótima se o foco é entrar rápido no mercado como desenvolvedor(a).",
  },
];
