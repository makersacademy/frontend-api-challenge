const { createUser } = require('./addUser')

callback = (data) => {
  data
}

const button = document.querySelector('#signup')
button.addEventListener('click', () => {
    let form = document.createElement('form');
    let handle = document.createElement('input');
    let handle_label = document.createElement('label');
    let password = document.createElement('input');
    let password_label = document.createElement('label');
    let button = document.createElement('button');
    handle.id = 'handle'
    handle_label.innerText = 'Username'
    handle.id = 'password'
    password_label.innerText = 'Password'
    button.innerText = 'Submit'
    button.id = 'submit'
    form.appendChild(handle_label)
    form.appendChild(handle)
    form.appendChild(password_label)
    form.appendChild(password)
    form.appendChild(button)
    document.body.appendChild(form)
    form.id = 'form-1'
    button.addEventListener('click', (event) => {
      event.preventDefault();
      createUser(handle.value, password.value);
      callback(document.querySelector('#form-1').remove())
      return false
    })
  });

module.exports.button = button