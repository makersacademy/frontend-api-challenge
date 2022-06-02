const ChitterApi = require("./chitterApi");

require("jest-fetch-mock").enableFetchMocks();

describe("ChitterApi", () => {
  beforeEach(() => {
    api = new ChitterApi();
  });

  describe("getPeeps", () => {
    it("should fetch and return peeps from the server", (done) => {
      fetch.mockResponseOnce(
        JSON.stringify({
          peep: "this is a peep",
        })
      );

      api.getPeeps((response) => {
        expect(response.peep).toBe("this is a peep");
        expect(fetch.mock.calls[0][0]).toEqual(
          "https://chitter-backend-api-v2.herokuapp.com/peeps"
        );

        done();
      });
    });
  });
});
