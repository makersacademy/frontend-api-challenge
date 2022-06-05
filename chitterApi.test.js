const ChitterApi = require('./chitterApi');

require('jest-fetch-mock').enableMocks();

describe('ChitterApi', () => {
  it('calls fetch and loads peeps from server', (done) => {
    const api = new ChitterApi();
    fetch.mockResponseOnce(JSON.stringify({
      peep: "Crazy days ahead"
    }));

    api.getPeeps((returnedDataFromApi) => {
      expect(returnedDataFromApi.peep).toBe("Crazy days ahead");
      done();
    });
  });
});