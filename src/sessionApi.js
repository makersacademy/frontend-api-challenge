class sessionApi {

  static newSession(handle, password) {
    return fetch("https://chitter-backend-api-v2.herokuapp.com/sessions", {
      method: 'POST',
      headers: {
        "Content-Type" : "application/json",
      },
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify({
        "session": {"handle": "test123", "password": "test123"}
      })
    }).then(response => response.json());
  }
}