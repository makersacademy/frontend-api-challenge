"use strict";

class UserLogIn {
  logIn(handle, password) {
    return fetch("https://chitter-backend-api-v2.herokuapp.com/sessions", {
      method: "POST",
      body: JSON.stringify({
        session: { handle: handle, password: password },
      }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((user) => {
        // need to check user message - if OK, return positive message, if not try again message
        document.querySelector("#loggedon").innerHTML =
          "Logged in successfully!";
        console.log(user); // user id & session key in here!
      });
  }
}
