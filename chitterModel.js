class ChitterModel {
  constructor() {
    this.chits = []
    this.session = []
    console.log('session contents', this.session)
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

  openSession(sessiondata) {
    console.log('this is coming from the model:', sessiondata.session_key)
    this.session.push(sessiondata.session_key)
  }


}

module.exports = ChitterModel;