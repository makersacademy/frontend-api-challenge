class ChitterApi {
  async fetchPeeps() {
    const response = await fetch(
      "https://chitter-backend-api-v2.herokuapp.com/peeps"
    );

    const peeps = await response.json();
    return peeps;
  }
}

module.exports = ChitterApi;
