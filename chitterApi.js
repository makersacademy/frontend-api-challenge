class ChitterApi {
  constructor() {
    this.baseUrl = "https://chitter-backend-api-v2.herokuapp.com/";
  }

  getPeeps(errorCallback, callback) {
    try {
      fetch(this.baseUrl + "/peeps")
        .then((response) => response.json())
        .then((data) => callback(data));
    } catch (error) {
      errorCallback(error);
    }
  }
}

module.exports = ChitterApi;
