const ChitterApi = require('./chitterApi');
// Makes `fetch` available to our test
require('jest-fetch-mock').enableMocks()

describe(ChitterApi, () => {
  it('Calls fetch and loads peeps data from the model', () => {
    let peeps = ['peep1', 'peeps2']

    const api = new ChitterApi();
    fetch.mockResponseOnce(JSON.stringify({
      peeps
    }));
    api.loadPeeps( (apiPeeps) => {
      expect(apiPeeps.peeps).toEqual(peeps);
    });
  });
  it('calls fetch and sends a new peep', async () => {
    const api = new ChitterApi();
    let newPeep = "Learning over completion"
    fetch.mockResponseOnce(JSON.stringify({
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: {
        newPeep
      },
    }));

    api.createPeep((newPeep) => {
      expect(apiChitter.peeps).toEqual([newPeep]);
    });
  });
})
