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

}

module.exports = PeepsModel