const { createUser, fetchUsers } = require('./addUser')

const signup_button = document.querySelector('#signup')
signup_button.addEventListener('click', () => {
    const form = document.createElement('form');
    const handle = document.createElement('input');
    const handle_label = document.createElement('label');
    const password = document.createElement('input');
    const password_label = document.createElement('label');
    const button = document.createElement('button');
    handle.id = '#handle'
    handle_label.innerText = 'Username'
    handle.id = '#password'
    password_label.innerText = 'Password'
    button.innerText = 'Submit'
    form.appendChild(handle_label)
    form.appendChild(handle)
    form.appendChild(password_label)
    form.appendChild(password)
    form.appendChild(button)
    document.body.appendChild(form)
  });

createUser('ben1230298', 'pword', (data) => {
  data
})

