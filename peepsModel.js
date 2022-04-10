class PeepsModel {
  constructor(api) {
    this.api = api;
  }

  getPeeps(callback) {
    this.api.loadPeeps((data) => {
      callback(data);
    });
  }

  addPeep(peep, callback) {
    this.api.createPeep((data) => {
      callback(data);
    });
  }
}

module.exports = PeepsModel;
