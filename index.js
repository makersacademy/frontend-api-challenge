const ChitterApi = require('./chitterApi');
const ChitterView = require('./chitterView');
const ChitterModel = require('./chitterModel')

const api = new ChitterApi();
const chitterModel = new ChitterModel();
const chitterView = new ChitterView(chitterModel, api);

api.loadPeeps((peeps) => {
  chitterView.displayPeeps(peeps);
})