class PeepsModel {
  constructor () {
    this.allPeeps = []
  }

  addPeep(peep) {
    this.allPeeps.push(peep)
  }

  getPeeps() {
    return this.allPeeps
  }

  setPeeps(data) {
    data.forEach ((peep) => this.allPeeps.push(peep))
  }
}

module.exports = PeepsModel;