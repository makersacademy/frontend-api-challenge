const signUpButton = document.getElementById('signUpButton');
const logInButton = document.getElementById('logInButton');
const signUp = document.getElementById('signUp');
const logIn = document.getElementById('logIn');
const signUpHandle = document.getElementById('signUpHandle');
const signUpPassword = document.getElementById('signUpPassword');
const logInHandle = document.getElementById('logInHandle');
const logInPassword = document.getElementById('logInPassword');
const peeps = document.getElementById('getPeeps');
const createPeep = document.getElementById('createPeep');
const newPeep = document.getElementById('newPeep');

let user_id;
let session_key;

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
      if (data.handle[0] == "can't be blank") {
        alert('Field cannot be blank');
      } else if (data.handle[0] == 'has already been taken') {
        alert('Name has already been taken');
      } else {
        signUp.classList.remove('show');
        signUp.classList.add('hide');
        peeps.classList.remove('hide');
        peeps.classList.add('show');
        createPeep.classList.remove('hide');
        createPeep.classList.add('show');
      }
    });
});

logIn.addEventListener('submit', (e) => {
  e.preventDefault();

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
      // console.log(data.errors);
      logIn.classList.remove('show');
      logIn.classList.add('hide');
      peeps.classList.remove('hide');
      peeps.classList.add('show');
      createPeep.classList.remove('hide');
      createPeep.classList.add('show');

      // user_id = data.user_id;
      // session_key = data.session_key;
    })
    .catch(() => {
      alert('Not a valid log in');
    });
});

peeps.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('hello');
  console.log(logInHandle.value, logInPassword.value);

  fetch('https://chitter-backend-api-v2.herokuapp.com/peeps')
    .then((response) => {
      console.log(response.json());
    })
    .then((data) => {
      console.log(data);
    });
});

createPeep.addEventListener('click', (e) => {
  e.preventDefault();
  newPeep.classList.remove('hide');
  newPeep.classList.add('show');
});

newPeep.addEventListener('click', (e) => {
  e.preventDefault();
  message = newPeep.value;

  fetch('https://chitter-backend-api-v2.herokuapp.com/peeps', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      peep: { user_id: user_id, body: message },
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      chitter = new Chitter();
      return chitter.addArray(data);
    });

  console.log(chitter);

  console.log('hello');
  logIn.classList.remove('show');
  logIn.classList.add('hide');
  peeps.classList.remove('hide');
  peeps.classList.add('show');
  newPeep.classList.remove('hide');
  newPeep.classList.add('show');
});
