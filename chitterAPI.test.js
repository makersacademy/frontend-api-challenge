require('jest-fetch-mock').enableMocks();
const ChitterAPI = require('./chitterAPI');

let api;

describe('ChitterAPI', () => {
  beforeEach(() => {
    api = new ChitterAPI();
  })
  describe('loadPosts', () => {
    it('fetches notes from the server', async () => {
      let samplePosts = ['Test Peep', 'Test Peep2'];
      
      fetch.mockResponseOnce(JSON.stringify({
        samplePosts
      }));

      api.loadPosts( (apiPosts) => {
        expect(apiPosts.samplePosts).toEqual(samplePosts);
      })
    })
  })

  describe('newSession', () => {
    it('starts a session for a user', async () => {
      fetch.mockResponseOnce(JSON.stringify({
        user_id: 0,
        session_key: "session_key"
      }))
    api.newSession("username", "password", (session) => {
      expect(session.user_id).toEqual(0);
      expect(session.session_key).toEqual("session_key");
    })
    })

  })
})
