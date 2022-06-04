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
});