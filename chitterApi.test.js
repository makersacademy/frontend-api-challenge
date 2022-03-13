const ChitterApi = require('./chitterApi');

// This makes `fetch` available to our test
// (it is not by default, as normally `fetch` is only
// available within the browser)
require('jest-fetch-mock').enableMocks()

describe('ChitterApi class', () => {
  it('calls fetch and loads peeps data from the model', async () => {
    let peeps = ['peep1', 'peeps2']
    
    const api = new ChitterApi();
    fetch.mockResponseOnce(JSON.stringify({
     peeps
    }));

    api.loadPeeps( (apipeeps) => {
      expect(apipeeps.peeps).toEqual(peeps);
    });
  });

  it('calls fetch and saves the newly input peep', async () => {
    const api = new ChitterApi();
    let newPeep = "Yesterday, all my troubles seemed so far away"
    fetch.mockResponseOnce(JSON.stringify({
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: {
        newPeep
      },

    }));

    api.postPeep((newPeep) => {
      expect(newPeep.peeps).toEqual([newPeep]);

    });
  });

});