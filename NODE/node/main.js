module.exports.Pessoa = class Pessoa {
  constructor(nome){
    this.nome = nome;
  }

  fala(){
    return `${this.nome} está falando.`
  }
}
