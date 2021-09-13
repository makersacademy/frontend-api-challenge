"use strict";

class UserLogIn {
  async logIn(handle, password) {
    const response = await fetch(
      "https://chitter-backend-api-v2.herokuapp.com/sessions",
      {
        method: "POST",
        body: JSON.stringify({
          session: { handle: handle, password: password },
        }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      }
    );
    const user = await response.json();
    // need to check user message - if OK, return positive message, if not try again message
    document.querySelector("#loggedon").innerHTML = "Logged in successfully!";
    sessionStorage.setItem("token", user.session_key);
    sessionStorage.setItem("user_id", user.user_id);
  }
}
