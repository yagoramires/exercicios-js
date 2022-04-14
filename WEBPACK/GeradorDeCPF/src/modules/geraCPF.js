import ValidaCPF from "./valida";

export default class GeraCPF {
  rand(min = 100000000, max = 999999999) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  geraNovoCPF() {
    const cpfWithouDigit = this.rand();
    const cpfArray = [...String(cpfWithouDigit)];

    let total = ValidaCPF.multiplyNumbers(cpfArray);
    let div = ValidaCPF.getNumber(total);
    cpfArray.push(String(div));

    total = ValidaCPF.multiplyNumbers(cpfArray);
    div = ValidaCPF.getNumber(total);
    cpfArray.push(String(div));

    const NumberString = cpfArray.toString();

    const cpfMask = NumberString.replace(/,/g, "").replace(
      /^(\d{3})(\d{3})(\d{3})(\d{2})/,
      "$1.$2.$3-$4"
    );

    return cpfMask;
  }
}
