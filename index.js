const ChitterModel = require('./lib/chitterModel');
const ChitterView = require('./views/chitterView'); 
const ChittersApi = require("./lib/chitterApi");

const api = new ChittersApi()
const model = new ChitterModel()
const view = new ChitterView(model, api);

//
localStorage.clear()
console.log(localStorage.getItem("user-id"))

//view.showAddPeep();
view.showSessionLogOn()
view.showCreateUser()

//view.showWelcome();


api.loadPeeps((peeps) => {
  model.setPeeps(peeps);
  view.displayPeeps();
});


// curl "https://chitter-backend-api-v2.herokuapp.com/peeps" \
//   -X POST \
//   -H "Authorization: Token token=_2a_12_RSrGHwdvN6bwrzLICidS7e" \
//   -H "Content-Type: application/json" \
//   -d '{"peep": {"user_id":860, "body":"Still no worky"}}'