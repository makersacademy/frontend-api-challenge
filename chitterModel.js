class ChitterModel {
  constructor() {
    this.peeps = []
  }
  getPeeps() {
    return this.peeps
  }

  addPeep(peep) {
    this.peeps.push(peep);
  }

  reset() {
    this.peeps = []
  }
}

module.exports = ChitterModel