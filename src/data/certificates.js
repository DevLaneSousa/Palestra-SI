import { C } from "../styles/theme";

const BASE = "/certificados";
const img = (name) => `${BASE}/${name}.svg`;

export const certifications = [
  { id: 1, title: "JavaScript Completo", issuer: "Udemy", hours: "78h", category: "dev", image1: img("curso-java-completo-1"), image2: img("curso-java-completo-2") },
  { id: 2, title: "Formação NestJS", issuer: "Udemy", hours: "6.5h", category: "dev", image1: img("formacao-nestJs-1"), image2: img("formacao-nestJs-2") },
  { id: 3, title: "Monitoria Acadêmica", issuer: "UNEX", hours: "—", category: "academic", image1: img("monitoria-1"), image2: img("monitoria-2") },
  { id: 4, title: "Palestra de TI", issuer: "UNEX", hours: "—", category: "talk", image1: img("palestra-ti-1"), image2: img("palestra-ti-2") },
  { id: 5, title: "Estande de Robótica", issuer: "Feira de Ciências", hours: "—", category: "academic", image1: img("stand-robotica"), image2: img("stand-robotica-2") },
  { id: 6, title: "Consumindo API REST", issuer: "Udemy", hours: "—", category: "dev", image1: img("consumindo-api-1"), image2: img("consumindo-api-2") },
  { id: 7, title: "Consumindo API (NestJS)", issuer: "Udemy", hours: "—", category: "dev", image1: img("consumindo-api-nest-1"), image2: img("consumindo-api-nest-2") },
  { id: 8, title: "Criando uma API", issuer: "Udemy", hours: "—", category: "dev", image1: img("curso-criando-api-1"), image2: img("curso-criando-api-2") },
  { id: 9, title: "Vue.js 3 + Vite + Firebase", issuer: "Udemy", hours: "65.5h", category: "dev", image1: img("curso-vuejs-1"), image2: img("curso-vuejs-2") },
  { id: 10, title: "Introdução ao Tailwind CSS", issuer: "Udemy", hours: "—", category: "dev", image1: img("intro-tailwind-1"), image2: img("intro-tailwind-2") },
  { id: 11, title: "Figma ao Código (Avançado)", issuer: "Udemy", hours: "94.5h", category: "design", image1: img("Curso-FIGMA-3"), image2: img("Curso-FIGMA-3-1") },
  { id: 12, title: "Hackonquista - PMVC (1º Lugar)", issuer: "Prefeitura Municipal", hours: "35h", category: "academic", image1: img("Hackaton-PMVC"), image2: img("Hackaton-PMVC-1") },
  { id: 13, title: "Oficina de Figma — 1ª Edição", issuer: "UNEX", hours: "4h", category: "design", image1: img("Oficina-figma-1"), image2: img("Oficina-figma-1-1") },
  { id: 14, title: "Oficina de Figma — 2ª Edição", issuer: "UNEX", hours: "4h", category: "design", image1: img("Oficina-figma-2"), image2: img("Oficina-figma-2-1") },
  { id: 15, title: "Palestrante Convidada", issuer: "UNEX", hours: "—", category: "talk", image1: img("Palestra-curso"), image2: img("Palestra-curso-1") },
  { id: 16, title: "Introdução à Inteligência Artificial", issuer: "UNEX", hours: "4h", category: "academic", image1: img("Curso-introducao-ia"), image2: img("Curso-introducao-ia-1") },
  { id: 17, title: "Modelagem Computacional", issuer: "IFBA", hours: "—", category: "academic", image1: img("Curso-modelagem-computacional"), image2: img("Curso-modelagem-computacional-1") },
  { id: 18, title: "Oracle Database", issuer: "Udemy", hours: "—", category: "dev", image1: img("Curso-oracle"), image2: img("Curso-oracle-1") },
  { id: 19, title: "Tendências em TI", issuer: "UNEX", hours: "—", category: "talk", image1: img("Curso-tendencias-ti"), image2: img("Curso-tendencias-ti-1") },
  { id: 20, title: "Consumo e Construção de Web APIs", issuer: "Udemy", hours: "—", category: "dev", image1: img("Curso-web-api"), image2: img("Curso-web-api-1") },
];

const categoryColors = {
  dev: C.green,
  design: C.blue,
  academic: C.purple,
  talk: C.amber,
};

export const CERTIFICATES = certifications.map((cert) => ({
  ...cert,
  institution: cert.issuer,
  date: "—",
  image: cert.image1,
  color: categoryColors[cert.category] ?? C.green,
}));
