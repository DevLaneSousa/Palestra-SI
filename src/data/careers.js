import {
  Code2, Server, Smartphone, BarChart3, Cloud, TestTube2, Palette,
  ShieldCheck, ClipboardList,
} from "lucide-react";
import { C } from "../styles/theme";

export const CAREERS = [
  {
    id: "frontend", icon: Code2, color: C.blue, name: "Frontend",
    short: "Interfaces que o usuário vê e interage",
    desc: "Constrói o que o usuário vê e interage: interfaces, telas e a experiência visual de sites e sistemas web.",
    start: ["HTML, CSS e JavaScript bem sólidos", "Um framework: React, Vue ou Angular", "Noções de UX/UI e responsividade", "Git e deploy de projetos simples"],
  },
  {
    id: "backend", icon: Server, color: C.green, name: "Backend",
    short: "A lógica por trás da aplicação",
    desc: "Constrói a lógica, as regras de negócio e a comunicação com banco de dados por trás da aplicação.",
    start: ["Uma linguagem: Java, Python, Node ou C#", "Banco de dados SQL (e NoSQL depois)", "Lógica de APIs REST", "Fundamentos de arquitetura de sistemas"],
  },
  {
    id: "mobile", icon: Smartphone, color: C.purple, name: "Mobile",
    short: "Apps para Android e iOS",
    desc: "Desenvolve aplicativos para Android e iOS, nativos ou multiplataforma.",
    start: ["Kotlin/Swift (nativo) ou Flutter/React Native", "Lógica de programação bem treinada", "Consumo de APIs", "Publicação em lojas de aplicativos"],
  },
  {
    id: "dados", icon: BarChart3, color: C.amber, name: "Dados",
    short: "Da planilha ao machine learning",
    desc: "Coleta, organiza e extrai valor de dados — de dashboards a modelos de machine learning. Inclui também automatizar planilhas (Excel/Sheets), o que economiza horas de trabalho manual nas empresas e é uma porta de entrada muito procurada no mercado.",
    start: ["SQL muito bem treinado", "Python com pandas/numpy", "Automação de planilhas (macros, Apps Script, Python)", "Estatística básica", "Ferramentas de BI (Power BI, Looker)"],
  },
  {
    id: "devops", icon: Cloud, color: C.blue, name: "DevOps / Cloud",
    short: "Infraestrutura e automação",
    desc: "Cuida da infraestrutura, automação de deploys e ambientes em nuvem que sustentam os sistemas no ar.",
    start: ["Linux e linha de comando", "Docker e containers", "Uma cloud: AWS, Azure ou GCP", "CI/CD (integração e entrega contínua)"],
  },
  {
    id: "qa", icon: TestTube2, color: C.green, name: "QA / Testes",
    short: "Garantindo que tudo funcione",
    desc: "Garante que o sistema funciona corretamente antes de chegar ao usuário final, manual ou automatizado.",
    start: ["Técnicas de teste (caso de uso, cobertura)", "Automação: Selenium, Cypress, Playwright", "Noções de API testing", "Pensamento crítico e atenção a detalhes"],
  },
  {
    id: "uxui", icon: Palette, color: C.pink, name: "UX/UI Design",
    short: "A experiência antes da tela",
    desc: "Projeta a experiência e a interface das soluções, entendendo o usuário antes de desenhar qualquer tela.",
    start: ["Figma (ferramenta padrão do mercado)", "Fundamentos de UX (pesquisa, fluxo, teste)", "Princípios de hierarquia visual", "Portfólio com estudos de caso"],
  },
  {
    id: "seguranca", icon: ShieldCheck, color: C.amber, name: "Segurança",
    short: "Protegendo sistemas e dados",
    desc: "Protege sistemas, dados e redes contra ataques e vulnerabilidades — área em forte crescimento.",
    start: ["Redes de computadores bem sólidas", "Fundamentos de sistemas operacionais", "Certificações (ex: Security+)", "Prática em ambientes controlados (CTFs)"],
  },
  {
    id: "gestao", icon: ClipboardList, color: C.blue, name: "Gestão de Projetos",
    short: "Organizando times e entregas",
    desc: "Planeja, organiza e conduz times e entregas de tecnologia — trilha muito favorecida pela grade de SI.",
    start: ["Metodologias ágeis (Scrum, Kanban)", "Ferramentas: Jira, Trello, Notion", "Comunicação e liderança", "Entendimento técnico para dialogar com o time"],
  },
];
