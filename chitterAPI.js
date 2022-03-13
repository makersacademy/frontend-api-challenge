class ChitterApi{

  loadPeeps(callback) {
    fetch('https://chitter-backend-api-v2.herokuapp.com/peeps')
    .then(response => response.json())
    .then(data => {
      callback(data)
    });
  };

  createPeep(peep) {
    const usersPeep = {body:peep.body}
    fetch('https://chitter-backend-api-v2.herokuapp.com/peeps', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify(usersPeep)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Working?:', data);
      return data
    });
  };
}; 

module.exports = ChitterApi;