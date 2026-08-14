import { GitBranch, Terminal, Layers } from "lucide-react";
import { C } from "../styles/theme";

export const CONCEPTS = [
  {
    id: "git-github", icon: GitBranch, color: C.blue, title: "Git ≠ GitHub",
    desc: "Git é a ferramenta que roda no seu computador e guarda o histórico de mudanças do código — funciona até sem internet. GitHub é um site que hospeda esse histórico na nuvem, permite colaborar com outras pessoas e serve como seu portfólio público.",
    extra: "Pense assim: Git é o motor, GitHub é a garagem onde todo mundo pode ver (e admirar) o carro.",
  },
  {
    id: "linguagens", icon: Terminal, color: C.green, title: "Linguagens de programação",
    desc: "É o \"idioma\" que você usa para dar instruções ao computador — cada uma tem sua sintaxe (regras de escrita). Existem para propósitos diferentes: JavaScript para web, Swift/Kotlin para mobile, Python para dados, e por aí vai.",
    extra: "Não existe \"a melhor linguagem\" — existe a linguagem certa pra cada tipo de problema.",
  },
  {
    id: "frameworks", icon: Layers, color: C.purple, title: "Frameworks",
    desc: "É um conjunto de código pronto, construído sobre uma linguagem, que resolve problemas comuns pra você não reinventar a roda. Exemplo: React e Angular são frameworks/bibliotecas de JavaScript; Django é um framework de Python.",
    extra: "Pense assim: Linguagem → Framework (opcional) → Seu projeto.",
  },
];
