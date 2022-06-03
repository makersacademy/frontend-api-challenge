const ChitterApi = require("./chitterApi");

require("jest-fetch-mock").enableFetchMocks();

describe("ChitterApi", () => {
  beforeEach(() => {
    fetch.resetMocks();
    api = new ChitterApi();
  });

  describe("fetchPeeps", () => {
    it("should fetch and return peeps from the server", async () => {
      fetch.mockResponseOnce(
        JSON.stringify({
          peep: "this is a peep",
        })
      );

      const response = await api.fetchPeeps();

      expect(response.peep).toBe("this is a peep");
      expect(fetch.mock.calls.length).toBe(1);
      expect(fetch.mock.calls[0][0]).toEqual(
        "https://chitter-backend-api-v2.herokuapp.com/peeps"
      );
    });
  });
});
