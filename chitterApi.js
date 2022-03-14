class ChitterApi {

  loadPeeps(peeps) {

    fetch('https://chitter-backend-api-v2.herokuapp.com/peeps')
      .then(response => response.json())
      .then(data => {
        peeps(data)
      });

  };

  postPeep(userId, sessionKey, peep, callback) {

    fetch('https://chitter-backend-api-v2.herokuapp.com/peeps', {
      method: 'POST',
      headers: {
        'Authorization': `Token token=${sessionKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({peep: {user_id:userId, body:peep}}),
    })
    .then(response => response.json())
      .then(data => callback(data))
      .catch(error => console.error('Error:', error));

  };

  startChitterSession(handle, password, callback) {

    fetch('https://chitter-backend-api-v2.herokuapp.com/sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify( {session: {handle:handle, password:password}})
    })
      .then(response => response.json())
      .then(data => callback(data))
      .catch(error => 
        console.error('Error:', error));

  };

  createChitterUser(handle, password, callback) {

    fetch('https://chitter-backend-api-v2.herokuapp.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( {user: {handle:handle, password:password}})
      })
      .then(response => response.json())
      .then(data => callback(data))
      // .catch(error => console.error('Error:', error));
      .catch((error) => { 
        error("User already exists")
        console.log(`${error}`)
      });

  };
   
}

module.exports = ChitterApi;