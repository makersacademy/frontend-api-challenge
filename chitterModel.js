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

  setPeeps(data) {
    this.peeps = data
  }
}

module.exports = ChitterModel