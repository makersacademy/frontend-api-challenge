const PeepsApi = require('./peepsApi');

require('jest-fetch-mock').enableMocks()

describe('PeepsApi', () => {
  it('loads peeps from the API', (done) => {
    const api = new PeepsApi();

    fetch.mockResponseOnce(JSON.stringify({
      content: "New mocked peep"
    }))

    api.loadPeeps((returnedDataFromApi) => {
      expect(returnedDataFromApi.content).toEqual('New mocked peep');
      done();
    })
  })

  it('loads an individual peep from an API', (done) => {
    const api = new PeepsApi();

    fetch.mockResponseOnce(JSON.stringify({
      id: 1000,
      content: "New mocked peep"
    }))

    api.loadSinglePeep(1000, (responseFromApi) => {
      expect(responseFromApi.content).toEqual('New mocked peep');
      done();
    }) 
  })

  it('creates a user', (done) => {
    const api = new PeepsApi();

    fetch.mockResponseOnce(JSON.stringify({
      handle: 'mockedUser',
      password: 'mockedPassword'
    }))

    api.createUser('mockedUser', 'mockePassword', (responseFromApi) => {
      expect(responseFromApi.handle).toEqual('mockedUser')
      done();
    });
  });

  it('creates a session key if t he user logs in successfully', (done) => {
    const api = new PeepsApi();

    fetch.mockResponseOnce(JSON.stringify({
      handle: 'mockedUser',
      password: 'mockedPassword'
    }))

    api.loadSession('mockedUser', 'mockePassword', (responseFromApi) => {
      expect(responseFromApi.handle).toEqual('mockedUser');
      done();
    });
  })
});