class ChitterApi {
    loadPeeps(callback) {
      fetch('https://chitter-backend-api-v2.herokuapp.com/')
      fetch('https://chitter-backend-api-v2.herokuapp.com/peeps')
        .then(response => response.json())
        .then(peeps => callback(peeps));
    };
};

module.exports = ChitterApi;