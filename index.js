const ChitterModel = require('./chitterModel');
const ChitterView = require('./chitterView');

const model = new ChitterModel();
const view = new ChitterView(model);

model.addPeep('test peep one')
view.displayPeeps()