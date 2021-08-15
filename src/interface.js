const signUp = document.getElementById('signUp');
const handle = document.getElementById('handle');
const password = document.getElementById('password');

signUp.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('hello');
  console.log(handle.value, password.value);

  fetch('https://chitter-backend-api-v2.herokuapp.com/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      user: { handle: handle.value, password: password.value },
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
});
