const ChitterApi = require("./chitterApi.js");
require("jest-fetch-mock").enableMocks();

const examplePeep = {
  id: 1345,
  body: "We out here peeping",
  created_at: "2022-04-08T19:49:23.665Z",
  updated_at: "2022-04-08T19:49:23.665Z",
  user: {
    id: 970,
    handle: "paul_kilgarriff",
  },
  likes: [
    {
      user: {
        id: 970,
        handle: "paul_kilgarriff",
      },
    },
  ],
};

const errorCallback = (input) => console.log(`Error Callback: ${input}`);
const callback = (input) => console.log(`Callback: ${input}`);

let chitterApi;

describe("ChitterApi", () => {
  beforeEach(() => {
    chitterApi = new ChitterApi();
  });

  describe("getPeeps", () => {
    fetch.mockResponseOnce(JSON.stringify(examplePeep));
    it("fetches a list of peeps from the backend", (done) => {
      console.log(
        chitterApi.getPeeps(errorCallback, (data) => {
          console.log(`I'm in the callback passed to getPeeps`);
          expect(data.body).toEqual("We out here peeping");
          done();
        })
      );
    });
  });
});
