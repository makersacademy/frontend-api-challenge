class PeepsApi {
  async loadPeeps(callback) {
    const response = await fetch(
      "https://chitter-backend-api-v2.herokuapp.com/peeps"
    );
    const data = await response.json();
    callback(data);
  }
}

module.exports = PeepsApi;
