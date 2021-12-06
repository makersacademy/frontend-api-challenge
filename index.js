const fetchPeeps = require('./fetchPeeps')
const newUser = require('./createUser')
const newSession = require('./createSession')

const button = document.querySelector('#signup-button')

button.addEventListener('click', () => {
  handle = document.querySelector('#username').value;
  password = document.querySelector('#password').value;
  user = {"user": { "handle": `${handle}`, "password": `${password}`}};
  newUser(user);
  session = {"session": { "handle": `${handle}`, "password": `${password}`}};
  newSession(session);
  
})

fetchPeeps();


