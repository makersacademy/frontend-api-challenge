class PeepsApi {

  getPeeps(callback) {
    fetch('https://chitter-backend-api-v2.herokuapp.com/peeps$top=50')
      .then(response => response.json())
      .then(data => {
        callback(data)
        console.log(data)
      });
  }

}

module.exports = PeepsApi
