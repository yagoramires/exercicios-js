const numberButton = document.querySelectorAll(".number");
const operatorButton = document.querySelectorAll(".operator");

numberButton.forEach((btn) => {
  btn.addEventListener("click", () => {});
});

function createCalc() {
  return {
    inputDisplay: document.querySelector(".container__input"),

    start() {
      this.buttonClick();
      this.enterClick();
    },

    buttonClick() {
      document.addEventListener("click", (e) => {
        const el = e.target;

        if (el.classList.contains("num")) {
          this.setInputValue(el.innerText);
        }
        if (el.classList.contains("op")) {
          this.setInputValue(el.innerText);
        }
        if (el.classList.contains("clear")) {
          this.clearInput();
        }
        if (el.classList.contains("del")) {
          this.delete();
        }
        if (el.classList.contains("eq")) {
          this.calculate();
        }
      });
    },

    enterClick() {
      document.addEventListener("keypress", (e) => {
        e.preventDefault();

        if (e.key === "Enter") {
          this.calculate();
        }
      });
    },

    setInputValue(valor) {
      this.inputDisplay.value += valor;
    },

    clearInput() {
      this.inputDisplay.value = "";
    },

    delete() {
      this.inputDisplay.value = this.inputDisplay.value.slice(0, -1);
    },
    calculate() {
      let calc = this.inputDisplay.value;

      try {
        calc = eval(calc);

        if (!calc) {
          alert("Conta inválida!");
          return;
        }
        this.inputDisplay.value = calc;
      } catch {
        alert("Conta inválida!");
        this.inputDisplay.value = "";
        return;
      }
    },
  };
}

const calculator = createCalc();
calculator.start();
