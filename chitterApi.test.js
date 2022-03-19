const ChitterApi = require('./chitterApi');

require('jest-fetch-mock').enableMocks()

describe('Chitter API', () => {
  it('calls fetch and loads Chitter server info', async () => {
    const api = new ChitterApi();

    let testingPeeps = ['First Peep!', 'Second Peep!!'];
    fetch.mockResponseOnce(JSON.stringify({
      testingPeeps
    }));

    api.loadPeeps((testApiPosts) => {
      expect(testApiPosts.testingPeeps[0]).toEqual('First Peep!');
      expect(testApiPosts.testingPeeps[1]).toEqual('Second Peep!!');
    });
  });
});