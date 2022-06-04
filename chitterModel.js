class ChitterModel {
  constructor() {
    this.peeps = []
  }

  getPeeps = () => this.peeps;

  addPeep = (peep) => this.peeps.push(peep);

  reset = () => this.peeps = [];

}

module.exports = ChitterModel;

//  api > model > view