const inputDisplay = document.querySelector(".container__input");

let operator;
let num;

document.addEventListener("click", (ev) => {
  const el = ev.target;

  if (el.classList.contains("num")) inputValue(el.innerText);
  if (el.classList.contains("op")) operatorValue(el.innerText);
  if (el.classList.contains("switch")) switchSignal(el.innerText);
  if (el.classList.contains("percent")) percentCalc();
  if (el.classList.contains("clear")) clearValue();
  if (el.classList.contains("del")) delValue();
  if (el.classList.contains("eq")) resultValue();
});

function* calculator() {
  yield function (value) {
    inputDisplay.value += value;
  };
  yield function (value) {
    operator = value;
    num = inputDisplay.value;
    inputDisplay.value = "";
  };
  yield function () {
    let value = inputDisplay.value;
    if (value.includes("-")) {
      value = value.replace("-", "");
      inputDisplay.value = value;
    } else {
      const negative = "-";
      inputDisplay.value = negative.concat(inputDisplay.value);
    }
  };
  yield function () {
    const result = eval(inputDisplay.value / 100);
    inputDisplay.value = result;
  };
  yield function () {
    inputDisplay.value = "";
  };
  yield function () {
    inputDisplay.value = inputDisplay.value.slice(0, -1);
  };
  return function () {
    const result = eval(`${num} ${operator} ${inputDisplay.value}`);
    inputDisplay.value = result;
  };
}

calc = calculator();

const inputValue = calc.next().value;
const operatorValue = calc.next().value;
const switchSignal = calc.next().value;
const percentCalc = calc.next().value;
const clearValue = calc.next().value;
const delValue = calc.next().value;
const resultValue = calc.next().value;
