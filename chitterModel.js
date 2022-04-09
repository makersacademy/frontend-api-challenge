const ChitterApi = require("./chitterApi.js");

class ChitterModel {
  constructor(api = new ChitterApi()) {
    this.api = api;
    this.peeps = [
      { id: 1, body: "Default Peep 1", user: { handle: "default" } },
      { id: 2, body: "Default Peep 2", user: { handle: "default" } },
      { id: 3, body: "Default Peep 3", user: { handle: "default" } },
    ];
  }

  loadPeeps(callback) {
    this.peeps = [];
    this.api.getPeepsFromServer(
      (error) => {
        console.log(`Error in Load Peeps: ${error}`);
      },
      (peepList) => {
        peepList.forEach((peep) => {
          console.log(`Peep: ${peep}`);
          this.peeps.push(peep);
        });
        callback();
      }
    );
  }
}

module.exports = ChitterModel;
