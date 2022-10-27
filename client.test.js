const Client = require('./client')

require('jest-fetch-mock').enableMocks()

describe('Client', () => {
  it('loads peeps from the API', (done) => {
    const client = new Client;

    fetch.mockResponseOnce(JSON.stringify({
      id: 1234,
      body: 'Test peep'
    }));

    client.loadPeeps((retunedDataFromApi) => {
      expect(retunedDataFromApi.id).toBe(1234);
      expect(retunedDataFromApi.body).toBe('Test peep');

      done();
    });
  });
}); 