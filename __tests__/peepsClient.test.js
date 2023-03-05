const PeepsClient = require('../src/peepsClient');

require('jest-fetch-mock').enableMocks();

describe('peepsClient', () => {
  it('calls fetch and loads peep data', async () => {
    const client = new PeepsClient();

    fetch.mockResponseOnce(JSON.stringify({
      name: 'some peep',
      id: 123
    }));

    const returnedDataFromApi = await client.loadPeeps();
    expect(returnedDataFromApi.name).toBe('some peep');
    expect(returnedDataFromApi.id).toBe(123);
  })
})
