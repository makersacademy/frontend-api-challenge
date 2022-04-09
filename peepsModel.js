class PeepsModel {
  constructor(api) {
    this.peeps = [];
    this.api = api;
  }

  getPeeps() {
    return this.api.loadPeeps();
  }

  addPeep(peep) {
    this.peeps.push(peep);
  }
}

module.exports = PeepsModel;
