const PeepsModel = require("./peepsModel");

describe("Peeps Model", () => {
  describe("get Peeps class", () => {
    it("starts with no peeps", () => {
      const model = new PeepsModel();
      expect(model.getPeeps()).toEqual([]);
    });

    it("adds peeps", () => {
      const model = new PeepsModel();
      model.addPeep("My first peep!");
      model.addPeep("The Masters just got boring");
      expect(model.getPeeps()).toEqual([
        "My first peep!",
        "The Masters just got boring",
      ]);
    });
  });
});
