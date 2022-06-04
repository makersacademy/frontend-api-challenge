const ChitterApi = require("./chitterApi");
const ChitterModel = require("./chitterModel");
const ChitterView = require("./chitterView");

console.log('Chitter app working');

const model = new ChitterModel;
const api = new ChitterApi;
const view = new ChitterView(model, api);

view.displayPeepsFromApi();
console.log(view.model.getPeeps()[0]);


