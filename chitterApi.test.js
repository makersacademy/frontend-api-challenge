const ChitterApi = require('./chitterApi');
require('jest-fetch-mock').enableMocks()

describe('Chitter class', () => {
  it('calls fetch and loads peeps', async () => {
    const api = new ChitterApi();
    fetch.mockResponseOnce(JSON.stringify({
    
    }));

    api.getPeeps((peepInfo) => {
      expect(peepInfo.description).toBe('');
    });
  });
});