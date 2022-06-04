const ChitterModel = require("./chitterModel");
const ChitterView = require("./chitterView");

console.log('Chitter app working');

const model = new ChitterModel;
const view = new ChitterView(model);

model.addPeep('Test peep');
model.addPeep('Second test peep');

view.displayPeeps();


