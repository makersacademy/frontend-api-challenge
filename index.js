const ChitterApi = require("./chitterApi");
const ChitterPeepsModel = require("./chitterPeepsModel");
const ChitterView = require("./chitterView");

view = new ChitterView(new ChitterPeepsModel(), new ChitterApi());
view.displayPeepsFromApi();
