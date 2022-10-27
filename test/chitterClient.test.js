const ChitterClient = require('../src/chitterClient');

require('jest-fetch-mock').enableMocks()

describe('Client class', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('calls fetch and loads all peeps', (done) => {
    const client = new ChitterClient();
    fetch.mockResponseOnce(JSON.stringify({
      "id": 3,
      "body": "my first peep :)"
    }));

    client.loadPeeps((returnedData) => {
      expect(returnedData).toEqual({ 
        "id": 3, 
        "body": "my first peep :)" 
      });

      done();
    });
  });

  it('calls fetch and create a new user', (done) => {
    const client = new ChitterClient();
    fetch.mockResponseOnce(JSON.stringify({
      "id": 1,
      "handle": "maker"
    }));

    client.createUser('newUser', 'password123', returnedData => {
      expect(returnedData).toEqual({
        "id": 1,
        "handle": "maker"
      });

      done();
    });
  })

  it('calls fetch and creates a new session for logging in', (done) => {
    const client = new ChitterClient();
    fetch.mockResponseOnce(JSON.stringify({
      "user_id": 1,
      "session_key": "a_valid_session_key"
    }));

    client.newSession('maker', 'password123', returnedData => {
      expect(returnedData).toEqual({
        "user_id": 1,
        "session_key": "a_valid_session_key"
      })

      done();
    })
  })

  // it('calls fetch and create a new peep', (done) => {
  //   const client = new ChitterClient();
  //   fetch.mockResponseOnce(JSON.stringify());

  //   client.addPeep('maker', '')
  // })
});