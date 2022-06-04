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
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith(
        "https://chitter-backend-api-v2.herokuapp.com/peeps"
      );
    });
  })

  it('catches errors', () => {
    fetch.mockReject(() => 'API Failure');

    const api = new ChitterApi;
    api.fetchPeeps((peepsObject) => {
      expect(peepsObject).toEqual(null);
    })
  })
})

