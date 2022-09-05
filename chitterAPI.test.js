require('jest-fetch-mock').enableMocks();
const ChitterAPI = require('./chitterAPI');

let api;

describe('ChitterAPI', () => {
  beforeEach(() => {
    api = new ChitterAPI();
  })

  describe('loadPosts', () => {
    it('fetches notes from the server', async () => {
      let samplePosts = ['Peep', 'Peep2'];

      fetch.mockResponseOnce(JSON.stringify({
        samplePosts
      }));

      api.loadPosts( (apiPosts) => {
        expect(apiPosts.samplePosts).toEqual(samplePosts);
      })
    })
  })

  describe('createPost', () => {
    it('adds a post to the server', async () => {
      fetch.mockResponseOnce(JSON.stringify({
          user_id: 1,
          body: "Test Peep"
      }));
      api.createPost(1, "Sample_Session_Key", "Peep", (post) => {
        expect(post.body).toEqual("Test Peep");
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
