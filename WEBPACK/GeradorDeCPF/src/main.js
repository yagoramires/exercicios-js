import GeraCPF from "./modules/geraCPF";
import "./assets/styles/style.scss";
import ValidaCPF from "./modules/valida";

(function () {
  const geraCPF = new GeraCPF();
  const cpfGerado = document.querySelector(".container__cpfGerado");
  cpfGerado.innerHTML = geraCPF.geraNovoCPF();
})();
