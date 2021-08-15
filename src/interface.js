const signUpButton = document.getElementById('signUpButton');
const logInButton = document.getElementById('logInButton');
const signUp = document.getElementById('signUp');
const logIn = document.getElementById('logIn');
const signUpHandle = document.getElementById('signUpHandle');
const signUpPassword = document.getElementById('signUpPassword');
const logInHandle = document.getElementById('logInHandle');
const logInPassword = document.getElementById('logInPassword');
const peeps = document.getElementById('peeps');

const removeLogInSignUpButtons = () => {
  signUpButton.classList.remove('show');
  signUpButton.classList.add('hide');
  logInButton.classList.remove('show');
  logInButton.classList.add('hide');
};

signUpButton.addEventListener('click', () => {
  signUp.classList.remove('hide');
  signUp.classList.add('show');
  removeLogInSignUpButtons();
});

logInButton.addEventListener('click', () => {
  logIn.classList.remove('hide');
  logIn.classList.add('show');
  removeLogInSignUpButtons();
});

signUp.addEventListener('submit', (e) => {
  e.preventDefault();

  fetch('https://chitter-backend-api-v2.herokuapp.com/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      user: { handle: signUpHandle.value, password: signUpPassword.value },
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });

  signUp.classList.remove('show');
  signUp.classList.add('hide');
  peeps.classList.remove('hide');
  peeps.classList.add('show');
});

logIn.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(logInHandle.value, logInPassword.value);

  fetch('https://chitter-backend-api-v2.herokuapp.com/sessions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      session: { handle: logInHandle.value, password: logInPassword.value },
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });

  logIn.classList.remove('show');
  logIn.classList.add('hide');
  peeps.classList.remove('hide');
  peeps.classList.add('show');
});
