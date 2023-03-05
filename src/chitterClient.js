class ChitterClient {
  async loadPeeps() {
    const response = await fetch(
      "https://chitter-backend-api-v2.herokuapp.com/peeps"
    );
    const data = await response.json();
    console.log(Array.isArray(data));
    console.log(`Data---------`, data);
    return data;
  }
}
module.exports = ChitterClient;
