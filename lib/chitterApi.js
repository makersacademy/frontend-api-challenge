
class ChitterApi {

  loadPeeps(callback) {
    fetch('https://chitter-backend-api-v2.herokuapp.com/peeps')
      .then(response => response.json())
      .then(data => {
        callback(data)
      });
  }

  startSession(handle, password, callback) {
    fetch('https://chitter-backend-api-v2.herokuapp.com/sessions', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({session: { handle:`${handle}`,password:`${password}`}})
    })
      .then(response => response.json())
      .then(data => callback(data))
      .catch((error) => {
        console.error('Error:', error);
      });
  }
}


module.exports = ChitterApi;