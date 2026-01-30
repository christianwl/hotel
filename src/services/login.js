import { receberString, receberValorNumerico } from "../utils/functions.js";

const SENHA = 2678;
const DIGITOS_MAX = SENHA.toString().length;

export const login = {
  nomeUsuario: "",
  senha: SENHA,

  iniciarLogin() {
    this.nomeUsuario = receberString("Por favor, digite o seu nome:");

    this.receberSenha();
  },

  receberSenha() {
    let textoPrompt =
      "Digite a senha:\n\n" +
      "OBS:\n" +
      `- A senha contém apenas ${DIGITOS_MAX} caractere${DIGITOS_MAX > 1 ? "s" : ""}\n` +
      "- Aceita apenas números";

    let senha = receberValorNumerico(textoPrompt);
    this.verificarSenha(senha);
  },

  verificarSenha(senha) {
    let quantidadeSenha = senha.toString().length;

    if (quantidadeSenha !== DIGITOS_MAX) {
      alert(
        `Senha inválida!\n\nA quantidade de número digitados foi ${quantidadeSenha}, e a senha possuí ${DIGITOS_MAX} dígitos`,
      );
      return this.receberSenha();
    }

    if (senha !== this.senha) {
      console.log(`Senha inválida, a senha correta é: ${this.senha}`);
      alert(
        "Senha inválida, tente novamente!\n\n" +
          `Dica: tente verificar o console`,
      );
      return this.receberSenha();
    }
    
    alert("Senha válida!");
  },
};
