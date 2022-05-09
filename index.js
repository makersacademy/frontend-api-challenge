const ChitterModel = require('./chitterModel');
const ChitterView = require('./chitterView');
const model = new ChitterModel();
const view = new ChitterView(model);

view.viewPeeps();