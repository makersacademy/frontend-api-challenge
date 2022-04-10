const ChitterModel = require("./chitterModel")
const ChitterView = require("./chitterView")


console.log('Chitter is running')

model = new ChitterModel();
view = new ChitterView(model);

view.displayPeeps();
