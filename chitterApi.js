class ChitterApi {
  async fetchPeeps() {
    const response = await fetch(
      "https://chitter-backend-api-v2.herokuapp.com/peeps"
    );

    const peeps = await response.json();
    return peeps;
  }

  async createUser(handle, password) {
    const response = await fetch(
      "https://chitter-backend-api-v2.herokuapp.com/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: { handle: handle, password: password },
        }),
      }
    );
    const user = await response.json();
    return user;
  }

  async logInUser(handle, password) {
    const response = await fetch(
      "https://chitter-backend-api-v2.herokuapp.com/sessions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          session: { handle: handle, password: password },
        }),
      }
    );
    const confirmation = await response.json();
    return confirmation;
  }
}

module.exports = ChitterApi;
