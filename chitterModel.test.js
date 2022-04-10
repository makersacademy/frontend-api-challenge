/**
 * @jest-environment jsdom
 */

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

  describe("loadPeeps", () => {
    it("loads peeps from the server into the model", () => {
      // getPeepsFromServer takes two arguments, so these need to be accounted for in the mocking implementation
      apiMock.getPeepsFromServer.mockImplementationOnce(
        (_errorCallback, callback) => {
          callback(["Hello darkness my old friend"]);
        }
      );

      // loadPeeps takes a callback which is usually used to callback to the View
      chitterModel.loadPeeps(() => {});
      expect(chitterModel.peeps).toEqual(["Hello darkness my old friend"]);
    });
  });
});
