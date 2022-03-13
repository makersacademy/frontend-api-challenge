const ChitterApi = require('./chitterApi');
const ChitterModel = require('./chitterModel');
const ChitterView = require('./chitterView');
const api = new ChitterApi();
const model = new ChitterModel();
const view = new ChitterView(model, api);

api.loadPeeps((peeps) => {
    
  model.addPeep('Hello world')
  model.addPeep('This is a peep!')
  model.addPeep('I am making a front end Chitter')
  model.addPeep('Server??')
  model.setPeeps(peep);
  view.viewPeeps();
});



