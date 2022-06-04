const ChitterView = require('./chitterView');
const ChitterModel = require('./chittermodel');
const ChitterApi = require('./chitterApi');

const api = new ChitterApi;
const model = new ChitterModel;
const view = new ChitterView(model, api);

view.importPeepsFromServer();
view.displayPeeps();
