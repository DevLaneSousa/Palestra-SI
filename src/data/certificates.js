import { C } from "../styles/theme";

const BASE = "/certificados";
const img = (name) => `${BASE}/${name}.svg`;

export const certifications = [
  { id: 1, title: "JavaScript Completo", issuer: "Udemy", hours: "78h", category: "dev", image1: img("curso-java-completo-1") },
  { id: 2, title: "Formação NestJS", issuer: "Udemy", hours: "6.5h", category: "dev", image1: img("formacao-nestJs-1") },
  { id: 3, title: "Monitoria Acadêmica", issuer: "UNEX", hours: "—", category: "academic", image1: img("monitoria-1") },
  { id: 4, title: "Palestra de TI", issuer: "UNEX", hours: "—", category: "talk", image1: img("palestra-ti-1") },
  { id: 5, title: "Estande de Robótica", issuer: "Feira de Ciências", hours: "—", category: "academic", image1: img("stand-robotica") },
  { id: 6, title: "Consumindo API REST", issuer: "Udemy", hours: "—", category: "dev", image1: img("consumindo-api-1") },
  { id: 7, title: "Consumindo API (NestJS)", issuer: "Udemy", hours: "—", category: "dev", image1: img("consumindo-api-nest-1") },
  { id: 8, title: "Criando uma API", issuer: "Udemy", hours: "—", category: "dev", image1: img("curso-criando-api-1") },
  { id: 9, title: "Vue.js 3 + Vite + Firebase", issuer: "Udemy", hours: "65.5h", category: "dev", image1: img("curso-vuejs-1") },
  { id: 10, title: "Introdução ao Tailwind CSS", issuer: "Udemy", hours: "—", category: "dev", image1: img("intro-tailwind-1") },
  { id: 11, title: "Figma ao Código (Avançado)", issuer: "Udemy", hours: "94.5h", category: "design", image1: img("Curso-FIGMA-3") },
  { id: 12, title: "Hackonquista - PMVC (1º Lugar)", issuer: "Prefeitura Municipal", hours: "35h", category: "academic", image1: img("Hackaton-PMVC") },
  { id: 13, title: "Oficina de Figma — 1ª Edição", issuer: "UNEX", hours: "4h", category: "design", image1: img("Oficina-figma-1") },
  { id: 14, title: "Oficina de Figma — 2ª Edição", issuer: "UNEX", hours: "4h", category: "design", image1: img("Oficina-figma-2") },
  { id: 15, title: "Palestrante Convidada", issuer: "UNEX", hours: "—", category: "talk", image1: img("Palestra-curso") },
  { id: 16, title: "Introdução à Inteligência Artificial", issuer: "UNEX", hours: "4h", category: "academic", image1: img("Curso-introducao-ia") },
  { id: 17, title: "Modelagem Computacional", issuer: "IFBA", hours: "—", category: "academic", image1: img("Curso-modelagem-computacional") },
  { id: 18, title: "Oracle Database", issuer: "Udemy", hours: "—", category: "dev", image1: img("Curso-oracle") },
  { id: 19, title: "Tendências em TI", issuer: "UNEX", hours: "—", category: "talk", image1: img("Curso-tendencias-ti") },
  { id: 20, title: "Consumo e Construção de Web APIs", issuer: "Udemy", hours: "—", category: "dev", image1: img("Curso-web-api") },
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
