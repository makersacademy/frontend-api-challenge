const ChitterApi = require("./chitterApi.js");

class ChitterModel {
  constructor(api = ChitterApi) {
    this.api = api;
    this.peeps = [];
  }

  loadPeeps() {
    this.peeps = [];
    this.api.getPeepsFromServer().forEach((peepObject) => {
      this.peeps.push(peepObject);
    });
  }
}

module.exports = ChitterModel;
