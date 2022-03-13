const ChitterApi = require('./chitterApi');
const ChitterModel = require('./chitterModel');
const ChitterView = require('./chitterView');
const UserModel = require('.userModel');

const api = new ChitterApi();
const model = new ChitterModel();
const view = new ChitterView(model, api);
const user = new UserModel(model, api);

api.loadPeeps((apiPeeps) => {  
  model.setPeeps(apiPeeps);
  view.viewPeeps();
});

api.createUser((apiUser) => {
  user.createUser(username, password);
  user.createUser();
  console.log(user);
})


// model.addPeep('Hello world')
//   model.addPeep('This is a peep!')
//   model.addPeep('I am making a front end Chitter')