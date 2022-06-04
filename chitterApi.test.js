const ChitterApi = require('./chitterApi');

require('jest-fetch-mock').enableMocks();

describe('ChitterApi class', () => {

  beforeEach(() => {
    fetch.resetMocks();
  })

  it('fetches peeps using fetchPeeps', () => {
    fetch.mockResponseOnce(JSON.stringify([{"id":1234, "body":"Testing testing 1,2"}]));
    
    const api = new ChitterApi;
    api.fetchPeeps((peepsObject) => {
      let peeps = peepsObject;
      expect(peeps[0].body).toEqual("Testing testing 1,2");
    });
  })
})

//{"id":1349,"body":"luke is the best","created_at":"2022-06-03T17:43:02.492Z","updated_at":"2022-06-03T17:43:02.492Z","user":{"id":975,"handle":"lukeyluke"},"likes":[]},