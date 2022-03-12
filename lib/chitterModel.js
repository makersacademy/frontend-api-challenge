class ChitterModel {

  constructor() {
    this.peeps = []
  }

  addPeep(peep) {
    this.peeps.unshift(peep);
  }

  getPeeps(){
    return this.peeps
  }

  setPeeps(peeps){
    this.peeps = peeps
  }
}

module.exports = ChitterModel;