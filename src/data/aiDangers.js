import { Code2, ShieldAlert, AlertTriangle, BatteryLow } from "lucide-react";
import { C } from "../styles/theme";

export const AI_DANGERS = [
  {
    id: "sem-entendimento", icon: Code2, color: C.amber, title: "Códigos sem entendimento",
    desc: "Copiar e colar código pronto sem entender o que ele faz resolve o problema de hoje e cria o problema de amanhã — você não sabe debugar, nem explicar em uma entrevista.",
  },
  {
    id: "seguranca", icon: ShieldAlert, color: C.blue, title: "Segurança e vazamento de dados",
    desc: "Colar código, dados de projetos reais ou informações sensíveis em ferramentas de IA pode expor credenciais e informações confidenciais da empresa ou da faculdade.",
  },
  {
    id: "informacoes-erradas", icon: AlertTriangle, color: C.red, title: "Geração de informações erradas",
    desc: "IA erra — e erra com muita confiança. Aceitar uma resposta sem checar a fonte pode te fazer levar um erro conceitual pra prova, pro projeto ou pro mercado.",
  },
  {
    id: "dependencia", icon: BatteryLow, color: C.purple, title: "Dependência excessiva da IA",
    desc: "Terceirizar todo o raciocínio pra IA atrofia justamente a habilidade que o mercado mais valoriza: resolver problema sozinho. Use como apoio, não como muleta.",
  },
];
