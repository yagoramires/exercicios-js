// fetch('pessoas.json')
// .then(resposta => resposta.json())
// .then(respostaJSON => exibeDados(respostaJSON))

axios('pessoas.json')
.then(resposta => exibeDados(resposta.data))


function exibeDados(json) {
const table = document.createElement('table')

json.forEach((pessoa) => {
  const tr = document.createElement('tr')

  let td = document.createElement('td')
  td.innerHTML = pessoa.nome
  tr.appendChild(td)

  td = document.createElement('td')
  td.innerHTML = pessoa.empresa
  tr.appendChild(td)

  td = document.createElement('td')
  td.innerHTML = pessoa.salario.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
  tr.appendChild(td)

  table.appendChild(tr)
})

const resultado = document.querySelector('.resultado')
resultado.appendChild(table)
}