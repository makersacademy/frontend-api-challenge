class ChitterModel{
  constructor() {
    this.peeps = []
  }
  
  getPeeps() {
    return this.peeps
  }

  addPeeps(peep) {
    this.peeps.push(peep)
  }

  reset() {
    this.peeps = []
  }

  set(peeps) {
    this.peeps = peeps
  }
}

module.exports = ChitterModel;