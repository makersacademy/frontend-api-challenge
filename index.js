const ChitterModel = require('./chitterModel');
const ChitterApi = require("./chitterApi");
const ChitterView = require("./chitterView");

const api = new ChitterApi();
const model = new ChitterModel();
const view = new ChitterView(model, api);

// api.loadPeeps((apiPeeps) => {
//   // model.setPeeps(apiPeeps);
//   view.displayPeeps();
// });

console.log('The Chitter app is running');