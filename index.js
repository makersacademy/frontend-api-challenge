const ChitterApi = require("./chitterApi");
const PeepsModel = require("./peepsModel");
const PeepsView = require("./peepsView");

const api = new ChitterApi();
const model = new PeepsModel();
const view = new PeepsView(model, api);

api.loadPeeps((peeps) => {
    model.setPeeps(peeps);
    console.log(model.setPeeps(peeps));
    view.display(peeps);
  });