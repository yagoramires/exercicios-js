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
  const valida1 = new ValidaCPF (cpfInput.value)
  valida1.validate();
})


class ValidaCPF {
  constructor(cpfInput) {
    Object.defineProperty(this, 'cpf', {
      value: cpfInput.replace(/\D+/g, "")
      })
  }

  validate() {
    if (this.cpf.length !== 11) return this.showInScreen('Insira um número com 11 dígitos!', '#ffffff' , "#000000")
    if (this.isSequence()) return this.showInScreen('Uma sequência não é um CPF Válido!', '#dc143c' , "#ffffff")
    const cpfArray = Array.from(this.cpf)
    const numbersArray = cpfArray.slice(0, -2)
    const total1 = this.multiplyNumbers(numbersArray)
    const firstNumber = this.getNumber(total1)
    numbersArray.push(firstNumber)
    const total2 = this.multiplyNumbers(numbersArray)
    const secondNumber = this.getNumber(total2)
    const validacao = this.checkNumber(firstNumber, secondNumber)

    if(validacao) {
      return this.showInScreen('CPF Válido', '#B6FF8B', '#000000')
    } else {
      return this.showInScreen('CPF Inválido', '#dc143c' , "#ffffff")
    }
  }

  multiplyNumbers(numArray) {
    const total = numArray.reduce((acc, num, i )=> {
      const mult = Number(num) * (numArray.length + 1 - i)
      return acc += mult
    }, 0)

    return total
  }

  getNumber(total) {
    const calc = 11 - (total % 11)
    return calc > 9 ? 0 : calc
  }

  checkNumber(num1, num2) {
    const lastNumbers = Array.from(this.cpf).splice(-2, 2)

    if (Number(lastNumbers[0]) !== num1) return false
    if (Number(lastNumbers[1]) !== num2) return false
    return true
  }

  isSequence() {
    const sequence = this.cpf[0].repeat(this.cpf.length)
    return (this.cpf === sequence)
  }

  showInScreen(resultado, bgColor, fontColor) {
    const result = document.querySelector('.container__result')
    result.style.backgroundColor = bgColor
    result.style.color = fontColor
    return result.innerHTML = resultado
  }
}