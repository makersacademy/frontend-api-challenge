const PeepsModel = require("./peepsModel");
const PeepsApi = require("./peepsApi");
const { beforeEach } = require("@jest/globals");

let model;
beforeEach(() => {
  const fakeApi = {
    loadPeeps: (callback) => {
      [{ body: "peep1" }, { body: "peep2" }];
    },
    createPeep: ("Hello!", (callback) => {}),
  };
  model = new PeepsModel(fakeApi);
});

describe("Peeps Model", () => {
  describe("get Peeps class", () => {
    it("loads peeps from the api", () => {
      model.getPeeps((data) => {
        expect(data).toEqual([{ body: "peep1" }, { body: "peep2" }]);
      });
    });

    it("adds peep to the api", () => {
      model.addPeep((data) => {
        expect(data).toEqual();
      });
    });
  });
});
