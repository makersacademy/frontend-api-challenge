const PeepModel = require('./models/peepModel');
const ChitterView = require('./views/chitterView.js');
const ChitterClient = require('./chitterClient');

const client = new ChitterClient();
const model = new PeepModel();
const view = new ChitterView(model, client);

view.displayPeepsFromAPI();