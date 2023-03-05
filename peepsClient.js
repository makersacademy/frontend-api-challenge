class PeepsClient {

  loadPeeps (callback) {
    fetch('https://chitter-backend-api-v2.herokuapp.com/peeps')
    .then(response => response.json())
    .then(data => 
      callback(data))
    .catch(error => {
      displayError(error);  
  })
}}

module.exports = PeepsClient;