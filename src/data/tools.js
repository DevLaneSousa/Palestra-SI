import { GitBranch, Code2, Terminal, Wrench, Package, Server, ClipboardList, MessageSquare } from "lucide-react";

export const TOOLS = [
  { id: "git", icon: GitBranch, title: "Git & GitHub", desc: "Controle de versão — a base de tudo.", why: "Sem isso, colaborar em qualquer projeto real é praticamente impossível." },
  { id: "vscode", icon: Code2, title: "VS Code", desc: "Editor de código mais usado do mercado.", why: "Extensível, leve e gratuito — praticamente padrão em qualquer vaga." },
  { id: "terminal", icon: Terminal, title: "Terminal", desc: "Linha de comando: navegação e scripts.", why: "Muita coisa no dia a dia dev só é possível (ou mais rápida) via terminal." },
  { id: "postman", icon: Wrench, title: "Postman / Insomnia", desc: "Testar e consumir APIs.", why: "Essencial pra entender e depurar a comunicação entre sistemas." },
  { id: "docker", icon: Package, title: "Docker", desc: "Containers para rodar ambientes isolados.", why: "Resolve o clássico \"na minha máquina funciona\" de vez." },
  { id: "sql", icon: Server, title: "SQL (MySQL/PostgreSQL)", desc: "Consultar e manipular banco de dados.", why: "Praticamente toda aplicação do mundo real guarda dados em algum banco." },
  { id: "trello", icon: ClipboardList, title: "Trello / Notion", desc: "Organização pessoal e de projetos.", why: "Ajuda a não perder o fio da meada entre faculdade, projetos e estudos." },
  { id: "discord", icon: MessageSquare, title: "Discord / Comunidades", desc: "Aprender e trocar com outros devs.", why: "Boa parte do aprendizado real acontece trocando figurinha com outras pessoas da área." },
];
