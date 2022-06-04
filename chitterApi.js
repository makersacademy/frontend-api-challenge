class ChitterApi {
  loadMessages(callback) {
    fetch('https://chitter-backend-api-v2.herokuapp.com/peeps')
      .then(response => response.json())
      .then(data => callback(data));
  }

  createNewUser(handle, password, callback) {
    fetch('https://chitter-backend-api-v2.herokuapp.com/users', {
      headers: {'Content-Type': 'application/json'},
      method: "POST",
      body: JSON.stringify({
        user: {
          handle: handle,
          password: password
        }
      })
    }).then(response => response.json())
      .then(data => callback(data))
  }

  newSession(handle, password, callback) {
    fetch('https://chitter-backend-api-v2.herokuapp.com/sessions', {
      headers: {'Content-Type': 'application/json'},
      method: "POST",
      body: JSON.stringify({
        session: {
          handle: handle,
          password: password
        }
      })
    }).then(response => response.json())
      .then(data => callback(data))
  }
};

  // postMessge(user_id, session_key, message, callback) {
  //   fetch(`https://chitter-backend-api-v2.herokuapp.com/peeps?token=${session_key}`, {
  //     headers: {'Content-Type': 'application/json'},
  //     method: "POST",
  //     body: JSON.stringify({
  //       peeps: {
  //         user_id: user_id,
  //         body: message
  //       }
  //     })
  //   }).then(response => response.json())
  //     .then(data => callback(data))
  // }

module.exports = ChitterApi;