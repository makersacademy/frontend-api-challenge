class ChitterModel {
  constructor() {
    this.peeps = [];
  }

  getPeeps() {
    return this.peeps;
  }

  addPeep(peep) {
    return this.peeps.push(peep);
  }

  deletePeep() {
    return this.peeps = []
  }
}

module.exports = ChitterModel;