const ChitterApi = require('./chitterApi.js');
const ChitterModel = require('./chitterModel.js');
const ChitterView = require('./chitterView.js');

const model = new ChitterModel()
console.log(model.getPeeps());

const api = new ChitterApi();
const view = new ChitterView(model, api);

view.displayPeeps();
view.displayPeepsById();
view.registerUser();
