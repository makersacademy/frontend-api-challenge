const ChitterModel = require("./chitterModel");

describe("ChitterModel", () => {
  beforeEach(() => {
    model = new ChitterModel();
  });

  it("should start with no Peeps", () => {
    expect(model.getPeeps()).toEqual([]);
  });
});
