class NewUser {
  async createUser(handle = "testing", password = "test") {
    const response = await fetch(
      "https://chitter-backend-api-v2.herokuapp.com/users",
      {
        method: "POST",
        body: JSON.stringify({
          user: { handle: handle, password: password },
        }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      }
    );
    const user = await response.json();
    let element = document.querySelector("#created");
    if (user.handle[0] === "has already been taken") {
      element.innerHTML = `Sorry, ${handle} ${user.handle[0]}`;
    } else {
      element.innerHTML = `${user.handle} created!`;
    }
  }
}
