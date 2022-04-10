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

  setPeeps(peepsFromBackend) {
    peepsFromBackend.forEach(peep => {
      this.peepsArray.push(peep.body)
    })
    return this.peepsArray
  }
}

module.exports = ChitterModel;