const ChitterPeepsModel = require("./chitterPeepsModel");

let model, peepsArray;

describe("ChitterPeepsModel class", () => {
  beforeEach(() => {
    model = new ChitterPeepsModel();
    testPeepsArray = require("./testPeepsArray");
  });
  it("sets and loads Peeps", () => {
    model.setPeeps(peepsArray);
    expect(model.loadPeeps()).toBe(peepsArray);
  });
});
