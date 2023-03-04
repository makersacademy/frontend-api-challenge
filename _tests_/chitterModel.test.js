const ChitterModel = require("../src/chitterModel");

describe("ChitterModel", () => {
  beforeEach(() => {
    model = new ChitterModel();
  });

  it("returns empty array", () => {
    const peeps = model.getPeeps();
    expect(peeps).toEqual([]);
  });

  it("returns two peeps", () => {
    model.addPeep("Test peep 1");
    model.addPeep("Test peep 2");
    expect(model.getPeeps()).toEqual(["Test peep 1", "Test peep 2"]);
  });

  it("returns the list of notes", () => {
    peepsList = model.setPeeps("Test peep 1, Test peep 2");
    expect(peepsList).toEqual("Test peep 1, Test peep 2");
  });
});
