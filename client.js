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

  createUser = (inputUsername, inputPassword, displayResult) => {
    fetch('https://chitter-backend-api-v2.herokuapp.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user: {handle:inputUsername, password:inputPassword}})
    })
    .then((response) => response.json())
    .then((output) => {
      console.log(output); // remove later maybe
      displayResult(output);
    })
    .catch((error) => {
      console.log(error); // change to Display Error method?
    })

  }
}

module.exports = Client;