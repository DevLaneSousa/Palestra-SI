// Resolve caminhos de arquivos em /public considerando o "base" configurado
// no vite.config.js (necessário porque o site é hospedado em um subcaminho
// no GitHub Pages: https://usuario.github.io/Palestra-SI/).
//
// Uso: assetUrl("projects/investidor-1.jpg") -> "/Palestra-SI/projects/investidor-1.jpg"
export function assetUrl(path) {
  return `${import.meta.env.BASE_URL}${path}`;
}
