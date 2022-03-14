class ChitterApi {
  loadPeeps(callback) {
    fetch("https://chitter-backend-api-v2.herokuapp.com/peeps")
    .then(response => response.json())
    .then(data => {
      callback(data)
    });
   }

   createPeep(peep, callback) {
    
    fetch('https://chitter-backend-api-v2.herokuapp.com/peeps', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({content: `${peep}`})
    })
    .then(response => response.json())
    .then(data => {
      callback(data)
    });
  }
}

module.exports = ChitterApi