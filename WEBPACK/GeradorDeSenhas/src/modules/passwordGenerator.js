export default class PasswordGenerator {
  static getOptions() {
    const number = document.querySelector(".numeros");
    const maiusc = document.querySelector(".maiusculas");
    const minusc = document.querySelector(".minusculas");
    const simbol = document.querySelector(".simbolos");

    let characters = "";

    const numbers = "0123456789";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const symbols = "!@#$%&*?><";

    // if (!quant.value) return;
    if (number.checked) characters += numbers;
    if (maiusc.checked) characters += letters;
    if (minusc.checked) characters += letters.toLowerCase();
    if (simbol.checked) characters += symbols;

    return characters;
  }

  generatePass() {
    const quant = document.querySelector(".quantidade");

    const characters = PasswordGenerator.getOptions();
    let result = "";

    for (let i = 0; i < quant.value; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  }
}
