class ChitterModel {

  constructor(peeps = []) {
    this.loadedPeeps = peeps;
  }

  returnLoadedPeeps() {
    return this.loadedPeeps;
  }

}

module.exports = ChitterModel