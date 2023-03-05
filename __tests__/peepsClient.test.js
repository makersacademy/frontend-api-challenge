const PeepsClient = require('../src/peepsClient');

require('jest-fetch-mock').enableMocks();

describe('peepsClient', () => {
  describe('loadPeeps', () => {
    it('should return peeps with correct properties', async () => {
      const responseData = [ // mocking res
        {
          id: 1,
          body: 'Hello, world!',
          created_at: '2022-03-05T12:00:00.000Z',
          updated_at: '2022-03-05T12:00:00.000Z',
          user: {
            id: 1,
            handle: 'user1'
          },
          likes: []
        }
      ];

      global.fetch.mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(responseData)
        })
      );

      const peepsClient = new PeepsClient();
      const peeps = await peepsClient.loadPeeps();

      // check they have the right properties
      const peep = peeps[0];
      expect(peep.id).toBeDefined();
      expect(peep.body).toBeDefined();
      expect(peep.created_at).toBeDefined();
      expect(peep.updated_at).toBeDefined();
      expect(peep.user.id).toBeDefined();
      expect(peep.user.handle).toBeDefined();
      expect(Array.isArray(peep.likes)).toBe(true);
      if (peep.likes.length > 0) {
        const like = peep.likes[0];
        expect(like.user.id).toBeDefined();
        expect(like.user.handle).toBeDefined();
      }
    });
  });

describe('createPeep', () => {
  it('sends a POST request to the peeps backend to create new peep', async () => {
    const client = new PeepsClient();

    fetch.mockResponseOnce(JSON.stringify({
      name: 'another peep',
      id: 456
    }));

    const returnedDataFromApi = await client.createPeep('another peep');
    expect(returnedDataFromApi.name).toEqual('another peep');
    expect(returnedDataFromApi.id).toEqual(456);
  });
});
})
