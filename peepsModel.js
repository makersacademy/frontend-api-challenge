class PeepsModel {
  constructor(api) {
    this.peeps = [];
    this.api = api;
  }

  getPeeps(callback) {
    this.api.loadPeeps((data) => {
      callback(data);
    });
  }

  addPeep(peep) {
    this.peeps.push(peep);
  }
}

module.exports = PeepsModel;
