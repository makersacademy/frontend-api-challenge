const ChitterApi = require("./chitterApi");
const ChitterModel = require("./chitterModel");
const ChitterView = require("./chitterView");

const model = new ChitterModel();
const api = new ChitterApi();
const view = new ChitterView(model, api);

view.displayPeepsFromApi();
