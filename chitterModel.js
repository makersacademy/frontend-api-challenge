class ChitterModel {
  constructor() {
    this.peeps = null
  }

  loadPeeps() {
    return this.peeps;
  }
 
   addPeep(peep) {
      this.peeps.push(peep);
   }
 
   setPeeps(peeps) {
      this.peeps = peeps;
   }
 
   reset() {
      this.peeps = [];
   }
}

module.exports = ChitterModel;