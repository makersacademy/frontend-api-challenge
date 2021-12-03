const { createUser } = require('./src/addUser')
const { viewPeeps } = require('./src/viewPeeps')
const { postPeep } = require('./src/postPeep')
const { sessionKey } = require('./src/sessionKey')
const { login } = require('./src/login')

callback = (data) => {
  data
}

const signup_button = document.querySelector('#signup')
signup_button.addEventListener('click', () => {
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
    form.id = 'signup-form'
    button.addEventListener('click', (event) => {
      event.preventDefault();
      createUser(handle.value, password.value);
      callback(document.querySelector('#signup-form').remove())
      return false
    })
  });

  const login_button = document.querySelector('#login')
  login_button.addEventListener('click', () => {
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
      form.id = 'login-form'
      button.addEventListener('click', (event) => {
        event.preventDefault();
        login(handle.value, password.value);
        callback(document.querySelector('#login-form').remove())
        return false
      })
    });

viewPeeps();

document.querySelector('#post').style.display = "none"
document.querySelector('.peep').style.display = "none"