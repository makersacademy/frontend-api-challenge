
class ChitterApi {

  loadPeeps(callback) {
    fetch('https://chitter-backend-api-v2.herokuapp.com/peeps')
      .then(response => response.json())
      .then(data => {
        callback(data)
      });
  }

  // Trying out an async function with await
  async startSession(handle, password, callback) {
    let header = new Headers()
    header.set('content-type', 'application/json');

    try{
      const payload = JSON.stringify( {session: { handle:handle,password:password}})

      const response = await fetch('https://chitter-backend-api-v2.herokuapp.com/sessions', {
        method: 'POST',
        headers: header,
        body: payload
      })

      const json = await response.json()
      
      callback(json)
    }
    catch(error) {
      console.error('Error:', error);
    }
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

    const payload = JSON.stringify({user: {handle:handle, password:password}});

    fetch('https://chitter-backend-api-v2.herokuapp.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: payload
      })
      .then(response => response.json())
      .then(data => callback(data))
      .catch(error => console.error('Error:', error));
  }
   
  deletePeep(peepId, sessionKey) {
    fetch(`https://chitter-backend-api-v2.herokuapp.com/peeps/${peepId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Token token=${sessionKey}`,
      }
      })
      .catch(error => console.error('Error:', error));
  }

}

module.exports = ChitterApi;
