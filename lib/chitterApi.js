
class ChitterApi {

  loadPeeps(callback) {
    fetch('https://chitter-backend-api-v2.herokuapp.com/peeps')
      .then(response => response.json())
      .then(data => {
        callback(data)
      });
  }

  startSession(handle, password, callback) {
    let header = new Headers()
    header.set('content-type', 'application/json');

    fetch('https://chitter-backend-api-v2.herokuapp.com/sessions', {
      method: 'POST',
      headers: header,
      body: JSON.stringify({session: { handle:`${handle}`,password:`${password}`}})
    })
      .then(response => response.json())
      .then(data => callback(data))
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  createPeep(userId, sessionKey, peep, callback) {

      const payload = {peep: {user_id:`${userId}`, body:`${peep}`}};

      fetch('https://chitter-backend-api-v2.herokuapp.com/peeps', {
        method: 'POST',
        headers: {
          'Authorization': `Token token=${sessionKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
        })
        .then((response) => {
          return response.json()
        })
        .then(data => callback(data))
        .catch((error) => {
          console.error('Error:', error);
   

        });

      }
    
  
}


module.exports = ChitterApi;

// curl "https://chitter-backend-api-v2.herokuapp.com/peeps" \
//   -X POST \
//   -H "Authorization: Token token=_2a_12_OgUFkPaoieDiaqBvcMwb9O" \
//   -H "Content-Type: application/json" \
//   -d '{"peep": {"user_id":"860", "body":"hmmmm"}}'