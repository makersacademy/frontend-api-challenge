const ChitterApi = require("./chitterApi");
const ChitterPeepsModel = require("./chitterModel");
const ChitterView = require("./chitterView");
const DisplaySinglePeep = require("./displaySinglePeep");

view = new ChitterView(
  new ChitterPeepsModel(),
  new ChitterApi(),
  new DisplaySinglePeep()
);
view.displayPeepsFromApi();
