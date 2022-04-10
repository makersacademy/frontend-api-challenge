const PeepsView = require("./peepsView");
const PeepsModel = require("./peepsModel");
const PeepsApi = require("./peepsApi");

const api = new PeepsApi();
const model = new PeepsModel(api);
const view = new PeepsView(model);

view.getListOfPeeps();
