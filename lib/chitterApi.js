class ChitterApi {
  constructor() {
    this.baseUrl = "https://chitter-backend-api-v2.herokuapp.com/";
  }

  getPeeps = (callback) => {
    fetch(this.baseUrl + "peeps")
      .then((response) => response.json())
      .then((data) => {
        callback(data);
      });
  };
  createUser = (user, callback) => {
    fetch(this.baseUrl + "/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        callback(data);
      });
  };
}

module.exports = ChitterApi;
