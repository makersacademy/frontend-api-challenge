const ChitterApi= require('./chitterApi');

require('jest-fetch-mock').enableMocks();

beforeEach(() => {
  fetch.resetMocks();
});

describe('ChitterApi', () => {
  describe('.loadPeeps', () => {
    it('calls fetch and retrieves the peeps from the server', async () => {
      //given
      const chitterApi = new ChitterApi;
      fetch.mockResponseOnce(JSON.stringify(['Dr sillyboots new silly tweet']));
      let result;

      //when
      await chitterApi.loadPeeps((peeps) => {
        result = peeps;
      });

      //then
      expect(result.length).toEqual(1);
      expect(result[0]).toEqual('Dr sillyboots new silly tweet')
    })
  })
})





// expect toHaveBeenCalledWith("https://chitter-backend-api-v2.herokuapp.com/peeps")