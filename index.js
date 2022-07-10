const ChitterApi = require('./chitterApi');
const ChitterView = require('./chitterView');
const ChitterModel = require('./chitterModel');

const api = new ChitterApi();
const model = new ChitterModel();
const view = new ChitterView(api, model);

view.displayPeeps();
