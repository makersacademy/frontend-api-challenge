// console.log('Chitter is up and running');

const PeepsModel = require('./src/peepsModel');
const PeepsView = require('./src/peepsView');
const PeepsClient = require('./src/peepsClient');

const client = new PeepsClient();
const model = new PeepsModel();
const view = new PeepsView(model, client);

view.displayPeepsFromApi();

// console.log(view.displayPeepsFromApi());