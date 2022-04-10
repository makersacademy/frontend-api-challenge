const ChitterApi = require("./chitterApi");
const ChitterModel = require("./chitterModel")
const ChitterView = require("./chitterView")


console.log('Chitter is running')

model = new ChitterModel();
api = new ChitterApi();
view = new ChitterView(model);

api.loadPeeps((peepsFromBackend) => {
  model.setPeeps(peepsFromBackend);
  view.displayPeeps();
})


