
function login(handle, password) {
const data = { user: {"handle": handle, "password":password} };

fetch("https://chitter-backend-api-v2.herokuapp.com/users", {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});}
