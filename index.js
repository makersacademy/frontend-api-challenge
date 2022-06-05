const ChitterApi = require('./chitterApi');
const ChitterModel = require('./chitterModel');
const ChitterView = require('./chitterView');

const chitterApi = new ChitterApi();
const chitterModel = new ChitterModel(chitterApi);
const chitterView = new ChitterView(chitterModel);

chitterView.all();