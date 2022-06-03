const ChitterModel = require("./chitterModel");

describe("ChitterModel", () => {
  beforeEach(() => {
    model = new ChitterModel();
  });

  it("should start with no peeps", () => {
    expect(model.getPeeps()).toEqual([]);
  });

  it("adds a peep to the model", () => {
    model.addPeep("New peep");

    expect(model.getPeeps()).toEqual(["New peep"]);
  });

  it("resets the peeps to be empty", () => {
    model.reset();

    expect(model.getPeeps()).toEqual([]);
  });
});
