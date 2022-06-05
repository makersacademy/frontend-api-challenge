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

  reset() {
    this.chits = []
  }

  setChits(chits) {
    this.reset();
    chits.forEach((chit) => this.chits.push(`${chit.user.handle}: ${chit.body}`));
  }


}

module.exports = ChitterModel;