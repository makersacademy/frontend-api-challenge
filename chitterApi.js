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

  postMessage(userId, sessionKey, text, callback) {
    fetch(`https://chitter-backend-api-v2.herokuapp.com/peeps`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token token=${sessionKey}`
      },
      method: "POST",
      body: JSON.stringify({
        peep: {
          user_id: userId,
          body: text
        }
      })
    }).then(response => response.json())
      .then(data => callback(data))
  }
};

module.exports = ChitterApi;