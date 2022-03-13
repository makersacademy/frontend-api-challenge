require('jest-fetch-mock').enableMocks();
const ChitterAPI = require('./chitterAPI');

describe('ChitterAPI', () => {
  describe('loadPosts', () => {
    it('fetches notes from the server', async () => {
      let samplePosts = ['Test Peep', 'Test Peep2'];
      const api = new ChitterAPI();
      fetch.mockResponseOnce(JSON.stringify({
        samplePosts
      }));

      api.loadPosts( (apiPosts) => {
        expect(apiPosts.samplePosts).toEqual(samplePosts);
      })
    })
  })
})
