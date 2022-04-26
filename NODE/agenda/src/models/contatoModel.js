const mongoose = require('mongoose');
const validator = require('validator');

const ContatoSchema = new mongoose.Schema({
  name: {type: String, required: false },
  surname: {type: String, required: false, default: ''},
  email: {type: String, required: false, default: '' },
  phone: {type: String, required: false, default: '' },
  criadoEm: {type: Date,  default: Date.now },

})

const ContatoModel = mongoose.model('Contato', ContatoSchema)

function Contato(body) {
  this.body = body
  this.errors = []
  this.contato = null
}

Contato.buscaPorId = async function (id) {
  if(typeof id !== 'string') return
  const user = await ContatoModel.findById(id)
  return user
}

Contato.prototype.register = async function() {
  this.valida()

  if(this.errors.length > 0 ) return
  this.contato = await ContatoModel.create(this.body)
}

Contato.prototype.valida = function() {
  this.cleanUp()

  if(this.body.email && !validator.isEmail(this.body.email)) this.errors.push('E-mail inválido')
  if(!this.body.name) this.errors.push('O nome é obrigatório.')
  if(!this.body.email && !this.body.phone) this.errors.push('E-mail ou telefone devem ser enviados')
}

Contato.prototype.cleanUp = function () {
  for(let key in this.body) {
    if (typeof this.body[key] !== 'string') {
      this.body[key] = '';
    }
  }
  
  this.body = {
    name: this.body.name,
    surname: this.body.surname,
    email: this.body.email,
    phone: this.body.phone
  }

}

module.exports = Contato