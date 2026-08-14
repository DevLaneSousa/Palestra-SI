import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Nome do repositório — usado como "base" para o site funcionar
// corretamente quando hospedado em https://<usuario>.github.io/<repo>/
export default defineConfig({
  plugins: [react()],
  base: "/Palestra-SI/",
});
