const ChitterApi = require("./chitterApi");

require('jest-fetch-mock').enableMocks();

describe('ChitterApi', () => {
  describe('loadPeeps()', () => {
    it('should load peeps from the backend server', async () => {
      api = new ChitterApi();

      fetch.mockResponseOnce(JSON.stringify({
        body: "I still haven't finished watching Top Boy"
      }));

      api.loadPeeps((listOfPeeps) => {
        expect(listOfPeeps.body).toEqual("I still haven't finished watching Top Boy");
      });
    });
  });
});