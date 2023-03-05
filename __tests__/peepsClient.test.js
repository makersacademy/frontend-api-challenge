const PeepsClient = require('../src/peepsClient');

require('jest-fetch-mock').enableMocks();

describe('peepsClient', () => {
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

describe('createPeep', () => {
  it('sends a POST request to the peeps backend to create new peep', async () => {
    const client = new PeepsClient();

    fetch.mockResponseOnce(JSON.stringify({
      name: 'another peep',
      id: 456
    }));

    const returnedDataFromApi = await client.createPeep('another peep');
    expect(returnedDataFromApi.name).toEqual('another peep');
    expect(returnedDataFromApi.id).toEqual(456);
  });
});
})
