class ChitterApi{

  loadPeeps(callback) {
    fetch('https://chitter-backend-api-v2.herokuapp.com/peeps')
    .then(response => response.json())
    .then(data => {
      callback(data)
    });
  };

  createPeep(newPeep) {
    const usersPeep = {peep:{ body:peep.body }};
    // const formData = new FormData
    // formData.append
    fetch('https://chitter-backend-api-v2.herokuapp.com/peeps', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify(usersPeep)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      return data
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };
}; 

module.exports = ChitterApi;