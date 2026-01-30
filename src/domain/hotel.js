import { login } from "../services/login.js";

export const hotel = {
  nome: "Letoh",

  iniciarLogin() {
    login.iniciarLogin();
    alert(
      `Bem vindo ao hotel ${this.nome}, ${login.nomeUsuario}.\n` +
        "É um imenso prazer ter você por aqui!",
    );
  },
};
