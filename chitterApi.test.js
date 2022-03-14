const ChitterApi = require('./chitterApi');


require('jest-fetch-mock').enableMocks()

describe('Server peeps', () => {
  
    it('calls fetch and takes peeps from server', async () => {
      const api = new ChitterApi();
      fetch.mockResponseOnce(JSON.stringify({
          user_id: 1,
          body: 'Test Peep',
      }));
  
      api.loadPeeps((data) => {
        expect(data.body).toBe('Test Peep');
      });
    });

    it('creates a peep and adds it to the server', async () => {
      const api = new ChitterApi();
      fetch.mockResponseOnce(JSON.stringify({
          user_id: 1,
          body: 'New Peep'
      }));

      api.createPeep(1, 'New Peep', (newPeep) => {
          expect(newPeep.body).toBe('New Peep');
      });


    });


  });