const ChitterModel = require('./chitterModel.js')
const ChitterView= require('./chitterView.js')
const ChitterApi = require('./chitterApi.js');
const { forEach } = require('lodash');

const model = new ChitterModel();
const api = new ChitterApi();
const view = new ChitterView(model,api);

api.loadChitts((chitts) => {
  console.log(chitts)
  chitts.forEach( chitt => {console.log(chitt.body)})
  console.log(chitts.body)
  model.setChitts(chitts);
  view.displayChitts();
})