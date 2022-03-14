const ChitterApi = require('./chitterApi')
require('jest-fetch-mock').enableMocks();

describe('ChitterApi', () => {
  beforeEach(() => {
    api = new ChitterApi();
  })

  it('calls fetch and loads peeps', async () => {
    fetch.mockResponseOnce(JSON.stringify({
      peep: 'Peep1'
    }));

    api.loadPeeps(peeps => {
      expect(peeps.peep).toBe('Peep1')
    })
  })

  it('calls fetch and posts peeps', () => {
    fetch.mockResponseOnce(JSON.stringify({
      peep: 'Peep1'
    }));

    api.createPeep('peep', (peeps) => {
      expect(peeps.peep).toBe('Peep1');
    })
  })
})