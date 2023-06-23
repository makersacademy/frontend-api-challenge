class ChitterClient {
  loadPeeps(callback) {
    fetch("https://chitter-backend-api-v2.herokuapp.com/peeps")
      .then((response) => response.json())
      .then((data) => callback(data));
  }

  signupUser(user, callback) {
    fetch("https://chitter-backend-api-v2.herokuapp.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          handle: user.handle,
          password: user.password,
        },
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to signup user");
        }
        return response.json();
      })
      .then((data) => {
        callback(data);
      })
      .catch((error) => {
        console.error("Error signing up user:", error);
      });
  }

  loginUser(user, callback) {
    fetch("https://chitter-backend-api-v2.herokuapp.com/sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        session: {
          handle: user.handle,
          password: user.password,
        },
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to login user");
        }
        return response.json();
      })
      .then((data) => {
        callback(data);
      })
      .catch((error) => {
        console.error("Error logging in user:", error);
      });
  }
}

module.exports = ChitterClient;
