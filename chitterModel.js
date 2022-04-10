class ChitterModel {
  constructor() {
    this.peepsArray = []
  }

  getPeeps() {
    return this.peepsArray;
  }

  addPeep(peep) {
    this.peepsArray.push(peep);
    return peep
  }
}

module.exports = ChitterModel;