const ChitterModel = require('./chitterModel');
const ChitterView = require('./chitterView');

console.log('The Chitter app is running');

const model = new ChitterModel();
const view = new ChitterView(model);