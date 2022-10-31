const PeepModel = require('./models/peepModel');
const ChitterView = require('./views/chitterView.js');
const ChitterClient = require('./chitterClient');
const UserModel = require('./models/userModel');

const client = new ChitterClient();
const model = new PeepModel();
const user = new UserModel();
const view = new ChitterView(model, client, user);

view.displayPeepsFromAPI();

