const ChitterView = require("./chitterView.js");
const ChitterModel = require("./chitterModel.js");
const ChitterApi = require("./chitterApi.js");

const model = new ChitterModel();
const api = new ChitterApi();
const view = new ChitterView(model, api);

view.displayChitter();
console.log("The Chitter app has loaded");
