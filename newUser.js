updateServer = (element) => {
  fetch('https://chitter-backend-api-v2.herokuapp.com/users', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(element),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

createSession = (element) => {
  fetch('https://chitter-backend-api-v2.herokuapp.com/sessions', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(element),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Session key is: ', data['session_key']);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

const button = document.querySelector('#create-new-user')

button.addEventListener('click', () => {
  handle = document.querySelector('#new-user-username').value;
  password = document.querySelector('#new-user-password').value;
  userElement = {"user": { "handle": `${handle}`, "password": `${password}`}};
  updateServer(userElement);
  sessionElement = {"session": { "handle": `${handle}`, "password": `${password}`}};
  createSession(sessionElement);
})