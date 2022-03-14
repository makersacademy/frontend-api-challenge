class ChitterApi {
  loadPeep(callback) {
    fetch('https://chitter-backend-api-v2.herokuapp.com/peeps')
      .then(response => response.json())
      .then(data => {
         callback(data)
    });
  };

    createPeep(peep, userId, sessionKey, callback) {
    fetch('https://chitter-backend-api-v2.herokuapp.com/peeps', {
      method: 'POST',
      headers: {
        'Authorization': `Token token=${sessionKey}`,
        'Content-Type': 'application/json',
     },
      body: JSON.stringify({peep: {user_id:userId, body:peep}})
      })
    .then(response => response.json())
    .then(data => callback(data))
    .catch(error => console.error('Error:', error));
  }

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
      .catch(error => {
       alert("Your handle or password is incorrect");
        // .catch(error => 
        // console.error('Error:', error));
     })
  };
 
}
  module.exports = ChitterApi;