class PeepsModel {

  constructor () {
    this.peeps = [];
  }

  addPeep (peep) {
    this.peeps.push(peep);
  }

  getPeeps () {
    return this.peeps;
  }

  setPeeps (data) {
    this.peeps = data;
  }
}

module.exports = PeepsModel;