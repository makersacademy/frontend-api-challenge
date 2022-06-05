const ApiChitter = require('./apiChitter');
const ChitterModel = require('./chitterModel');
const ChitterView = require('./chitterView');

const api = new ApiChitter();
const model = new ChitterModel();
const view = new ChitterView(model, api);

console.log('Hello!');
