class ChitterApi {
  loadPeeps(callback) {
    fetch('https://chitter-backend-api-v2.herokuapp.com/peeps')
    .then((response) => response.json())
    .then((data) => {
      return callback(data);
    });
  }
}

module.exports = ChitterApi;