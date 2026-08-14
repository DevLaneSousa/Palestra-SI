import { Sparkles, ChevronDown, AlertTriangle, Trophy } from "lucide-react";
import { C } from "../styles/theme";

export const CHALLENGES = [
  {
    id: "mudanca", icon: Sparkles, color: C.amber, title: "O mercado muda o tempo todo",
    desc: "Frameworks, linguagens e ferramentas evoluem rápido — aprender a aprender é mais importante que decorar uma tecnologia só.",
    tip: "Dica: escolha uma stack pra começar e vá fundo nela. A base (lógica, fundamentos) transfere entre tecnologias — trocar de framework depois é mais fácil do que parece.",
  },
  {
    id: "curva", icon: ChevronDown, color: C.blue, title: "Curva de aprendizado íngreme",
    desc: "No início parece que tudo é difícil ao mesmo tempo. Isso é normal e passa com prática constante.",
    tip: "Dica: quebre o aprendizado em pedaços pequenos. Ninguém entende tudo de uma vez — nem quem já está no mercado há anos.",
  },
  {
    id: "impostor", icon: AlertTriangle, color: C.pink, title: "Síndrome do impostor",
    desc: "Sentir que \"não sabe nada\" mesmo estudando bastante é extremamente comum, até entre profissionais seniores.",
    tip: "Dica: guarde seus pequenos avanços. Olhar pra trás e ver o quanto você já evoluiu é o melhor antídoto pra essa sensação.",
  },
  {
    id: "concorrencia", icon: Trophy, color: C.green, title: "Concorrência alta",
    desc: "O mercado pede portfólio e projetos reais mesmo pra vagas de estágio — por isso começar cedo importa tanto.",
    tip: "Dica: um projeto simples, terminado e publicado no GitHub vale mais que cinco projetos ambiciosos que nunca saíram do papel.",
  },
];
