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

  // it('calls fetch and create a new session to log in', () => {
  //   const client = new ChitterClient();
  //   fetch.mockResponseOnce(JSON.stringify({
  //     "id": 1,
  //     "handle": "maker"
  //   }));
  // })

  // it('calls fetch and create a new peep', (done) => {
  //   const client = new ChitterClient();
  //   fetch.mockResponseOnce(JSON.stringify());

  //   client.addPeep('maker', '')
  // })
});