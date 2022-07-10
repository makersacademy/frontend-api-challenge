class ChitterApi {
  loadPeeps(callback) {
    fetch("https://chitter-backend-api-v2.herokuapp.com/peeps")
      .then(response => response.json())
      .then(peeps => callback(peeps));
  }

  addUser(username, password, callback) {
    const data = {"user": {"handle":username, "password":password}}
    fetch("https://chitter-backend-api-v2.herokuapp.com/users", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then(data => { callback(data) } )
  }

  login(username, password, callback) {
    const data = {"session": {"handle":username, "password":password}}
    fetch("https://chitter-backend-api-v2.herokuapp.com/sessions", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then(data => { callback(data) })
  }
}

module.exports = ChitterApi;

// curl "https://chitter-backend-api-v2.herokuapp.com/sessions" \
//   -X POST \
//   -H "Content-Type: application/json" \
//   -d '{"session": {"handle":"kay", "password":"mypassword"}}'
