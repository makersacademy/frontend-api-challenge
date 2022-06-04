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
})