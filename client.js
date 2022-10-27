class Client {

  loadPeeps = (displayResult) => {
    fetch('https://chitter-backend-api-v2.herokuapp.com/peeps')
    .then((response) => response.json())
    .then((data) => {
      displayResult(data);
    })
    .catch((error) => {
      console.log(error); // change to Display Error method
    })
  }
}

module.exports = Client;