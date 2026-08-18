import { Trophy, Users, CalendarCheck, Network, Dumbbell } from "lucide-react";
import { C } from "../styles/theme";

export const COLLEGE_TIPS = [
  {
    id: "hackathons", icon: Trophy, color: C.amber, title: "Hackatons",
    desc: "Competições intensas de poucos dias onde você cria um projeto do zero em equipe. Colocam a mão na massa, geram networking e certificados que pesam muito no currículo.",
  },
  {
    id: "monitorias", icon: Users, color: C.blue, title: "Monitorias",
    desc: "Ajudar outros alunos em uma matéria que você já domina reforça seu próprio aprendizado, soma carga horária complementar e mostra iniciativa pros professores.",
  },
  {
    id: "eventos", icon: CalendarCheck, color: C.green, title: "Eventos e cursos",
    desc: "Palestras, congressos, cursos extras e workshops. Cada certificado conta pra carga horária obrigatória e mostra que você vai além da grade curricular.",
  },
  {
    id: "liga", icon: Network, color: C.purple, title: "Liga acadêmica",
    desc: "Grupo de estudos e projetos organizado pelos próprios alunos, fora da grade curricular. Ótimo lugar pra praticar o que é visto em sala com gente no mesmo momento que você.",
  },
  {
    id: "atletica", icon: Dumbbell, color: C.pink, title: "Atlética",
    desc: "Vida universitária não é só estudo. A atlética cria vínculo com a turma, equilibra a rotina e é onde boa parte das amizades (e indicações de vaga) nascem.",
  },
];
