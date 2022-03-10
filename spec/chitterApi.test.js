const ChitterApi = require('../lib/chitterApi');

// used for mocking fetch
require('jest-fetch-mock').enableMocks()

describe('ChitterApi class', () => {
  it('gets peeps from server ', async () => {
    const api = new ChitterApi();
    fetch.mockResponseOnce(JSON.stringify({
      peep: 'This is a test peep'
    }));

    api.loadPeeps((peeps) => {
      expect(peeps.peep).toBe('This is a test peep');
    });
  });
});