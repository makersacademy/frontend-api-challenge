const ChitterApi = require("./chitterApi");

require("jest-fetch-mock").enableFetchMocks();

describe("ChitterApi", () => {
  beforeEach(() => {
    fetch.resetMocks();
    api = new ChitterApi();
  });

  describe("fetchPeeps", () => {
    it("should fetch and return peeps from the server", async () => {
      fetch.mockResponseOnce(
        JSON.stringify({
          peep: "this is a peep",
        })
      );

      const response = await api.fetchPeeps();

      expect(response.peep).toBe("this is a peep");
      expect(fetch.mock.calls.length).toBe(1);
      expect(fetch.mock.calls[0][0]).toEqual(
        "https://chitter-backend-api-v2.herokuapp.com/peeps"
      );
    });
  });

  describe("createUser", () => {
    it("should post new user and return user id", async () => {
      fetch.mockResponseOnce(async () => {
        return JSON.stringify({
          id: 1,
          handle: "luke",
        });
      });

      const response = await api.createUser("luke", "mypassword");

      expect(response.handle).toBe("luke");
      expect(response.id).toBe(1);
      expect(fetch.mock.calls.length).toBe(1);
      expect(fetch.mock.calls[0][1].method).toEqual("POST");
      expect(fetch.mock.calls[0][1].body).toEqual(
        '{"user":{"handle":"luke","password":"mypassword"}}'
      );
      expect(fetch.mock.calls[0][0]).toEqual(
        "https://chitter-backend-api-v2.herokuapp.com/users"
      );
    });
  });

  describe("logInUser", () => {
    it("should log in a user", async () => {
      fetch.mockResponseOnce(async () => {
        return JSON.stringify({
          user_id: 1,
          session_key: "a_valid_session_key",
        });
      });

      const response = await api.logInUser("luke", "mypassword");

      expect(response.session_key).toBe("a_valid_session_key");
      expect(response.user_id).toBe(1);
      expect(fetch.mock.calls.length).toBe(1);
      expect(fetch.mock.calls[0][1].method).toEqual("POST");
      expect(fetch.mock.calls[0][1].body).toEqual(
        '{"session":{"handle":"luke","password":"mypassword"}}'
      );
      expect(fetch.mock.calls[0][0]).toEqual(
        "https://chitter-backend-api-v2.herokuapp.com/sessions"
      );
    });
  });
});
