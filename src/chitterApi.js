class chitterApi {
  constructor() {
    this.apiUrl = "https://chitter-backend-api-v2.herokuapp.com/peeps";
    this.apiCreateUserUrl =
      "https://chitter-backend-api-v2.herokuapp.com/users";
    this.apiLoginUserUrl =
      "https://chitter-backend-api-v2.herokuapp.com/sessions";
    this.apiCreatePeppUrl =
      "https://chitter-backend-api-v2.herokuapp.com/peeps";
  }
  async fetchAll() {
    return await fetch(this.apiUrl)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        return response;
      });
  }

  async createUser(_user, _password) {
    return await fetch(this.apiCreateUserUrl, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body:
        '{ "user": { "handle": "' +
        _user +
        '", "password": "' +
        _password +
        '" } }',
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        return response;
      });
  }

  async loginUser(_user, _password) {
    return await fetch(this.apiLoginUserUrl, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body:
        '{ "session": { "handle": "' +
        _user +
        '", "password": "' +
        _password +
        '" } }',
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        return response;
      });
  }

  async createPeep(_userId, _sessionKey, _peep) {
    return await fetch(this.apiCreatePeppUrl, {
      method: "POST",
      headers: {
        Authorization: "Token token=" + _sessionKey,
        "Content-type": "application/json",
      },
      body:
        '{ "peep": { "user_id": "' + _userId + '", "body": "' + _peep + '" } }',
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        return response;
      });
  }
}
