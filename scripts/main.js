import { Modal } from './modal.js';
import { AlertError } from './alert-error.js';
import { NotANumber, IMC } from './utils.js';

const form = document.querySelector('form')
const inputHeight = document.querySelector('#height')
const inputWeight = document.querySelector('#weight')

form.onsubmit = (event) => {
  event.preventDefault()
  const weight = inputWeight.value
  const height = inputHeight.value

  const isNotANaN = NotANumber(weight) || NotANumber(height)
  if (isNotANaN) {
    AlertError.open()
    return
  }
  
  AlertError.close()

  const result = IMC(weight, height)
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message
  Modal.open()
}

inputHeight.oninput = () => AlertError.close();
inputWeight.oninput = () => AlertError.close();