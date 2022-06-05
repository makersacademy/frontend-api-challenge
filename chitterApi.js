class ChitterApi {

  fetchPeeps = (callback) => {
    try {
      fetch("https://chitter-backend-api-v2.herokuapp.com/peeps")
      .then(response => response.json())
      .then(data => callback(data));
    } catch(err) {
      return null;
    };
  };

  userAuthorisation(handle, password, callback) {
    try {
      fetch('https://chitter-backend-api-v2.herokuapp.com/sessions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "session": {
            "handle":handle,
            "password":password
          }
        })
      })
      .then(response => response.json())
      .then(data => callback(data));
      // catch doesn't seem to be working as I want it to.
      // doesn't log the error in the format I want.
    } catch (error) {
      console.error('There was an error!', error); 
    }
  }
}

module.exports = ChitterApi;