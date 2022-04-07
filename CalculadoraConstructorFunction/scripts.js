function Calculator() {
  this.inputDisplay = document.querySelector(".container__input");

  this.inicia = function () {
    this.clickCheck();
    this.enterCheck();
  };

  this.clickCheck = () => {
    document.addEventListener("click", (e) => {
      const el = e.target;

      if (el.classList.contains("num")) this.inputValue(el.innerText);
      if (el.classList.contains("op")) this.inputValue(el.innerText);
      if (el.classList.contains("clear")) this.clearInput();
      if (el.classList.contains("del")) this.delete();
      if (el.classList.contains("eq")) this.calc();
    });
  };

  this.enterCheck = () => {
    document.addEventListener("keypress", (e) => {
      e.preventDefault();
      if (e.key === "Enter") this.calc();
    });
  };

  this.inputValue = (value) => (this.inputDisplay.value += value);
  this.clearInput = () => (this.inputDisplay.value = "");
  this.delete = () =>
    (this.inputDisplay.value = this.inputDisplay.value.slice(0, -1));

  this.calc = () => {
    try {
      const calc = eval(this.inputDisplay.value);
      if (!calc) return;
      this.inputDisplay.value = calc;
    } catch (e) {
      this.clearInput();
      alert("Conta Inválida");
    }
  };
}

const calculadora = new Calculator("Yago", "Madeira");
calculadora.inicia();
