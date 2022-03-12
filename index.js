const ChitterApi = require("./chitterApi");
const PeepsModel = require("./peepsModel");
const PeepsView = require("./peepsView");

const api = new ChitterApi();
const model = new PeepsModel();
const view = new PeepsView(model, api);

view.displayPeeps();