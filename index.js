const PeepsModel = require('./peepsModel')
const ChitterApi = require('./chitterApi');
const PeepsView = require('./peepsView');

const model = new PeepsModel;
const api = new ChitterApi;
const peepsView = new PeepsView(model, api);

console.log('Chitter is running');

peepsView.displayFromApi();
