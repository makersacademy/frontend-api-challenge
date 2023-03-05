class ChitterModel {
  constructor() {
    this.peeps = [];
  }

  addPeep(peep) {
    this.peeps.push(peep);
  }

  getPeeps() {
    return this.peeps;
  }

  setPeeps(peeps) {
    this.peeps = peeps;
    return this.peeps;
  }

  getPeepById(id) {
    return this.peeps.find((peep) => peep.id === id);
  }
}

module.exports = ChitterModel;
