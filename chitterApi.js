class ChitterApi {
  loadPeeps(callback) {
    fetch("https://chitter-backend-api-v2.herokuapp.com/peeps")
      .then(response => response.json())
      .then(peeps => callback(peeps));
  }

  addUser(username, password, callback) {
    const data = {"user": {"handle":username, "password":password}}
    fetch("https://chitter-backend-api-v2.herokuapp.com/users", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then(data => { callback(data) } )
  }

  login(username, password, callback) {
    const data = {"session": {"handle":username, "password":password}}
    fetch("https://chitter-backend-api-v2.herokuapp.com/sessions", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then(data => { callback(data) })
  }

  addPeep(sessionKey, sessionID, peep, callback) {
    const data = {"peep": {"user_id":sessionID, "body":peep}}
    fetch("https://chitter-backend-api-v2.herokuapp.com/peeps", {
      method: "POST",
      headers: {
        "Authorization": `Token token=${sessionKey}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then(data => { callback(data) });
  }
}

module.exports = ChitterApi;


// curl "https://chitter-backend-api-v2.herokuapp.com/peeps" \
//   -X POST \
//   -H "Authorization: Token token=a_valid_session_key" \
//   -H "Content-Type: application/json" \
//   -d '{"peep": {"user_id":1, "body":"my first peep :)"}}'
// On success, the above command returns JSON structured like this:

// {
//   "id": 3,
//   "body": "my first peep :)",
//   "created_at": "2018-06-23T13:21:23.317Z",
//   "updated_at": "2018-06-23T13:21:23.317Z",
//   "user": {
//     "id": 1,
//     "handle": "kay"
//   },
//   "likes": [{
//     "user": {
//       "id": 1,
//       "handle": "kay"
//     }
//   }]
// }