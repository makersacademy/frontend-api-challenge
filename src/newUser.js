class NewUser {
  createUser(handle = "sept2021 test", password = "test") {
    return fetch("https://chitter-backend-api-v2.herokuapp.com/users", {
      method: "POST",
      body: JSON.stringify({
        user: { handle: handle, password: password },
      }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((user) => {
        document.querySelector("#userCreated").innerHTML = user.handle;
      });
  }
}
