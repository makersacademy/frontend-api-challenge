const ChitterApi = require("./chitterApi");

require("jest-fetch-mock").enableMocks();

let api, testPeepsArray;

describe("ChitterApi class", () => {
  beforeEach(() => {
    api = new ChitterApi();
    testPeepsArray = require("./testPeepsArray");
  });
  it("gets peeps from chitter", () => {
    expect.assertions(3);
    fetch.mockResponseOnce(JSON.stringify(testPeepsArray));
    api.fetchPeeps((data) => {
      expect(data.length).toBe(2);
      expect(data[0].id).toBe(1494);
      expect(data[1].id).toBe(1461);
    });
  });
});
