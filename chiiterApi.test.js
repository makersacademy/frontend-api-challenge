const ChitterApi = require('./chitterApi');

require('jest-fetch-mock').enableMocks()

describe(ChitterApi,() => {
  it('returns a list of the most recent peeps',() => {
    const api = new ChitterApi();
    const fakePeep = {
      "id":1444,
      "body":"test peep",
      "created_at":"2022-07-03T15:55:57.177Z",
      "updated_at":"2022-07-03T15:55:57.177Z",
      "user":{"id":1,"handle":"you"},
      "likes":[]
    }

    fetch.mockResponseOnce(JSON.stringify([fakePeep, fakePeep]));

    api.loadPeeps((peeps) => {
      expect(peeps).toEqual([fakePeep, fakePeep])
    })
  })

  it('signs up a user and returns the user ID and handle',() => {
    const api = new ChitterApi();
    const fakeUser = {
        "id" : 1,
        "handle" : "kay"
    }

    fetch.mockResponseOnce(JSON.stringify(fakeUser));

    api.addUser('kay', 'spinach', (response) => {
        expect(response.id).toEqual(1);
        expect(response.handle).toEqual('kay');
      })
    expect(fetch.mock.lastCall[0]).toBe("https://chitter-backend-api-v2.herokuapp.com/users");
  })

  it('logins a user and returns the user id and session key',() => {
    const api = new ChitterApi();
    
    fetch.mockResponseOnce(JSON.stringify({
      "user_id": 1,
      "session_key": "a_valid_session_key"
    }))

    api.login("kay", "password", (response) => {
      expect(response.user_id).toEqual(1);
      expect(response.session_key).toEqual("a_valid_session_key");
    })
    expect(fetch.mock.lastCall[0]).toBe("https://chitter-backend-api-v2.herokuapp.com/sessions");
  })

  it('adds a peep successfully',() => {
    const api = new ChitterApi();

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
    }))

    api.addPeep("a_valid_session_key", "kay", "my first peep :)", (response) => {
      expect(response.body).toEqual("my first peep :)");
      expect(response.id).toEqual(3)
    })

    expect(fetch.mock.lastCall[0]).toBe("https://chitter-backend-api-v2.herokuapp.com/peeps");

  })
})


// curl "https://chitter-backend-api-v2.herokuapp.com/peeps" \
//   -X POST \
//   -H "Authorization: Token token=a_valid_session_key" \
//   -H "Content-Type: application/json" \
//   -d '{"peep": {"user_id":1, "body":"my first peep :)"}}'
// On success, the above command returns JSON structured like this:

// {
//   "id": 3,
//   "body": "my first peep :)",
//   "created_at": "2018-06-23T13:21:23.317Z",
//   "updated_at": "2018-06-23T13:21:23.317Z",
//   "user": {
//     "id": 1,
//     "handle": "kay"
//   },
//   "likes": [{
//     "user": {
//       "id": 1,
//       "handle": "kay"
//     }
//   }]
// }