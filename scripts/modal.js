export const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal-wrapper h2'),
  btnClose: document.querySelector('.close'),

  open() {
    Modal.wrapper.classList.add('open')
  },
  close() {
    Modal.wrapper.classList.remove('open')
  },
}

Modal.btnClose.onclick = () => {
  Modal.close()
}

function handleKeyDown(event) {
  if (event.key === 'Escape') {
    Modal.close()
  }
}

window.addEventListener('keydown', handleKeyDown)