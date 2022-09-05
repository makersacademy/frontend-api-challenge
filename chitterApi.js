class ChitterApi {

  loadPeeps(callback) {
    const callbackFn = callback || (() => { })
    fetch('https://chitter-backend-api-v2.herokuapp.com/peeps')
      .then(response => response.json())
      .then((data) => callbackFn(data));
  }

  createUser(user, callback) {
    const callbackFn = callback || (() => { })
    fetch('https://chitter-backend-api-v2.herokuapp.com/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(data => callbackFn(data));
  }

  loadSession(session, callback) {
    const callbackFn = callback || (() => { })
    fetch('https://chitter-backend-api-v2.herokuapp.com/sessions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(session)
    })
      .then(response => response.json())
      .then(data => callbackFn(data));
  }

  postPeep(token, peep, callback) {
    const callbackFn = callback || (() => { })
    fetch('https://chitter-backend-api-v2.herokuapp.com/peeps', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token token=' + token
      },
      body: JSON.stringify(peep)
    })
      .then(response => response.json())
      .then(data => callbackFn(data));
  }

}

module.exports = ChitterApi;
