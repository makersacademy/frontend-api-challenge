// console.log doesn't print anything on the page
// it is not meant to be visible to the user, but for you
// to help in debugging and getting visibility in your JS code.
//
// on Mac (using Chrome), use Option+Command+J to open the console and see this message.

console.log('#1 Chitter app is running');

const ChitterApi = require ('./chitterApi')
const ChitterModel = require('./chitterModel')
const ChitterView = require('./chitterView')

let api = new ChitterApi();
let model = new ChitterModel();
let view = new ChitterView(model, api);

api.loadPeeps((peeps) => {
  model.setPeeps(peeps);
  view.displayPeeps();
});

console.log('#2 Chitter app is still running!');