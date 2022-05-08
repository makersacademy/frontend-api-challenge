class ChitterModel {
  constructor() {
    this.peeps = [];
  }

  getPeeps() {
    return this.peeps;
  }

  addPeeps(peep) {
    return this.peeps.push(peep)
  }
}

module.exports = ChitterModel;
