const ChitterApi = require('../lib/chitterApi');

// used for mocking fetch
require('jest-fetch-mock').enableMocks()

describe('ChitterApi class', () => {
  it('gets peeps from server ', async () => {
    const api = new ChitterApi();
    fetch.mockResponseOnce(JSON.stringify({
      body: 'This is a test peep'
    }));

    api.loadPeeps((peeps) => {
      expect(peeps.body).toBe('This is a test peep');
    });
  });

  it('creates a new session', async () => {
    const api = new ChitterApi();
    fetch.mockResponseOnce(JSON.stringify(
        {user_id: 1, session_key: "a_valid_session_key" }
        )
      );

    api.startSession("handle","password", (session) => {
      expect(session.user_id).toBe(1);
      expect(session.session_key).toBe("a_valid_session_key");
    });
  });
  

  it('creates a new peep', async () => {
    const api = new ChitterApi();
    fetch.mockResponseOnce(JSON.stringify(
        {user_id: 1, body: "a peep" }
        )
      );

    api.createPeep(1,"abc", "a peep" ,(peep) => {
      expect(peep.body).toBe("a peep");
    });
  });

  it('creates a new user', async () => {
    const api = new ChitterApi();
    fetch.mockResponseOnce(JSON.stringify(
        {user_id: 1, handle: "test" }
        )
      );

    api.createUser("handle", "password" ,(user) => {
      expect(user.handle).toBe("test");
    });
  });

  
  it('deletes a peep', async () => {
    const api = new ChitterApi();
    fetch.mockResponseOnce(JSON.stringify(
        {status : 204 }
        )
      );

    api.deletePeep(1, "sesssionKey" ,(resonse) => {
      expect(response.status).toBe(204);
    });
  });

});