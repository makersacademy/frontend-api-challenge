const ChitterApi = require('./chitterApi');
require('jest-fetch-mock').enableMocks();

describe('API class', () =>
  it('displays peeps from the API', () => {
    
    const api = new ChitterApi();

    fetch.mockResponseOnce(
          JSON.stringify({ body: 'my first peep'})
        );

    api.loadPeeps((data) => {
      expect(data.body).toBe('my first peep');
    });
}))

it('creates a user', () => {
  const api = new ChitterApi();
  fetch.mockResponse(JSON.stringify({ user_id: 1, session_key: "1234567abcd" }));
  api.createUser("user", "password", (response) => {
    expect(response.user_id).toEqual(1);
    expect(response.session_key).toEqual('1234567abcd');
  });
})
  
   
  