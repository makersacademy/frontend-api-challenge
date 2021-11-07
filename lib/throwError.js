const throwError = (data) => {
  let error_message = document.createElement('div')
  error_message.innerText = data.errors.password
  let message = document.querySelector('#basicWelcomeMessage')
  message.appendChild(error_message)
}

module.exports = throwError