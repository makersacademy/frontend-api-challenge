const ChitterApi = require('./chitterApi');
const ChitterModel = require('./chitterModel');
const ChitterView = require('./chitterView');

console.log('The Chitter app is running');

const api = new ChitterApi();
const model = new ChitterModel();
const view = new ChitterView(api, model);