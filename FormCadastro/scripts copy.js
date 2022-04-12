const form = document.querySelector('.container__form')
const nameInput = form.querySelector('.name')
const surnameInput = form.querySelector('.surname')
const cpfInput = form.querySelector('.cpf')
const userInput = form.querySelector('.username')
const passwordInput = form.querySelector('.password')
const repasswordInput = form.querySelector('.repassword')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const name = new IsEmpty(nameInput.value)
  const surname = new IsEmpty(surnameInput.value)
  const cpf = new IsEmpty(cpfInput.value)
  const username = new IsEmpty(userInput.value)
  const password = new IsEmpty(passwordInput.value)
  const repassword = new IsEmpty(repasswordInput.value)

  // if(!name.validation()) emptyMessage('Preencha seu nome.')
  // if(!surname.validation()) emptyMessage('Preencha seu sobrenome.')
  // if(!cpf.validation()) emptyMessage('Preencha seu CPF.')
  // if(!username.validation()) emptyMessage('Preencha seu usuário.')
  // if(!password.validation()) emptyMessage('Preencha sua senha.')
  // if(!repassword.validation()) emptyMessage('Preencha sua senha novamente')

  const userValido = new ValidaUsuario(userInput.value)
  const cpfValido = new ValidaCPF(cpfInput.value)
  const passValido = new ValidaSenha('senha123')
  // const passValido = new ValidaCPF(password.value)
  passValido.validation()
  // userValido.validation()
  // cpfValido.validation()
  // console.log(userValido.validation())
  // console.log(cpfValido.validation())
  
})

class showErrorInScreen{
  constructor(){

  }

  createChild(){
    const createP = document.createElement('p')

    createP.classList.add('.container__form__error')
    // const input = 

  }
}

function IsEmpty(value) {
  this.value = value
}

IsEmpty.prototype.validation = function() {
  if(!this.value) return false
  return true
}

class ValidaCPF {
  constructor(cpfInput) {
    Object.defineProperty(this, 'cpfLimpo', {
      value: cpfInput.replace(/\D+/g, "")
    })
  }  
  validation() {
    if(!this.cpfLimpo) return false
    if (this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo) return false
    
    const cpfArray = Array.from(this.cpfLimpo)
    const numForSum = cpfArray.slice(0, -2)
    const numForCheck = cpfArray.slice(9, 11)
    
    const firstNum = ValidaCPF.numbersSum(numForSum)
    const firstCheck = ValidaCPF.numberCheck(firstNum)
    
    if (firstCheck !== Number(numForCheck[0])) return false
    
    numForSum.push(firstCheck)
    const secondNum = ValidaCPF.numbersSum(numForSum)
    const secondCheck = ValidaCPF.numberCheck(secondNum)
    
    if (secondCheck !== Number(numForCheck[1])) return false
    return true
  }
  
  static numbersSum(numForSum) {
    return numForSum.reduce((acc, num, i)=>{
      const total = Number(num) * (numForSum.length + 1 - i)
      return acc += total
    }, 0)
  }
  
  static numberCheck(num) {
    const div = 11 - (num % 11)
    return div > 9 ? 0 : div
  }
}

class ValidaUsuario {
  constructor(usernameInput){
    this.username = usernameInput
  }

  validation() {
    if (!this.username) return false
    if (this.username < 3) return false
    if (!this.checkChar()) return false
    return true
  }
  
  checkChar(){  
    const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/
    if (specialChars.test(this.username)) { return false }
    return true
  }
  
}

class ValidaSenha{
  constructor(passwordInput){
    this.password = passwordInput
  }
  
  validation() {
    if(!this.password) return false
    if(this.password.length < 3 || this.password.length > 12) return false
    
    return true
  }
}
