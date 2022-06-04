class ChitterApi {

  fetchPeeps = (callback) => {
    try {
      fetch("https://chitter-backend-api-v2.herokuapp.com/peeps")
      .then(response => response.json())
      .then(data => callback(data));
    } catch(err) {
      return null;
    };
  };
}

module.exports = ChitterApi;