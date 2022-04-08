const ChitterModel = require("./chitterModel.js");
const ChitterApi = require("./chitterApi.js");

// Jest Mocks
jest.mock("./ChitterApi");
const apiMock = new ChitterApi();

let chitterModel;

describe("ChitterModel", () => {
  beforeEach(() => {
    chitterModel = new ChitterModel(apiMock);
  });

  describe("peeps", () => {
    it("returns the peeps stored in the model", () => {
      apiMock.getPeepsFromServer.mockImplementationOnce(() => {
        return ["Hello darkness my old friend"];
      });
      chitterModel.loadPeeps();
      expect(chitterModel.peeps).toEqual(["Hello darkness my old friend"]);
    });
  });
});
