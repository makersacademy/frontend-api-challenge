(function(exports) {
  function User(handle, password) {
    this.handle = handle
    this.password = password
  }
  User.prototype.newUserRequest = function() {
    const data = { user: {"handle": this.handle, "password": this.password} };

    fetch("https://chitter-backend-api-v2.herokuapp.com/users", {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      this.handle = data.handle
      this.id = data.id
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  }

  exports.User = User
})(this)

function newUser(handle, password) {
  user= new User(handle, password)
  user.newUserRequest()
}
