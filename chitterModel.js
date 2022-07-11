class ChitterModel {

  constructor(peeps = []) {
    this.loadedPeeps = peeps;
  }

  loadPeeps(peeps) {
    peeps.forEach((peep) => {
      this.loadedPeeps.push(peep);
    })
    console.log('Loaded peeps are as follows:')
    console.log(this.loadedPeeps);
  }

  returnLoadedPeeps() {
    return this.loadedPeeps;
  }

}

module.exports = ChitterModel