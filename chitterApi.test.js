require('jest-fetch-mock').enableMocks();
const ChitterApi = require('./chitterApi');

describe('ChitterApi class', () => {
  beforeEach(() => {
    api = new ChitterApi;
  })

  it('views all peeps', () => {
    expect.assertions(1);
    fetch.mockResponseOnce(JSON.stringify({ body: 'my first peep' }))
    api.loadPeeps((data) => {
      expect(data.body).toBe('my first peep');
    })
  })

  it('creates a user', () => {
    expect.assertions(2);
    fetch.mockResponseOnce(JSON.stringify({ id: 1, handle: "user" }));
    api.createUser({ user: { handle: "user", password: "secret" } }, (response) => {
      expect(response.id).toEqual(1);
      expect(response.handle).toEqual('user');
    })
  })

  it('creates a session', () => {
    expect.assertions(2);
    fetch.mockResponseOnce(JSON.stringify({ user_id: 1130, session_key: "_2a_12_ceWuBTFo9X2gVazI54T0ne" }));
    const session = { session: { handle: "makersduck", password: "quack!" } }
    api.loadSession(session, (response) => {
      expect(response.user_id).toEqual(1130);
      expect(response.session_key).toEqual("_2a_12_ceWuBTFo9X2gVazI54T0ne");
    })
  })
})