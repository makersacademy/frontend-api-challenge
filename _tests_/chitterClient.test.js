const ChitterClient = require("../src/chitterClient");
const Client = require("../src/chitterClient");

// This makes `fetch` available to our test
// (it is not by default, as normally `fetch` is only
// available within the browser)
require("jest-fetch-mock").enableMocks();

describe("ChitterClient class", () => {
  it("calls fetch and loads the data", async () => {
    //1. Instantiate the class
    const client = new ChitterClient();

    fetch.mockResponseOnce(
      JSON.stringify({
        user: "ABC",
        id: 123,
      })
    );

    // 2. Call the async function and wait for the Promise to resolve
    const peeps = await client.loadPeeps();

    expect(peeps.user).toEqual("ABC");
  });
});
