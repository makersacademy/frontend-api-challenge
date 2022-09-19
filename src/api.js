class Api {
  loadPeeps(callback) {}

  createSession(username, password, callback) {
    fetch("https://chitter-backend-api-v2.herokuapp.com/sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        session: { handle: `${username}`, password: `${password}` },
      }),
    })
      .then((response) => response.json())
      .then((data) => callback(data))
      .catch((error) => console.log(error));
  }

  createUser(username, password, callback) {
    fetch("https://chitter-backend-api-v2.herokuapp.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: { handle: username, password: password },
      }),
    })
      .then((response) => response.json())
      .then((data) => callback(data))
      .catch((error) => console.log(error));
  }

  loadPeeps(callback) {
    fetch("https://chitter-backend-api-v2.herokuapp.com/peeps")
      .then((response) => response.json())
      .then((data) => callback(data));
  }

  postPeep(peepContent, user_id, user_session, callback) {
    fetch('https://chitter-backend-api-v2.herokuapp.com/peeps', {
      method: "POST",
      headers: {
        "Authorization": "Token token=" + user_session,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        peep: { user_id: user_id, body: peepContent }
      })
    })
      .then((response) => response.json())
      .then((data) => callback(data))
      .catch((error) => console.log(error))
  }
}

module.exports = Api;
