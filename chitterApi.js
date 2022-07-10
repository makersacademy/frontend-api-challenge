class ChitterApi {
  loadPeeps(callback) {
    fetch('https://chitter-backend-api-v2.herokuapp.com/')
      .then(response => response.json())
      .then(peeps => callback(peeps));
  }
}

module.exports = ChitterApi;