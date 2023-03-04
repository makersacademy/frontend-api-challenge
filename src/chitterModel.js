class ChitterModel {
  constructor() {
    this.peeps = [];
  }

  addPeep(peep) {
    this.peeps.push(peep);
  }

  getPeeps() {
    return this.peeps;
  }

  setPeeps(peeps) {
    return (this.peeps = peeps);
  }
}

module.exports = ChitterModel;
