let createUser = (handleInput, passwordInput, callBack) => {
  let data = {"user": {"handle": handleInput, "password" : passwordInput}}
  fetch("https://chitter-backend-api-v2.herokuapp.com/users", {
    method: 'post',
    headers: {
      //"Accept": "application/json",
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(data)

  })
    .then(response => response.json())
    .then(output => {
      callBack(output)
    })
}

/*
curl "https://chitter-backend-api-v2.herokuapp.com/users" \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"user": {"handle":"kay", "password":"mypassword"}}'
*/

module.exports = createUser