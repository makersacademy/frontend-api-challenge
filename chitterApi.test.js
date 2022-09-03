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
})