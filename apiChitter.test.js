const ApiChitter = require('./apiChitter');

require('jest-fetch-mock').enableMocks();

describe('ApiChitter', () => {
  describe('loadPeeps', () => {
    it('returns peeps from the HerokuApp back end server', () => {
      const api = new ApiChitter();

      fetch.mockResponseOnce(
        JSON.stringify([
          {
            id: 1111,
            body: 'first peep',
            created_at: '2022-06-05T15:48:31.210Z',
            updated_at: '2022-06-05T15:48:31.210Z',
            user: {
              id: 111,
              handle: 'Slava',
            },
            likes: [],
          },
        ])
      );

      api.loadPeeps((callback) => {
        expect(callback).toEqual([
          {
            id: 1111,
            body: 'first peep',
            created_at: '2022-06-05T15:48:31.210Z',
            updated_at: '2022-06-05T15:48:31.210Z',
            user: {
              id: 111,
              handle: 'Slava',
            },
            likes: [],
          },
        ]);
      });
    });
  });

  describe('createPeep', () => {
    it('creates the peep on the HerokuApp back end server', () => {
      const api = new ApiChitter();

      fetch.mockResponseOnce(
        JSON.stringify([
          {
            body: 'first peep',
            handle: 'slava',
          },
        ])
      );

      api.createPeep('first peep', 'slava', (data) => {
        expect(data).toEqual([
          {
            body: 'first peep',
            handle: 'slava',
          },
        ]);
      });
    });
  });
});
