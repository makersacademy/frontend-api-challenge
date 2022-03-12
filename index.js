const ChitterModel = require('./lib/chitterModel');
const ChitterView = require('./views/chitterView'); 
const ChittersApi = require("./lib/chitterApi");

const api = new ChittersApi()
const model = new ChitterModel()
const view = new ChitterView(model, api);

//localStorage.clear();

view.displaySessionLogOn()
view.showWelcome();
view.showAddPeep();

api.loadPeeps((peeps) => {
  model.setPeeps(peeps);
  view.displayPeeps();
});


// curl "https://chitter-backend-api-v2.herokuapp.com/peeps" \
//   -X POST \
//   -H "Authorization: Token token=_2a_12_RSrGHwdvN6bwrzLICidS7e" \
//   -H "Content-Type: application/json" \
//   -d '{"peep": {"user_id":860, "body":"Still no worky"}}'