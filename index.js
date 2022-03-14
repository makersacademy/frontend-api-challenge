const ChitterApi = require('./chitterApi');
const ChitterModel = require('./chitterModel');
const ChitterView = require('./chitterView');

const api = new ChitterApi();
const model = new ChitterModel();
const view = new ChitterView(model, api);

api.loadPeeps((peeps) => {
  model.setPeeps(peeps);
  view.displayPeeps();
});