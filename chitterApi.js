class ChitterApi {
  loadPeeps(callback) {
    fetch('https://chitter-backend-api-v2.herokuapp.com/peeps')
    .then((response) => response.json())
    .then((data) => {
      return callback(data);
    });
  }

  login(username, password, callback) {
    fetch("https://chitter-backend-api-v2.herokuapp.com/sessions", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        session: {
          handle: `${username}`,
          password: `${password}`
        }
      })
    }).then((response) => response.json())
    .then((data) => {
      return callback(data);
    });
  }

  newPeep(message, sessionKey, userId, callback) {
    fetch("https://chitter-backend-api-v2.herokuapp.com/peeps", {
      method: 'POST',
      headers: {
        'Authorization': `Token token=${sessionKey}`,
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify({
        peep: {
          user_id: `${userId}`,
          body: `${message}`
        }
      })
    }).then((response) => response.json())
    .then((data) => {
      return callback(data);
    });
  }
}

module.exports = ChitterApi;