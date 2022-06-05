const ChitterApi = require ('./chitterApi');

require('jest-fetch-mock').enableMocks();

describe('ChitterApi', () => {
  beforeEach(() => {
    api = new ChitterApi();
  });

  it('loads the messages', () => {
    fetch.mockResponseOnce(JSON.stringify([{
      id: 134,
      body: 'Api test message'
    }]));

    api.loadMessages((returnedData) => {
      expect(returnedData).toEqual([{id: 134, body: 'Api test message'}]);
    });
  });

  it('creates a new user', () => {
    fetch.mockResponseOnce(JSON.stringify({
      id: 1,
      handle: 'john'
    }));

    api.createNewUser('john', 'pas123', returnedData => {
      expect(returnedData).toEqual({id: 1, handle: 'john'});
    });
  });

  it('starts a new session', () => {
    fetch.mockResponseOnce(JSON.stringify({
      user_id: 1,
      session_key: '2a_43k'
    }));

    api.newSession('john', 'pas123', returnedData => {
      expect(returnedData).toEqual({user_id: 1, session_key: '2a_43k'});
    });
  });

    // it('posts the new message', () => {
  //   fetch.mockResponseOnce(JSON.stringify({
  //     id: 134,
  //     body: 'Api test message'
  //   }));

  //   api.postMessage(())
  // });
});