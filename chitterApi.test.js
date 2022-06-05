const ChitterApi = require('./chitterApi');

require('jest-fetch-mock').enableMocks();

describe('ChitterApi class', () => {

  beforeEach(() => {
    fetch.resetMocks();
  })

  it('fetches peeps using fetchPeeps', () => {
    fetch.mockResponseOnce(JSON.stringify([{"id":1234, "body":"Testing testing 1,2"}]));
    
    const api = new ChitterApi;
    api.fetchPeeps((peepsObject) => {
      let peeps = peepsObject;
      expect(peeps[0].body).toEqual("Testing testing 1,2");
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith(
        "https://chitter-backend-api-v2.herokuapp.com/peeps"
      );
    });
  })

  it('catches errors', () => {
    fetch.mockReject(() => 'API Failure');

    const api = new ChitterApi;
    api.fetchPeeps((peepsObject) => {
      expect(peepsObject).toEqual(null);
    })
  })

  it('sends authorisation requests and returns session keys', () => {
    fetch.mockResponseOnce(JSON.stringify({
      "user_id":12345,
      "session_key":"_3b_65_WEjfcW0unkmN9uVtIMa24f"
    }));

    const api = new ChitterApi;
    api.userAuthorisation('testName', 'password123', (result) => {
      expect(result.user_id).toEqual(12345);
      expect(result.session_key).toEqual("_3b_65_WEjfcW0unkmN9uVtIMa24f");
    })
  })

  it('raises an error when wrong credentials are provided', () => {
    // I'd like to write this test so that I'm checkng for an error instead of a string
    // but I can't figure out the syntax.
    fetch.mockResponseOnce(JSON.stringify({
      "errors":{
        "password":"Invalid username or password"
      }
    }));

    const api = new ChitterApi;
    api.userAuthorisation('testName', 'password123', (result) => {
      expect(result.errors.password).toEqual("Invalid username or password");
    })
  })

  it('sends a peep to server and recieves confirmation', () => {
    fetch.mockResponseOnce(JSON.stringify({
      "id": 3,
      "body": "my first peep :)",
      "created_at": "2018-06-23T13:21:23.317Z",
      "updated_at": "2018-06-23T13:21:23.317Z",
      "user": {
        "id": 1,
        "handle": "kay"
      },
      "likes": [{
        "user": {
          "id": 1,
          "handle": "kay"
        }
      }]
    }));

    const api = new ChitterApi;
    let sessionKey = "_3b_65_WEjfcW0unkmN9uVtIMa24f";
    let userID = 1;
    let peepContent =  "my first peep :)";
    api.postPeep(sessionKey, userID, peepContent, (result) => {
      expect(result.body).toEqual(peepContent);
    })
  })
})

