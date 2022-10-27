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
        console.log("A new user created")
        cb(data)
      })
      .catch(error => {
        console.log("Failed!", error);
      })
  }

  newSession(userId, password, cb) {
    const content = {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ "session": {"handle":userId, "password":password} })
    }

    fetch((this.#BASE_URL + "sessions"), content)
    .then((response) => response.json())
    .then((data) => { 
      console.log("A session created!")
      cb(data)
    })
    .catch(error => {
      console.log("Failed!", error);
    })
  }

  addPeep(userId, sessionKey, newPeep, cb) {
    const content = {
      method: 'POST',
      headers: { 
        "Content-Type": "application/json",
        "Authorization": `Token token=${sessionKey}`
     },
      body: JSON.stringify({"peep": {"user_id":userId, "body": newPeep}})
    }
    
    fetch((this.#BASE_URL + "peeps"), content)
    .then((response) => response.json())
    .then((data) => { 
      console.log("A new peep created!")
      cb(data)
    })
    .catch(error => {
      console.log("Failed!", error);
    })
  }
}

module.exports = ChitterClient;