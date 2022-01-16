/* eslint-disable require-jsdoc */
class ChitterApi {
  loadPeeps(callback) {
    fetch('https://chitter-backend-api-v2.herokuapp.com/peeps')
      .then((data) => data.json())
      .then((data) => { callback(data); });
  }
}

module.exports = ChitterApi;