const ChitterModel = require("../lib/chitterModel");

describe("ChitterModel", () => {
  it("returns a list of peeps", () => {
    const chitterModel = new ChitterModel();
    chitterModel.setPeeps([{ body: "123" }]);
    expect(chitterModel.getPeeps()[0].body).toBe("123");
  });
  it("sets a list of peeps", () => {
    const chitterModel = new ChitterModel();
    chitterModel.setPeeps([{ body: "123" }]);
    expect(chitterModel.getPeeps()[0].body).toBe("123");
  });
});
