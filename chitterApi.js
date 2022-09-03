class ChitterApi {
  fetchPeeps(callback) {
    fetch("https://chitter-backend-api-v2.herokuapp.com/peeps")
      .then((response) => response.json())
      .then(callback);
  }
}

module.exports = ChitterApi;
