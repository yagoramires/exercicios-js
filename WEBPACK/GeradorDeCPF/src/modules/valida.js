export default class ValidaCPF {
  constructor(cpfInput) {
    Object.defineProperty(this, "cpf", {
      value: cpfInput.replace(/\D+/g, ""),
    });
  }

  validate() {
    if (this.cpf.length !== 11)
      return this.showInScreen(
        "Insira um número com 11 dígitos!",
        "#ffffff",
        "#000000"
      );
    if (this.isSequence())
      return this.showInScreen(
        "Uma sequência não é um CPF Válido!",
        "#dc143c",
        "#ffffff"
      );
    const cpfArray = Array.from(this.cpf);
    const numbersArray = cpfArray.slice(0, -2);
    const total1 = this.multiplyNumbers(numbersArray);
    const firstNumber = this.getNumber(total1);
    numbersArray.push(firstNumber);
    const total2 = this.multiplyNumbers(numbersArray);
    const secondNumber = this.getNumber(total2);
    const validacao = this.checkNumber(firstNumber, secondNumber);

    if (validacao) {
      return true;
    } else {
      return false;
    }
  }

  static multiplyNumbers(numArray) {
    const total = numArray.reduce((acc, num, i) => {
      const mult = Number(num) * (numArray.length + 1 - i);
      return (acc += mult);
    }, 0);

    return total;
  }

  static getNumber(total) {
    const calc = 11 - (total % 11);
    return calc > 9 ? 0 : calc;
  }

  static checkNumber(num1, num2) {
    const lastNumbers = Array.from(this.cpf).splice(-2, 2);

    if (Number(lastNumbers[0]) !== num1) return false;
    if (Number(lastNumbers[1]) !== num2) return false;
    return true;
  }

  isSequence() {
    const sequence = this.cpf[0].repeat(this.cpf.length);
    return this.cpf === sequence;
  }
}
