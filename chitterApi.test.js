const ChitterApi = require('./chitterApi');

require('jest-fetch-mock').enableMocks()

describe('ChitterApi class', () => {
    it('calls fetch and loadsinfo', async () => {
      const api = new ChitterApi();
      fetch.mockResponseOnce(JSON.stringify({
        body: 'This is a peep',
        //description: 'Ruby on Rails'
      }));
  
      api.createPeep('This is a peep', (peep) => {
        expect(repoInfo.body).toBe('This is a peep');
      });
    });
  });
