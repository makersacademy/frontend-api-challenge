const ChitterApi = require('./chitterApi');

require('jest-fetch-mock').enableMocks()

describe(ChitterApi,() => {
  it('returns peeps in reverse order',() => {
    const api = new ChitterApi();
    const peepData = {
        "id":2000,
        "body":"test peep",
        "created_at":"2022-09-04T12:24:57.177Z",
        "updated_at":"2022-09-04T15:24:57.177Z",
        "user":{"id":1,"handle":"you"},
        "likes":[]}

    fetch.mockResponseOnce(JSON.stringify([peepData,peepData]));

    api.loadPeeps((peeps) => {
      expect(peeps).toEqual([peepData, peepData])
    });
  });
});