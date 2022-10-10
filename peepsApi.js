class PeepsApi {
  loadPeeps (callback, callbackError) {
    fetch('https://chitter-backend-api-v2.herokuapp.com/peeps')
    .then((response) => response.json())
    .then((json) => callback(json))
    .catch((error) => callbackError(error))
  }

  loadSinglePeep (id, callback, callbackError) {
    fetch('https://chitter-backend-api-v2.herokuapp.com/peeps/' + id)
    .then((response) => response.json())
    .then((json) => callback(json))
    .catch((error) => callbackError(error))
  }

  createUser (userName, password, callback, callbackError) {
    const userObject = {user: {
      handle: userName,
      password: password
    }};

    fetch('https://chitter-backend-api-v2.herokuapp.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userObject),
    })
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((error) => callbackError(error))
  }
  ß

  loadSession(userName, password, callback, callbackError) {

    const userObject = { 
      session: {
        handle: userName,
        password: password
      }
    };

    fetch('https://chitter-backend-api-v2.herokuapp.com/sessions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userObject)
    })
      .then(response => response.json())
      .then((data) => callback(data))
      .catch((error) => callbackError(error))
  }


}
  

module.exports = PeepsApi;
