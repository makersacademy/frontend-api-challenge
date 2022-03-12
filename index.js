const PeepsModel = require("./peepsModel");
const PeepsView = require("./peepsView");

const model = new PeepsModel();
const view = new PeepsView(model);

view.displayPeeps();