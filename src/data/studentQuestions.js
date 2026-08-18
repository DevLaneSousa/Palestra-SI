import { C } from "../styles/theme";

// Perguntas sugeridas pra abrir espaço de dúvidas com a turma no final da
// apresentação. Cada aluno pode escolher um número pra perguntar, se quiser.
export const STUDENT_QUESTIONS = [
  {
    id: "curso", title: "Sobre o curso", color: C.blue,
    questions: [
      "Qual a diferença entre Sistemas de Informação, Ciência da Computação e Engenharia de Software?",
      "Quais são as principais matérias do curso e quais são mais desafiadoras?",
      "Como é a carga horária e o ritmo de estudos?",
      "O curso tem mais teoria ou prática?",
      "Como funcionam os estágios e projetos dentro do curso?",
      "Qual a importância da matemática e da lógica de programação?",
      "Quais linguagens de programação são mais usadas no curso?",
      "Preciso saber programar antes de começar o curso?",
      "Além das disciplinas da faculdade, quais cursos extras valem a pena fazer?",
    ],
  },
  {
    id: "carreira", title: "Sobre desenvolvimento de carreira", color: C.green,
    questions: [
      "O que mais importa para o mercado: diploma, certificações ou projetos práticos?",
      "Como posso montar um bom portfólio desde o início do curso?",
      "Como funciona o networking na área de TI?",
      "Como se destacar no mercado sem experiência prévia?",
      "Como identificar qual área a gente se adequa mais para seguir?",
      "Além da programação, quais outras habilidades um profissional de SI deve desenvolver?",
      "Quais tecnologias devo focar para o mercado de trabalho?",
      "Quais livros ou recursos você recomenda para aprender mais rápido?",
      "Qual o perigo do ChatGPT na nossa área?",
    ],
  },
];
