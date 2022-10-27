class ChitterClient{
  #BASE_URL = "https://chitter-backend-api-v2.herokuapp.com/";

  loadPeeps(cb) {
    fetch(this.#BASE_URL + "peeps")
      .then((response) => response.json())
      .then((data) => {
        console.log('Peeps are loaded');
        cb(data)
      })
    .catch(error => {
      console.log("Failed!", error);
    })
  }

  createUser(userId, password, cb) {
    const content = {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ "user": {"handle": userId, "password": password} })
    }
    fetch((this.#BASE_URL + "users"), content)
      .then((response) => response.json())
      .then((data) => { 
        console.log("Success!")
        cb(data)
      })
      .catch(error => {
        console.log("Failed!", error);
      })
  }
}

module.exports = ChitterClient;