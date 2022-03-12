
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

    const payload = JSON.stringify( {session: { handle:handle,password:password}})

    fetch('https://chitter-backend-api-v2.herokuapp.com/sessions', {
      method: 'POST',
      headers: header,
      body: payload
    })
      .then(response => response.json())
      .then(data => callback(data))
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  createPeep(userId, sessionKey, peep, callback) {

    const payload = JSON.stringify({peep: {user_id:userId, body:peep}});

    fetch('https://chitter-backend-api-v2.herokuapp.com/peeps', {
      method: 'POST',
      headers: {
        'Authorization': `Token token=${sessionKey}`,
        'Content-Type': 'application/json',
      },
      body: payload
      })
      .then(response => response.json())
      .then(data => callback(data))
      .catch(error => console.error('Error:', error));
  }
   
  
  createUser(handle, password,callback) {

    const payload = JSON.stringify({user: {handle:`${handle}`, password:`${password}`}});

    fetch('https://chitter-backend-api-v2.herokuapp.com/peeps', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: payload
      })
      .then(response => response.json())
      .then(data => callback(data))
      .catch(error => console.error('Error:', error));
  }
   

  
}


module.exports = ChitterApi;

// curl "https://chitter-backend-api-v2.herokuapp.com/peeps" \
//   -X POST \
//   -H "Authorization: Token token=_2a_12_OgUFkPaoieDiaqBvcMwb9O" \
//   -H "Content-Type: application/json" \
//   -d '{"peep": {"user_id":"860", "body":"hmmmm"}}'