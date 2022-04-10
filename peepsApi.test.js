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

  it("posts a peep to the server", () => {
    const api = new PeepsApi();

    fetch.mockResponseOnce(
      JSON.stringify({
        0: "Hello!",
      })
    );

    api.createPeep("Hello!", (response) => {
      expect(response[0]).toEqual("Hello!");
    });
  });
});
