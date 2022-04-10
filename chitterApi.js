class ChitterApi {

  loadPeeps(callback) {
    fetch("https://chitter-backend-api-v2.herokuapp.com/peeps")
      .then(response =>{ return response.json()})
      .then(data => {
        callback(data)
      });
  };
}

module.exports = ChitterApi;