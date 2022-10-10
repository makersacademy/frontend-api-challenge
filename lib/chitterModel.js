class ChitterModel {
  constructor() {
    this.peeps = [];
    this.session = {};
  }

  getPeeps = () => {
    return this.peeps;
  };

  setPeeps = (peeps) => {
    this.peeps = peeps;
  };

  setSession = (session) => {
    this.session = session;
  };
}

module.exports = ChitterModel;
