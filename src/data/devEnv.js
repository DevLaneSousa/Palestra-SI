import { Code2, Terminal, FolderGit2, Package, KeyRound, Cloud } from "lucide-react";
import { C } from "../styles/theme";

export const DEV_ENV = [
  { id: "editor", icon: Code2, color: C.blue, title: "Editor / IDE", desc: "Onde você escreve o código (ex: VS Code). Tem autocompletar, destaque de sintaxe e atalhos que aceleram o trabalho." },
  { id: "terminal", icon: Terminal, color: C.green, title: "Terminal", desc: "Linha de comando pra rodar o projeto, instalar pacotes e executar scripts sem precisar clicar em nada." },
  { id: "versionamento", icon: FolderGit2, color: C.purple, title: "Controle de versão", desc: "O Git instalado localmente, conectado ao GitHub, salvando e sincronizando o histórico do seu código." },
  { id: "pacotes", icon: Package, color: C.amber, title: "Gerenciador de pacotes", desc: "Ferramenta que instala bibliotecas prontas usadas no projeto (ex: npm para JS, pip para Python)." },
  { id: "envvars", icon: KeyRound, color: C.pink, title: "Variáveis de ambiente", desc: "Arquivo (.env) com senhas, chaves de API e configurações que mudam entre seu computador e o servidor real." },
  { id: "producao", icon: Cloud, color: C.blue, title: "Ambiente local x produção", desc: "\"Local\" é a versão rodando só na sua máquina para testes; \"produção\" é a versão no ar, usada pelos usuários de verdade." },
];
