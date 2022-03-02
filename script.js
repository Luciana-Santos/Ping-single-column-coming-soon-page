const form = document.querySelector("form")
const emailInput = document.querySelector("#email")

form.addEventListener('submit', e => {
  e.preventDefault()
  
  validarInput()
})

const formError = (elemento, mensagem) => {
  const errorDisplay = document.querySelector('.error')

  errorDisplay.innerText = mensagem
  errorDisplay.classList.add("show-error")
  emailInput.classList.add("show-error")
}

const emailValidoSim = mensagem => {
  const errorDisplay = document.querySelector('.error')

  errorDisplay.innerText = ''
  errorDisplay.classList.remove("show-error")
  emailInput.classList.remove("show-error")
}

const emailValido = email => {
  const regexpEMAIL = /[\w.-]+@[\w-]+\.[\w-.]+/gi;
  return regexpEMAIL.test(String(email).toLowerCase());
}

const validarInput = () => {
  const emailValue = emailInput.value.trim()

  if (emailValue === '') {
    formError(emailInput, 'Email is required')
  } else if (!emailValido(emailValue)) {
    formError(emailInput, 'Please provide a valid email address')
  } else {
    emailValidoSim()
  }
}