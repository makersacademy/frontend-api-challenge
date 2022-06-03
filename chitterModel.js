class ChitterModel {
  constructor() {
    this.chits = []
  }

  getChits() {
   return this.chits 
  }
  
  addChit(chit) {
    this.chits.push(chit) 
  }
}

module.exports = ChitterModel;