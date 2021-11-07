attemptRegister = require('../fetches/attemptRegister')
displayLogin = require('./displayLogin')

displayRegister = () => {
  let left_column = document.querySelector('#leftColumn');
  left_column.innerHTML = ""
  
  let basic_welcome_message = document.createElement('div');
  basic_welcome_message.setAttribute('id', 'basicWelcomeMessage');
  basic_welcome_message.innerText = "Please Register below:"

  let un_text = document.createElement('div');
  un_text.innerText = 'Username:';

  let un_input = document.createElement('input');
  un_input.setAttribute('id', 'unInput');
  un_input.setAttribute('type', 'text');

  let pw_text = document.createElement('div');
  pw_text.innerText = 'Password:';

  let pw_input = document.createElement('input');
  pw_input.setAttribute('id', 'pwInput');
  pw_input.setAttribute('type', 'password');

  let btn_submit = document.createElement('button');
  btn_submit.setAttribute('id', 'btnSubmit')
  btn_submit.setAttribute('class', 'button2');
  btn_submit.innerText = 'Register';

  left_column.appendChild(basic_welcome_message);
  let lb2 = document.createElement('br');
  left_column.appendChild(lb2);
  left_column.appendChild(un_text);
  left_column.appendChild(un_input);
  let lb3 = document.createElement('br');
  left_column.appendChild(lb3);
  let lb4 = document.createElement('br');
  left_column.appendChild(lb4);
  left_column.appendChild(pw_text);
  left_column.appendChild(pw_input);
  let lb5 = document.createElement('br');
  left_column.appendChild(lb5);
  let lb6 = document.createElement('br');
  left_column.appendChild(lb6);
  left_column.appendChild(btn_submit);
  let lb7 = document.createElement('br');
  left_column.appendChild(lb7);
  let lb8 = document.createElement('br');
  left_column.appendChild(lb8);
  let lb9 = document.createElement('br');
  left_column.appendChild(lb9);

  btn_submit.addEventListener('click', () => {
    let username = document.querySelector('#unInput').value;
    let password = document.querySelector('#pwInput').value;
    attemptRegister(username, password)
  })
}

module.exports = displayRegister;