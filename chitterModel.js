class ChitterModel {
  constructor() {
    this.peeps = [];
    this.session = null;
  }

  getSession() {
    return this.session;
  }

  saveSession(session) {
    this.session = session;
  }

  getPeeps() {
    return this.peeps;
  }

  addPeep(peep) {
    this.peeps.push(peep);
  }

  setPeeps(peeps) {
    this.reset();
    peeps.forEach((peep) => this.addPeep(peep));
  }

  reset() {
    this.peeps = [];
  }
}

module.exports = ChitterModel;
