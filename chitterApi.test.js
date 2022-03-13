const ChitterApi = require('./chitterApi');

require('jest-fetch-mock').enableMocks()

describe('ChitterApi class', () => {
    it('calls fetch and loads repo info', async () => {
      const api = new ChitterApi();
      fetch.mockResponseOnce(JSON.stringify({
        body: 'This is a peep',
        //description: 'Ruby on Rails'
      }));
  
      api.getRepoInfo('This is a peep', (repoInfo) => {
        expect(repoInfo.body).toBe('This is a peep');
      });
    });
  });
// describe('Server notes', () => {
//   it('calls fetch and fins message from server', async () => {
//     const api = new ChitterApi();
//     fetch.mockResponseOnce(JSON.stringify({
//       note: 'Test Peep',
//     }));

//     api.loadNotes((peepsInfo) => {
//       expect(peepsInfo.note).toBe('Test Peep');
//     });
//   });
// });