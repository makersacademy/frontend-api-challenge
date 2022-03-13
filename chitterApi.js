class ChitterApi {
  loadPeep(callback) {
    fetch('https://chitter-backend-api-v2.herokuapp.com/peeps')
      .then(response => response.json())
      .then(data => {
         callback(data)
    });
  };


  createPeep(peep, callback) {
    //console.log("CREATE PEEEP"); 
    const userId=906; 
    const sessionKey = "_2a_12_of40eJQ4vUPfupwnhoVj8O";
   // const newPeep = JSON.stringify({peep: {user_id:userId, body:peep}});
    fetch('https://chitter-backend-api-v2.herokuapp.com/peeps', {
      method: 'POST',
      data: { username: 'SaM', password: 'SAMpassword' },
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
}
  module.exports = ChitterApi;