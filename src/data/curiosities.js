import { C } from "../styles/theme";

export const CURIOSITIES = [
  {
    id: "bug", emoji: "🐛", color: C.green, title: "Por que \"bug\"?",
    desc: "Em 1947, o computador Harvard Mark II parou de funcionar. A equipe de Grace Hopper investigou e encontrou uma mariposa presa em um dos relés — literalmente um \"bug\" (inseto) causando o defeito.",
    extra: "Colaram o inseto no caderno de registros com a nota \"first actual case of bug being found\", e o termo \"debugar\" pegou no mundo da computação para sempre.",
  },
  {
    id: "git", emoji: "🐙", color: C.blue, title: "Por que \"Git\"?",
    desc: "Linus Torvalds, criador do Linux, também criou o Git em 2005 — e batizou com humor autodepreciativo.",
    extra: "\"Git\" é gíria britânica para uma pessoa chata ou desagradável. Ele mesmo brincou que costuma nomear projetos assim.",
  },
  {
    id: "python", emoji: "🐍", color: C.amber, title: "Python e a cobra",
    desc: "A linguagem Python não foi batizada por causa da cobra.",
    extra: "Seu criador, Guido van Rossum, era fã do grupo de comédia britânico Monty Python's Flying Circus — daí o nome.",
  },
  {
    id: "java", emoji: "☕", color: C.pink, title: "Java e o café",
    desc: "A linguagem Java se chamava \"Oak\" originalmente.",
    extra: "Trocaram o nome pra Java — e dizem que o motivo foi a quantidade de café que a equipe bebia durante o desenvolvimento.",
  },
  {
    id: "ada", emoji: "👩‍💻", color: C.purple, title: "A primeira programadora",
    desc: "Ada Lovelace escreveu o primeiro algoritmo da história em 1843.",
    extra: "Décadas antes de existir um computador de verdade para executá-lo — ela imaginou a lógica antes mesmo da máquina existir.",
  },
];
