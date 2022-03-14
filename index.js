const PeepModel = require('./peepModel');
const PeepView = require('./peepView');

const model = new PeepModel();
const view = new PeepView(model);

model.addPeep('Hello, world');

view.displayPeeps();

console.log('Everything is running');