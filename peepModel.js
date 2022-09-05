class PeepModel {
  constructor() {
    this.peeps = [];
  }
  getPeeps() {
    return this.peeps;
  }
  addPeep(peep) {
    this.peeps.push(peep);
  }
  setPeeps(peeps) {
    this.peeps = peeps;
  }
  reset() {
    this.peeps = [];
  }
}

module.exports = PeepModel;
