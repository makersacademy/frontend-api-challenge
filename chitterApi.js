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
}

module.exports = ChitterApi;

// const data = { content: note }
// fetch('http://localhost:3000/notes', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),  
// })
// .then(response => response.json())
// .then(data => { callback(data) })
// .catch((error) => {
//   console.error(error);
//   errorCallback()
// // });

// curl "https://chitter-backend-api-v2.herokuapp.com/users" \
//   -X POST \
//   -H "Content-Type: application/json" \
//   -d '{"user": {"handle":"kay", "password":"mypassword"}}'