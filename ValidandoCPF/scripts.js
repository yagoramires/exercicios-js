// 705.484.450-52 070.987.720-03
/* 70548445052
7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.

7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10  9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.
*/

const validateButton = document.querySelector(".container__form__button");
const cpfInput = document.querySelector(".container__form__input");

validateButton.addEventListener("click", (e) => {
  e.preventDefault();
  const cpf = new ValidaCPF(cpfInput.value);

  cpf.valida();
});

function ValidaCPF(cpfInput) {
  Object.defineProperty(this, "cpfLimpo", {
    enumerable: true,
    get: function () {
      return cpfInput.replace(/\D+/g, "");
    },
  });
}

ValidaCPF.prototype.valida = function () {
  if (this.cpfLimpo.length !== 11) return this.showInScreen('Insira um número com 11 dígitos!', '#ffffff' , "#000000")
  if (this.isSequence()) return this.showInScreen('Uma sequência não é um CPF Válido!', '#dc143c' , "#ffffff")

  let cpfParcial = this.cpfLimpo.slice(0, -2);
  const firstSum = this.criaDigito(cpfParcial);
  const firstDigit = this.divideDigito(firstSum);

  cpfParcial = cpfParcial + firstDigit;

  const secondSum = this.criaDigito(cpfParcial);
  const secondDigit = this.divideDigito(secondSum);

  if(this.checkDigito(this.cpfLimpo, firstDigit, secondDigit)) {
    return this.showInScreen('CPF Válido', '#B6FF8B', '#000000')
  } else {
    return this.showInScreen('CPF Inválido', '#dc143c' , "#ffffff")
  }
};

ValidaCPF.prototype.criaDigito = (cpfParcial) => {
  const cpfArray = Array.from(cpfParcial);

  if (cpfArray.length === 9) {
    return cpfArray.reduce((acc, num, index) => {
      let number = Number(num) * (10 - index);
      return acc + number;
    }, 0);
  }

  if (cpfArray.length === 10) {
    return cpfArray.reduce((acc, num, index) => {
      let number = Number(num) * (11 - index);
      return acc + number;
    }, 0);
  }

  return false;
};

ValidaCPF.prototype.divideDigito = (total) => {
  const div = 11 - (total % 11);
  return div > 9 ? 0 : div
};

ValidaCPF.prototype.checkDigito = (cpfLimpo, firstDigit, secondDigit) => {
  const cpfArr = Array.from(cpfLimpo).splice(-2,2)
  if (Number(cpfArr[0]) !== firstDigit) return false
  if (Number(cpfArr[1]) !== secondDigit) return false

  return true
}

ValidaCPF.prototype.showInScreen = (resultado, bgColor, fontColor) => {
  const result = document.querySelector('.container__result')
  result.style.backgroundColor = bgColor
  result.style.color = fontColor
  return result.innerHTML = resultado
}

ValidaCPF.prototype.isSequence = function() {
  const sequence = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
  return (this.cpfLimpo === sequence)
}