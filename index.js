const ChitterModel = require("./chitterModel")
const ChitterView = require("./chitterView")


console.log('Chitter is running')

model = new ChitterModel();
model.addPeep('Hey')

view = new ChitterView(model);

view.displayPeeps();
