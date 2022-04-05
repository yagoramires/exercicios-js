//IMC = Peso ÷ (Altura × Altura)

const form = document.querySelector(".container__session__form")

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const weight = document.querySelector(".weight").value
  const height = document.querySelector(".height").value

  let imc = calculate(weight, height)

  let validation = validate(imc)
  showResult(validation)
})

function calculate(w, h) {
const imc = (w / (( h * h)/100)) * 100

return imc.toFixed(2)
}

function validate(imc) {
  if (imc < 10 || imc > 70) return `<p class="imc invalido">Valores inseridos inválidos!</p>`
  if (imc < 18.5) return `<p class="imc imc-abaixo">Seu IMC é: ${imc} (Abaixo do Peso)</p>`
  if (imc >= 18.5 && imc <= 24.9) return `<p class="imc imc-normal">Seu IMC é: ${imc} (Peso Normal)</p>`
  if (imc >= 25 && imc <= 29.9) return `<p class="imc imc-sobrepeso">Seu IMC é: ${imc} (Sobrepeso)</p>`
  if (imc >= 30 && imc <= 34.9) return `<p class="imc imc-obesidade">Seu IMC é: ${imc} (Obesidade Grau 1)</p>`
  if (imc >= 35 && imc <= 39.9) return `<p class="imc imc-obesidade">Seu IMC é: ${imc} (Obesidade Grau 2)</p>`
  if (imc >= 40) return `<p class="imc imc-obesidade">Seu IMC é: ${imc} (Obesidade Grau 3)</p>`

}

function showResult(validation) {
  const oldImc = document.querySelector(".imc")

  if (oldImc) {
    oldImc.remove()
  }

  const createP = document.createElement("p")

  createP.innerHTML = validation
  form.appendChild(createP)
}