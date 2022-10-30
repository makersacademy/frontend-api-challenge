const Client = require('./client')

require('jest-fetch-mock').enableMocks()

describe('Client', () => {

  beforeEach(() => {
    fetch.resetMocks();
  })

  it('Loads peeps from the API', (done) => {
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

  it('Creates new user', (done) => {
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

  it('Logins user', (done) => {
    const client = new Client;

    fetch.mockResponseOnce(JSON.stringify({
      user_id:1,
      session_key:"random"
    }));

    let inputUsername = 'test_user';
    let inputPassword = 'password123';

    client.signinUser(inputUsername, inputPassword, () => {
      expect(fetch.mock.calls.length).toEqual(1);
      expect(fetch.mock.calls[0][1].body).toEqual(JSON.stringify({session: {handle:inputUsername, password:inputPassword}}));
      done();
    });
  });

  it('Posts peep to the server', (done) => {
    const client = new Client;

    fetch.mockResponseOnce(JSON.stringify({
      id:1,
      body:"Test peep"
    }));

    let userId = 1;
    let sessionKey = 'random';
    let peepBody = 'Test peep';

    client.postPeep(userId, sessionKey, peepBody, () => {
      expect(fetch.mock.calls.length).toEqual(1);
      expect(fetch.mock.calls[0][1].body).toEqual(JSON.stringify({peep: {user_id:userId, body:peepBody}}));
      done();
    });
  });
}); 