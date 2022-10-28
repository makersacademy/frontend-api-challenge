const Client = require('./client')

require('jest-fetch-mock').enableMocks()

describe('Client', () => {

  beforeEach(() => {
    fetch.resetMocks();
  })

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

  it('creates new user', (done) => {
    const client = new Client;

    fetch.mockResponseOnce(JSON.stringify({
      id : 1,
      handle : "test_user"
    }));
    
    let inputUsername = 'test_user';
    let inputPassword = 'password123';

    client.createUser(inputUsername, inputPassword, () => {
      expect(fetch.mock.calls.length).toEqual(1);
      expect(fetch.mock.calls[0][1].body).toEqual(JSON.stringify({user: {handle:inputUsername, password:inputPassword}}));
      done();
    });

  });
}); 