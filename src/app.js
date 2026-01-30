import { hotel } from "./domain/hotel.js";

// Script antigo não refatorado
import iniciarLetohAntigo from "./script.js";

const btnIniciar = document.getElementById("btnIniciar");

btnIniciar.addEventListener("click", () => {
  // iniciarLetohAntigo();
  iniciarLetoh();
});

function iniciarLetoh() {
  alert(`Bem vindo ao ${hotel.nome}`);

  hotel.iniciarLogin();
}
