const ChitterModel = require('./lib/chitterModel');
const ChitterView = require('./views/chitterView'); 
const ChittersApi = require("./lib/chitterApi");
const bootstrap = require('bootstrap') 

const api = new ChittersApi()
const model = new ChitterModel()
const view = new ChitterView(model, api);

//
localStorage.clear()
console.log(localStorage.getItem("user-id"))

//view.showAddPeep();
//view.showSessionLogOn()
view.showCreateUser()

api.loadPeeps((peeps) => {
  model.setPeeps(peeps);
  view.showPeeps();
});
