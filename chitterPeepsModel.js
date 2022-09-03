class ChitterPeepsModel {
  constructor() {
    this.peepsArray = [];
  }

  setPeeps(peepsArray) {
    this.peepsArray = peepsArray;
  }

  loadPeeps() {
    return this.peepsArray;
  }
}

module.exports = ChitterPeepsModel;
