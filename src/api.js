class Api {
  loadPeeps(callback){}

  createSession(username, password, callback) {
    fetch('https://chitter-backend-api-v2.herokuapp.com/sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        session: {handle:`${username}`, password:`${password}`}
      })
    })
    .then((response) => response.json())
    .then((data) => callback(data))
  }

  createUser(username, password, callback) {
    fetch("https://chitter-backend-api-v2.herokuapp.com/users", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {handle:`${username}`, password:`${password}`}
      })
    })
    .then(response => response.json())
    .then(data => callback(data))
  }
}

module.exports = Api