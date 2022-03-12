const ChitterModel = require('./chitterModel');
const ChitterView = require('./chitterView');
const model = new ChitterModel();
const view = new ChitterView(model);

model.addPeep('Hello world')
model.addPeep('This is a peep!')
model.addPeep('I am making a front end Chitter')
view.viewPeeps();