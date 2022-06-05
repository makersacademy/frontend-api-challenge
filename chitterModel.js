class ChitterModel {
  constructor() {
    this.peeps = [];
  }
 
  setPeeps(peeps){
    this.reset();
    peeps.forEach((peep) => this.addPeep(peep));
  }
 
  getPeeps() {
    return this.peeps;
  }
 
  addPeep(peep) {
    this.peeps.push(peep)
  }
 
  reset() {
    this.peeps = [];
  }
 
 };
module.exports = ChitterModel;