const ChitterApi = require('./chitterApi');

require('jest-fetch-mock').enableFetchMocks()

describe('Chitter Api class', () => {
  describe('#loadPeeps', () => {
    it('calls fetch (GET request) and loads peeps from the backend server', (done) => {
      const api = new ChitterApi();

      fetch.mockResponseOnce( async (request) => {
        try { 
          expect(request.method).toBe('GET');
        } catch (error) {
          console.log('error:', error);
          done(error);
        }

        return JSON.stringify([`This is a peep from the backend server`]);

      });

      api.loadPeeps((response) => {
        expect(response[0]).toBe(`This is a peep from the backend server`);
        expect(fetch.mock.calls[0][0]).toEqual(`https://chitter-backend-api-v2.herokuapp.com/`);
        done();
      })
    });
  });

  describe('#createPeep', () => {
    it('calls fetch (POST request) and creates a note on the backend server', (done) => {
      const api = new ChitterApi();

      fetch.mockResponseOnce( async (request) => {
        try {
          expect(request.method).toBe('POST');
          const requestBody = await request.json();
          expect(requestBody.content).toEqual('A new peep.');
        } catch (error) {
          console.log('error:', error);
          done(error);
        }

        return JSON.stringify(['A new peep.']);

      });

      api.createNote('A new peep.', (response) => {
        expect(response[0]).toBe('A new peep.');

        done();
      });
    });
  });
});