class ChitterApi {
  loadPeeps(callback) {
    fetch('https://chitter-backend-api-v2.herokuapp.com/peeps')
      .then(response => response.json())
      .then(data => {
        callback(data)
      });
  }

  loadPeepsById(id, callback) {
    fetch('https://chitter-backend-api-v2.herokuapp.com/peeps/' + id)
      .then(response => response.json())
      .then(data => {
        callback(data)
      });
  }

  createUser (username, password, callback) {
    fetch('https://chitter-backend-api-v2.herokuapp.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"user": {"handle": username, "password": password}})
    })
    .then(response => response.json())
    .then(data => {
      callback(data)
      console.log(data)
      })
    .catch(error => {
      console.log('Looks like there was a problem', error);
    })

  }

  // createSession (user, callback) {
  //   fetch('https://chitter-backend-api-v2.herokuapp.com/sessions', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ "session": {"handle": username, "password": password}})
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     callback(data)
  //     });
  // }


  // createPeep (peep, callback) {
  //   fetch('https://chitter-backend-api-v2.herokuapp.com/users', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ "session": {"handle":"kay", "password":"mypassword" })
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     callback(data)
  //     });
  // }
  }
  module.exports = ChitterApi;