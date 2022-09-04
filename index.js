const ChitterApi = require("./api");
const PeepModel = require("./peepModel");
const PeepView = require("./peepView");

const model = new PeepModel();
const api = new ChitterApi();

model.addPeep({
  id: 1494,
  body: "First peep",
  created_at: "2022-08-20T11:33:02.912Z",
  updated_at: "2022-08-20T11:33:02.912Z",
  user: { id: 1124, handle: "jony144" },
  likes: [{ user: { id: 1120, handle: "margaritapeter" } }],
});

const view = new PeepView(model, api);

view.displayPeepsFromApi();
api.createUser("InitalUserTest", "InitalPasswordTest");
