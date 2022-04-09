const ChitterView = require("./chitterView.js");
const ChitterModel = require("./chitterModel.js");

const model = new ChitterModel();
const view = new ChitterView(model);

view.displayButtons();

model.loadPeeps(() => {
  view.displayPeeps();
});
