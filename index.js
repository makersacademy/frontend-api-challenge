const ChitterApi = require('./chitterApi');
const ChitterView = require('./chitterView');

const api = new ChitterApi();
const view = new ChitterView(api);

view.displayPeeps();