const ApiChitter = require('./apiChitter');
const ChitterModel = require('./chitterModel');
const ChitterView = require('./chitterView');

const api = new ApiChitter();
const model = new ChitterModel();
const view = new ChitterView(model, api);

api.loadPeeps((peep) => {
  model.addPeep(peep);
  view.displayPeeps();
});

console.log('Hello!');
