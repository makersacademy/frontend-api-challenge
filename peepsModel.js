class PeepsModel {

  constructor() {
    this.peeps = []
  }

  getPeeps() {
    return this.peeps
  }

  addPeep(peep) {
    this.peeps.push(peep)
  }

  setPeeps(peeps) {
    this.peeps = peeps
  }

}

module.exports = PeepsModel