class ChitterApi {

  loadPeeps(callback) {
    fetch('https://chitter-backend-api-v2.herokuapp.com/peeps')
    .then(response => response.json())
    .then(data => {
      callback(data)
    })
  }

  createUser(handle, password, callback) {
    const dataString = JSON.stringify({user: {handle:handle, password:password }});

    fetch('https://chitter-backend-api-v2.herokuapp.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: dataString
      })
    .then(response => response.json())
    .then(data => callback(data))
    .catch(error => console.error('Error:', error));
  }

  createSession(handle, password, callback) {
    const dataString = JSON.stringify({session: {handle:handle, password:password }});

    fetch('https://chitter-backend-api-v2.herokuapp.com/sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: dataString
      })
    .then(response => response.json())
    .then(data => callback(data))
    .catch(error => console.error('Error:', error));
  }

  postPeep(userId, sessionKey, peep, callback) {
    const dataString = JSON.stringify({peep: {user_id:userId, body:peep }});

    fetch('https://chitter-backend-api-v2.herokuapp.com/peeps', {
      method: 'POST',
      headers: {
        'Authorization': `Token token=${sessionKey}`,
        'Content-Type': 'application/json'
      },
      body: dataString
      })
    .then(response => response.json())
    .then(data => callback(data))
    .catch(error => console.error('Error:', error));
  }
}

module.exports = ChitterApi;