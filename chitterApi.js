class ChitterApi {
  fetchPeeps(callback) {
    fetch("https://chitter-backend-api-v2.herokuapp.com/peeps")
      .then((response) => response.json())
      .then(callback);
  }

  createUser(newUsername, newPassword, callback) {
    fetch("https://chitter-backend-api-v2.herokuapp.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: { handle: newUsername, password: newPassword },
      }),
    })
      .then((response) => response.json())
      .then(callback);
  }

  loginUser(username, password, callback) {
    fetch("https://chitter-backend-api-v2.herokuapp.com/sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        session: { handle: username, password: password },
      }),
    })
      .then((response) => response.json())
      .then(callback);
  }

  postPeep(sessionKey, userId, peepBody, callback) {
    fetch("https://chitter-backend-api-v2.herokuapp.com/peeps", {
      method: "POST",
      headers: {
        Authorization: `Token token=${sessionKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        peep: {
          user_id: userId,
          body: peepBody,
        },
      }),
    })
      .then((response) => response.json())
      .then(callback);
  }
}

module.exports = ChitterApi;

// curl "https://chitter-backend-api-v2.herokuapp.com/peeps" \
//   -X POST \
//   -H "Authorization: Token token=a_valid_session_key" \
//   -H "Content-Type: application/json" \
//   -d '{"peep": {"user_id":1, "body":"my first peep :)"}}'
