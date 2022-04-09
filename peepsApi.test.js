const PeepsApi = require("./peepsApi");
require("jest-fetch-mock").enableMocks();

describe("Peeps API class", () => {
  it("calls fetch and loads peeps", async () => {
    const api = new PeepsApi();
    fetch.mockResponseOnce(
      JSON.stringify({ 0: ["This peep is coming from the server"] })
    );

    api.loadPeeps((peeps) => {
      expect(peeps[0]).toEqual(["This peep is coming from the server"]);
    });
  });
});
