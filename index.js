// console.log doesn't print anything on the page
// it is not meant to be visible to the user, but for you
// to help in debugging and getting visibility in your JS code.
//
// on Mac (using Chrome), use Option+Command+J to open the console and see this message.
const ChitterModel = require('./chitterModel');
const ChitterView = require('./chitterView');
const ChitterApi = require('./chitterApi');

const api = new ChitterApi();
const model = new ChitterModel();
const view = new ChitterView(model, api);

// api.loadPeep((peeps) => {//
//   console.log("LOAD PEEEP"); 
//   model.setNotes(peeps); 
//   view.displayPeeps();
// });







