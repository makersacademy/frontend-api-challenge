// console.log('Chitter is up and running');

const PeepsModel = require('./src/peepsModel');
const PeepsView = require('./src/peepsView');

let model = new PeepsModel;

console.log(model.getPeeps());

model.addPeep('example peep');

let view = new PeepsView(model);

view.displayPeeps();