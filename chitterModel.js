class ChitterModel {
  constructor() {
    this.peeps = []
  }

  getPeeps() {
    return this.peeps
  }

  setPeeps(returnedPeeps) {
    this.peeps = returnedPeeps;
  }

  addPeeps(peep) {
    this.peeps.unshift(peep);
  }
}

module.exports = ChitterModel;