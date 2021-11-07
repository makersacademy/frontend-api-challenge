const displayLogin = require("../display/displayLogin");

attemptRegister = (username, password) => {
  fetch("https://chitter-backend-api-v2.herokuapp.com/users", {
    method: 'post',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "user":{
        "handle":`${username}`,
        "password":`${password}`
      }
    })
  })
  displayLogin();
}

module.exports = attemptRegister;