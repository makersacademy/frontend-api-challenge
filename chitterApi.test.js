const ChitterApi = require('./chitterApi');
require('jest-fetch-mock').enableMocks();

describe('Chitter Api class', () => {
  it('loads all peeps with fetch', async () => {
    const api = new ChitterApi();
    fetch.mockResponseOnce(JSON.stringify(
        ['This note is coming from the server']),
    );

    api.loadPeeps((peeps)=> {
      expect(peeps).toEqual(['This note is coming from the server']);
    });
  });
});
