class ChitterClient {
  async loadPeeps() {
    const response = await fetch(
      "https://chitter-backend-api-v2.herokuapp.com/peeps"
    );
    const data = await response.json();
    return data;
  }
}
module.exports = ChitterClient;
