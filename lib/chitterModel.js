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

  removePeep(peepId){
    this.peeps.splice(this.peeps.findIndex(peep => peep.id === peepId),1)
  }
}

module.exports = ChitterModel;