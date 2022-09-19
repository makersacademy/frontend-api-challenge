const Api = require("./api");
const PeepsView = require("./views/peepsView");
const PeepModel = require("./model/peepModel");

const api = new Api();
const peepModel = new PeepModel(api);
const peepsView = new PeepsView(peepModel, api);

peepsView.displayPeeps();
