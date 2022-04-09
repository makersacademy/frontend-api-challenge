const PeepsModel = require("./peepsModel");

describe("Peeps Model", () => {
  describe("get Peeps class", () => {
    it("starts with no peeps", () => {
      const model = new PeepsModel();
      expect(model.getPeeps()).toEqual([]);
    });
  });
});
