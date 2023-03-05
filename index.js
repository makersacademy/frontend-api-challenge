const ChitterModel = require("./src/chitterModel.js");
const ChitterClient = require("./src/chitterClient.js");
const ChitterView = require("./src/chitterView.js");

const model = new ChitterModel();
const client = new ChitterClient();
const view = new ChitterView(model, client);
view.displayPeepsFromApi();
