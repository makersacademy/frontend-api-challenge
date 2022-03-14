const PeepsApi = require('./peepsApi.js')

// This makes `fetch` available to our test
// (it is not by default, as normally `fetch` is only
// available within the browser)
require('jest-fetch-mock').enableMocks()

describe(PeepsApi, () => {

  it('calls fetch and loads peeps info', async () => {
    const api = new PeepsApi();
    fetch.mockResponseOnce(JSON.stringify({
      user: 'winters',
      body: 'This is a test peep'
    }));

    api.getPeeps( (peepsInfo) => {
      expect(peepsInfo.body).toBe('This is a test peep');
    });
  });
});