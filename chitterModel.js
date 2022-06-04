class ChitterModel {
  constructor() {
    this.peeps = []
  }

  getPeeps = () => this.peeps;

  addPeep = (peep) => this.peeps.push(peep);


}

module.exports = ChitterModel;

//  api > model > view