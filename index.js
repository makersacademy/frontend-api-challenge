const ChitterModel = require('./lib/chitterModel');
const ChitterView = require('./views/chitterView'); 
const ChittersApi = require("./lib/chitterApi");

const api = new ChittersApi()
const model = new ChitterModel()
const view = new ChitterView(model, api);

localStorage.clear();

view.displaySessionLogOn()

api.loadPeeps((peeps) => {
  model.setPeeps(peeps);
  view.displayPeeps();
});

