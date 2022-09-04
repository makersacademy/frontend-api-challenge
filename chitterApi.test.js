const ChitterApi = require("./chitterApi");

require("jest-fetch-mock").enableMocks();

let api, testPeepsArray, testUserSessionResponse, testPostPeepResponse;

describe("ChitterApi class", () => {
  beforeEach(() => {
    api = new ChitterApi();
    testPeepsArray = require("./testPeepsArray");
    testUserSessionResponse = require("./testUserSessionResponse");
    testPostPeepResponse = require("./testPostPeepResponse");
    fetch.resetMocks();
  });

  it("gets peeps from chitter", () => {
    expect.assertions(4);
    fetch.mockResponseOnce(JSON.stringify(testPeepsArray));
    api.fetchPeeps((data) => {
      expect(data.length).toBe(2);
      expect(data[0].id).toBe(1494);
      expect(data[1].id).toBe(1461);
      expect(fetch.mock.calls[0][0]).toEqual(
        "https://chitter-backend-api-v2.herokuapp.com/peeps"
      );
    });
  });

  it("creates a new user", () => {
    expect.assertions(2);

    fetch.mockResponseOnce(JSON.stringify(testUserSessionResponse));
    api.createUser("kay", "mypassword", (data) => {
      expect(data.handle).toBe("kay");
      expect(fetch.mock.calls[0][0]).toEqual(
        "https://chitter-backend-api-v2.herokuapp.com/users"
      );
    });
  });

  it("logs in a user", () => {
    expect.assertions(3);
    fetch.mockResponseOnce(
      JSON.stringify({
        user_id: 1,
        session_key: "a_valid_session_key",
      })
    );
    api.loginUser("kay", "mypassword", (data) => {
      expect(data.user_id).toBe(1);
      expect(data.session_key).toBe("a_valid_session_key");
      expect(fetch.mock.calls[0][0]).toEqual(
        "https://chitter-backend-api-v2.herokuapp.com/sessions"
      );
    });
  });

  it("posts a Peep", () => {
    expect.assertions(2);
    fetch.mockResponseOnce(JSON.stringify(testPostPeepResponse));
    api.postPeep("sessionKey", 1, "my first peep :)", (data) => {
      expect(data).toEqual(testPostPeepResponse);
      expect(fetch.mock.calls[0][0]).toEqual(
        "https://chitter-backend-api-v2.herokuapp.com/peeps"
      );
    });
  });
});
