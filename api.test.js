const Api = require("./api");

require("jest-fetch-mock").enableMocks();

describe("API class", () => {
  it("calls fetch and loads data", () => {
    const api = new Api();

    fetch.mockResponseOnce(JSON.stringify(["This is a test note"]));

    api.loadAllPeeps((data) => {
      expect(data[0]).toBe("This is a test note");
    });
  });
});
