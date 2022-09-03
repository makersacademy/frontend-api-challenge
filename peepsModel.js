class PeepsModel {
  constructor() {
    this.peeps = [];
  }

  getPeeps() {
    return this.peeps;
  }

  setPeeps(peeps) {
    this.peeps = peeps;
  }

  reset() {
    this.peeps = [];
  }
}

module.exports = PeepsModel;
