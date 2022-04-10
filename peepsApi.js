class PeepsApi {
  async loadPeeps(callback) {
    const response = await fetch(
      "https://chitter-backend-api-v2.herokuapp.com/peeps"
    );
    const data = await response.json();
    callback(data);
  }

  async createPeep(peep, callback) {
    if (peep === "") {
      console.log("Cannot create an empty peep");
    } else {
      try {
        const response = await fetch(
          "https://chitter-backend-api-v2.herokuapp.com/peeps",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ content: peep }),
          }
        );
        const data = await response.json();
        console.log(data);
        callback(data);
      } catch (error) {
        console.log(error.message, error.name);
      }
    }
  }
}

module.exports = PeepsApi;
