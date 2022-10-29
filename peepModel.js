class PeepModel {
  constructor() {
    this.peeps = [];
  }

  setPeeps = (peeps) => {
    this.peeps = peeps;
  }

  getPeeps = () => {
    return this.peeps;
  }

  addPeep = (peep) => {
    this.peeps.push(peep);
  }
}

module.exports = PeepModel;