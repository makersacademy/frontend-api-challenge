const ChitterModel = require('./chitterModel.js')
const ChitterView= require('./chitterView.js')
const ChitterApi = require('./chitterApi.js');
const { forEach } = require('lodash');

const model = new ChitterModel();
const api = new ChitterApi();
const view = new ChitterView(model,api);

view.viewMyDetails()

// api.signIn({handle:'kay',password:'mypassword'})


api.loadChitts((chitts) => {
  // console.log(chitts.body)
  model.setChitts(chitts);
  view.displayChitts();
})

setTimeout(signing_in, 2000);

function signing_in () {
  const input = api.last_sign_in()
  view.successful_signin(input)
}