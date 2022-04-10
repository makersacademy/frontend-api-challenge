class PeepsApi {
  async loadPeeps(callback) {
    const response = await fetch(
      "https://chitter-backend-api-v2.herokuapp.com/peeps"
    );
    const data = await response.json();
    callback(data);
  }

  async createPeep(peep, user, callback) {
    if (peep === "") {
      console.log("Cannot create an empty peep");
    } else {
      try {
        console.log(user);
        console.log(user.sessionKey);
        const response = await fetch(
          "https://chitter-backend-api-v2.herokuapp.com/peeps",
          {
            method: "POST",
            headers: {
              Authorization: "Token token=" + user.sessionKey,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ peep: { user_id: user.id, body: peep } }),
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

  async createUser(newUser, password, callback) {
    if (newUser === "" || password === "") {
      console.log("Please enter valid username or password");
    } else {
      try {
        console.log(newUser);
        console.log(password);

        const b = {
          user: { handle: newUser, password: password },
        };
        console.log(b);

        const response = await fetch(
          "https://chitter-backend-api-v2.herokuapp.com/users",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              user: { handle: newUser, password: password },
            }),
          }
        );
        const data = await response.json();
        console.log(data);
        callback(data);
      } catch (error) {
        console.log(error);
      }
    }
  }

  async signinUser(signinUser, signinPassword, callback) {
    if (signinUser === "" || signinPassword === "") {
      console.log("Please enter valid username or password");
    } else {
      try {
        const response = await fetch(
          "https://chitter-backend-api-v2.herokuapp.com/sessions",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              session: { handle: signinUser, password: signinPassword },
            }),
          }
        );
        const data = await response.json();
        console.log(data);
        callback(data);
      } catch (error) {
        console.log(error);
      }
    }
  }
}

module.exports = PeepsApi;
