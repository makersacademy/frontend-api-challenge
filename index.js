const ChitterView = require("./chitterView.js");
const ChitterModel = require("./chitterModel.js");
const ChitterApi = require("./chitterApi.js");

const api = new ChitterApi();
const model = new ChitterModel();
const view = new ChitterView(model);

model.loadPeeps(() => {
  view.displayPeeps();
});
