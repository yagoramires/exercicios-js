import PasswordGenerator from "./modules/passwordGenerator";

import "./assets/styles/style.scss";

const gerar = document.querySelector(".container__button");
const display = document.querySelector(".container__result");

const pass = new PasswordGenerator();

gerar.addEventListener("click", (e) => {
  e.preventDefault();

  const result = pass.generatePass();
  display.innerHTML = result;
});
