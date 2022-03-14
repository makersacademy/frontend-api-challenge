const ChitterApi = require('./chitterApi');

require('jest-fetch-mock').enableMocks()

describe('ChitterApi class', () => {
  it('calls fetch and loads repo info', async () => {
    const api = new ChitterApi();
    fetch.mockResponseOnce(JSON.stringify({
      body: ['Hello I am a new Peep!']
    }));

    api.getChitterData((data) => {
      expect(data.body[0]).toBe('Hello I am a new Peep!');
    });
  });
});