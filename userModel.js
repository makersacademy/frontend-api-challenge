
class UserModel {
  constructor() {
    document.querySelector('#sign-up-button').addEventListener('click', () => {
      let username = document.querySelector('#username').value
      let password = document.querySelector('#password').value
      this.createUser(username, password);
    });

  }

  createUser = (username, password) => {
    data = {"user": {"username": `${username}`, "password": `${password}`}}
    fetch('https://chitter-backend-api-v2.herokuapp.com/users', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      alert("User successfuly created")
    });
  }




module.exports = UserModel;