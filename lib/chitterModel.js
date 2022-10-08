class ChitterModel {
  constructor() {
    this.peeps = [];
  }

  getPeeps = () => {
    return this.peeps;
  };

  setPeeps = (peeps) => {
    this.peeps = peeps;
  };
}

module.exports = ChitterModel;
