const ChitterApi = require("./chitterApi")

require('jest-fetch-mock').enableFetchMocks();

describe('ChitterApi class ', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('loadPeeps calls fetch and loads data from API', () => {
    const api = new ChitterApi;

    fetch.mockResponseOnce(JSON.stringify(['This is a test note']));
    jest.spyOn(global,'fetch').mockReturnValue({});

    api.loadPeeps((returnedDataFromApi) => {
      expect(returnedDataFromApi).toEqual(['This is a test note'])
    });

    expect(global.fetch).toHaveBeenCalledWith("https://chitter-backend-api-v2.herokuapp.com/peeps");
  });

  it('login method allows to login in the server to get a session_key from the API', () => {
    const api = new ChitterApi;

    fetch.mockResponseOnce(JSON.stringify(['This is a test note']));
    jest.spyOn(global,'fetch').mockReturnValue({});

    api.login('test username', 'test password', (returnedDataFromApi) => {
      expect(returnedDataFromApi).toEqual(['This is a test note'])
    });

    expect(global.fetch).toHaveBeenCalledWith("https://chitter-backend-api-v2.herokuapp.com/sessions", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        session: {
          handle: `test username`,
          password: `test password`
        }
      })
    });
  });

  it('newPeep method allows to create a new peep and save it on the API', () => {
    const api = new ChitterApi;

    fetch.mockResponseOnce(JSON.stringify(['This is a test note']));
    jest.spyOn(global,'fetch').mockReturnValue({});

    api.newPeep('test peep', 'test session_key', 'test user_id', (returnedDataFromApi) => {
      expect(returnedDataFromApi).toEqual(['This is a test note'])
    });

    expect(global.fetch).toHaveBeenCalledWith("https://chitter-backend-api-v2.herokuapp.com/peeps", {
      method: 'POST',
      headers: {
        'Authorization': `Token token=test session_key`,
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify({
        peep: {
          user_id: `test user_id`,
          body: `test peep`
        }
      })
    });
  });
})