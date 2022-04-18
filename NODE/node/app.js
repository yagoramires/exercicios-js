// const {Pessoa, gato, teubilau} = require('./main')

// const p1 = new Pessoa('Kleber')

// console.log(p1.fala(), gato,  teubilau.opa)

// const path = require('path')
// const axios = require('axios')

// axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
//   .then((response) => console.log(response.data))
//   .catch((err) => console.log(err))

// console.log(__dirname)
// console.log(__filename)


// const fs = require('fs').promises
// const path = require('path')

// file.readdir(path.resolve(__dirname))
// .then(files => console.log(files))
// .catch((err) => console.log(err))

// async function readdir(rootDirCaminhoRaiz) {
//   rootDirCaminhoRaiz = rootDirCaminhoRaiz || path.resolve(__dirname)

//   const files = await fs.readdir(rootDirCaminhoRaiz)

//   search(files, rootDirCaminhoRaiz)

// }


// async function search(files, rootDirCaminhoRaiz) {
//   for (let file of files) {
//     const fileFullPath = path.resolve(rootDirCaminhoRaiz, file)
//     const stats = await fs.stat(fileFullPath)

//     if(/\.git/g.test(fileFullPath)) continue
//     if(/node_modules/g.test(fileFullPath)) continue

//     // if(!stats.isDirectory()) {continue}
//     if(stats.isDirectory()) {
//       readdir(fileFullPath)
//       continue
//     }
//     if(!/\.js$/g.test(fileFullPath)) continue
//     console.log(file)
//   }
// }

// readdir('c:/Users/Gabriel Mazzucchelli/Desktop/exercicios-js/')

const path = require('path')
const caminhoArquivo =  path.resolve(__dirname, 'teste.json')
const escreve = require('./escrever')
const ler = require('./ler')

// const pessoas = [
//   {nome: 'Yago'},
//   {nome: 'Nath'},
//   {nome: 'Daniel'},
//   {nome: 'Rafa'},
// ]

// const json = JSON.stringify(pessoas, '', 2)

// escreve(caminhoArquivo, json)

async function lerArquivo(caminho) {
  const dados = await ler(caminho);
  renderizaDados(dados)
}

function renderizaDados(dados) {
  dados = JSON.parse(dados)
  
  dados.forEach(val => console.log(val))
}

lerArquivo(caminhoArquivo)
