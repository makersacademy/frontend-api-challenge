const PeepsClient = require('./peepsClient');

require('jest-fetch-mock').enableMocks();

beforeEach(() => {
  fetch.resetMocks();
});

  describe('PeepsClient class', () => {
    it('calls fetch and loads peeps', (done) => {
      const client = new PeepsClient();
      fetch.mockResponseOnce(JSON.stringify({
        peep: 'This is a mock peep',
      }));

      client.loadPeeps((returnedDataFromApi) => {
        expect(returnedDataFromApi.peep).toBe('This is a mock peep');
        expect(fetch).toHaveBeenCalledTimes(1);
        done();
      });
    });  
  })