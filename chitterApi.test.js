const ChitterApi = require("./chitterApi");

require("jest-fetch-mock").enableMocks();

let api,
  testPeepsArray,
  testUserSessionResponse,
  testPostPeepResponse,
  testDeletePeepResponse;

describe("ChitterApi class", () => {
  beforeEach(() => {
    api = new ChitterApi();
    testPeepsArray = require("./testPeepsArray");
    testUserSessionResponse = require("./testUserSessionResponse");
    testPostPeepResponse = require("./testPostPeepResponse");
    testDeletePeepResponse = require("./testDeletePeepResponse");
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
    expect.assertions(3);

    fetch.mockResponseOnce(JSON.stringify(testUserSessionResponse));
    api.createUser("kay", "mypassword", (data) => {
      expect(data.handle).toBe("kay");
      expect(fetch.mock.calls[0][0]).toEqual(
        "https://chitter-backend-api-v2.herokuapp.com/users"
      );
      expect(fetch.mock.calls[0][1].method).toBe("POST");
    });
  });

  it("logs in a user", () => {
    expect.assertions(4);
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
      expect(fetch.mock.calls[0][1].method).toBe("POST");
    });
  });

  it("posts a Peep", () => {
    expect.assertions(3);
    fetch.mockResponseOnce(JSON.stringify(testPostPeepResponse));
    api.postPeep("sessionKey", 1, "my first peep :)", (data) => {
      expect(data).toEqual(testPostPeepResponse);
      expect(fetch.mock.calls[0][0]).toEqual(
        "https://chitter-backend-api-v2.herokuapp.com/peeps"
      );
      expect(fetch.mock.calls[0][1].method).toBe("POST");
    });
  });

  it("deletes a Peep", () => {
    expect.assertions(3);
    fetch.mockResponseOnce({}, { status: 204 });
    api.deletePeep(1494, "session key", (response) => {
      expect(fetch.mock.calls[0][0]).toEqual(
        "https://chitter-backend-api-v2.herokuapp.com/peeps/1494"
      );
      expect(fetch.mock.calls[0][1].method).toBe("DELETE");
      expect(response.status).toBe(204);
    });
  });
});
