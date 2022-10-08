const ChitterApi = require("./lib/chitterApi");
const ChitterModel = require("./lib/chitterModel");
const ChitterView = require("./lib/chitterView");

const model = new ChitterModel();
const api = new ChitterApi();
const view = new ChitterView(model, api);

view.loadPeeps();
console.log("The Chitter app has loaded");
