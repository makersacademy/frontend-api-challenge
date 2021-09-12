class userApi {

  static addUser(handle, password) {

    console.log(handle, password)
    fetch("https://chitter-backend-api-v2.herokuapp.com/users", {
      method: 'POST',
      headers: {
        "Content-Type" : "application/json",
      },
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify({
        "user": {"handle": "anotherHandle", "password": "anotherPassword"}
      })
    });

  }
}