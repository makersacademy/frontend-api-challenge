class ApiChitter {
  constructor(api = 'https://chitter-backend-api-v2.herokuapp.com/peeps') {
    this.api = api;
  }

  loadPeeps(callback) {
    fetch(this.api)
      .then((response) => response.json())
      .then((data) => callback(data));
  }

  createPeep(body, handle, callback) {
    fetch('https://chitter-backend-api-v2.herokuapp.com/users', {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({
        user: {
          body: body,
          handle: handle
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => callback(data));
  }
}

module.exports = ApiChitter;
