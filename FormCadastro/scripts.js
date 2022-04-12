class ValidaFormulario {
  constructor() {
    this.form = document.querySelector(".container__form");
    this.eventos();
  }

  eventos() {
    this.form.addEventListener("submit", (e) => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const validFields = this.checkFields();
    const validPass = this.checkPass();

    if (validFields && validPass) {
      alert("Formulário enviado!");
      this.form.submit();
    }
  }

  checkFields() {
    let valid = true;

    for (let errorText of this.form.querySelectorAll(
      ".container__form__error"
    )) {
      errorText.remove();
    }

    for (let field of this.form.querySelectorAll(".container__form__input")) {
      const errorField = field.placeholder;

      if (!field.value) {
        this.createError(
          field,
          `O campo "${errorField}" não pode estar em branco.`
        );
        valid = false;
      }
    }

    const validaCPF = new ValidaCPF(this.form.querySelector(".cpf").value);

    if (!validaCPF.validation()) {
      this.createError(
        this.form.querySelector(".cpf"),
        "O CPF inserido não é válido."
      );
      valid = false;
    }

    if (
      this.form.querySelector(".username").value.length < 3 ||
      this.form.querySelector(".username").value.length > 12
    ) {
      this.createError(
        this.form.querySelector(".username"),
        "O nome de usuário deve conter entre 3 e 12 caracteres."
      );
      valid = false;
    }
    if (!this.checkChar()) {
      this.createError(
        this.form.querySelector(".username"),
        "O nome de usuário não pode conter caracteres especiais."
      );

      valid = false;
    }

    return valid;
  }

  checkPass() {
    let valid = true;

    if (
      this.form.querySelector(".password").value.length < 6 ||
      this.form.querySelector(".password").value.length > 12
    ) {
      this.createError(
        this.form.querySelector(".password"),
        "A senha deve conter entre 6 e 12 caracteres."
      );
      valid = false;
    }

    if (
      this.form.querySelector(".password").value !==
      this.form.querySelector(".repassword").value
    ) {
      this.createError(
        this.form.querySelector(".password"),
        "As senhas devem ser iguais."
      );
      this.createError(
        this.form.querySelector(".repassword"),
        "As senhas devem ser iguais."
      );

      valid = false;
    }

    return valid;
  }
  createError(field, msg) {
    const createP = document.createElement("p");
    createP.innerHTML = msg;
    createP.classList.add("container__form__error");
    field.insertAdjacentElement("afterend", createP);
  }

  checkChar() {
    const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (specialChars.test(this.form.querySelector(".username").value)) {
      return false;
    }
    return true;
  }
}

const valida = new ValidaFormulario();

class ValidaCPF {
  constructor(cpfInput) {
    Object.defineProperty(this, "cpfLimpo", {
      value: cpfInput.replace(/\D+/g, ""),
    });
  }
  validation() {
    if (!this.cpfLimpo) return false;
    if (this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo)
      return false;

    const cpfArray = Array.from(this.cpfLimpo);
    const numForSum = cpfArray.slice(0, -2);
    const numForCheck = cpfArray.slice(9, 11);

    const firstNum = ValidaCPF.numbersSum(numForSum);
    const firstCheck = ValidaCPF.numberCheck(firstNum);

    if (firstCheck !== Number(numForCheck[0])) return false;

    numForSum.push(firstCheck);
    const secondNum = ValidaCPF.numbersSum(numForSum);
    const secondCheck = ValidaCPF.numberCheck(secondNum);

    if (secondCheck !== Number(numForCheck[1])) return false;
    return true;
  }

  static numbersSum(numForSum) {
    return numForSum.reduce((acc, num, i) => {
      const total = Number(num) * (numForSum.length + 1 - i);
      return (acc += total);
    }, 0);
  }

  static numberCheck(num) {
    const div = 11 - (num % 11);
    return div > 9 ? 0 : div;
  }
}
