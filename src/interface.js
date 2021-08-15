const signUp = document.getElementById('signUp');
const logIn = document.getElementById('logIn');
const signUpHandle = document.getElementById('signUpHandle');
const signUpPassword = document.getElementById('signUpPassword');
const logInHandle = document.getElementById('logInHandle');
const logInPassword = document.getElementById('logInPassword');

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
});
