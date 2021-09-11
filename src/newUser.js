class NewUser {
  createUser(handle = "testing", password = "test") {
    return fetch("https://chitter-backend-api-v2.herokuapp.com/users", {
      method: "POST",
      body: JSON.stringify({
        user: { handle: handle, password: password },
      }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((user) => {
        console.log(user);
        let element = document.querySelector("#createUser");
        if (user.handle[0] === "has already been taken") {
          element.innerHTML = `Sorry, ${handle} ${user.handle[0]}`;
        } else {
          element.innerHTML = `${user.handle} created!`;
        }
      });
  }
}
