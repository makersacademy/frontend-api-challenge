class ChitterModel {
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
    this.reset();
    peeps.forEach((peep) => this.addPeep(peep));
  }

  reset() {
    this.peeps = [];
  }
}

module.exports = ChitterModel;
