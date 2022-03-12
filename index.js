// console.log doesn't print anything on the page
// it is not meant to be visible to the user, but for you
// to help in debugging and getting visibility in your JS code.
//
// on Mac (using Chrome), use Option+Command+J to open the console and see this message.

console.log('Chitter app is running');

const ChitterModel = require('./chitterModel')
const ChitterView = require('./chitterView')

let model = new ChitterModel();
let view = new ChitterView(model);

model.addPeep('Peep peep peep');
model.addPeep('Peep peep peep peep!');
view.displayPeeps();

console.log('Chitter app is still running!');