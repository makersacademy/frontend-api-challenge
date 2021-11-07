const authLogin = require('../fetches/authLogin')

const displayLogin = (throwError, createPeep) => {
  let left_column = document.querySelector('#leftColumn');
  left_column.innerHTML = ""
  
  let basic_welcome_message = document.createElement('div');
  basic_welcome_message.setAttribute('id', 'basicWelcomeMessage');
  basic_welcome_message.innerText = "Please log in to continue:"

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

  let btn_login = document.createElement('button');
  btn_login.setAttribute('id', 'btnLogin')
  btn_login.setAttribute('class', 'button2');
  btn_login.innerText = 'Login';

  let reg_link = document.createElement('a');
  reg_link.innerText = 'Register now';
  reg_link.setAttribute('id', 'regLink')
  reg_link.setAttribute('href', 'javascript:void(0);');
  reg_link.setAttribute('onclick', `displayRegister();`);

  let account_txt = document.createElement('div');
  account_txt.setAttribute('id', 'accountTxt')
  account_txt.innerText = "Don't have an account? ";
  account_txt.appendChild(reg_link);

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
  left_column.appendChild(btn_login);
  let lb7 = document.createElement('br');
  left_column.appendChild(lb7);
  let lb8 = document.createElement('br');
  left_column.appendChild(lb8);
  let lb9 = document.createElement('br');
  left_column.appendChild(lb9);
  left_column.appendChild(account_txt);

  btn_login.addEventListener(
  'click', () => {
    let username = document.querySelector('#unInput').value;
    let password = document.querySelector('#pwInput').value;
    authLogin(username, password)
  } 
)
}

module.exports = displayLogin;