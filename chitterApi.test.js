const ChitterApi = require('./chitterApi');

require('jest-fetch-mock').enableFetchMocks()

describe('Chitter Api class', () => {

  beforeEach(() => {
    api = new ChitterApi();
  })

  describe('#loadPeeps', () => {
    it('calls fetch (GET request) and loads peeps from the backend server', async () => {

      fetch.mockResponseOnce(
        JSON.stringify({
          peep: "Test peep.",
        })
      );

      const response = await api.loadPeeps();

      expect(response.peep).toBe('Test peep.');
      expect(fetch.mock.calls.length).toBe(1);
      expect(fetch.mock.calls[0][0]).toEqual(`https://chitter-backend-api-v2.herokuapp.com/peeps`)
    });
  });

});