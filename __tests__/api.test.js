const Api = require("../src/api");

const api = new Api();

require("jest-fetch-mock").enableMocks();

describe("Api", () => {
  test("Creates a session", () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        user_id: 1,
        session_key: "Test key",
      })
    );
    api.createSession("user", "pass", (data) => {
      expect(data.user_id).toEqual(1);
      expect(data.session_key).toEqual("Test key");
    });
  });

  test("Creates a user", () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        id: 1,
        handle: "testUser",
      })
    );
    api.createUser("username", "password", (data) => {
      expect(data.id).toEqual(1), expect(data.handle).toEqual("testUser");
    });
  });

  test("Fetches peeps", () => {
    fetch.mockResponseOnce(
      JSON.stringify([
        {
          id: 106,
          body: "test peep",
        },
      ])
    );

    api.loadPeeps((data) => {
      expect(data[0].body).toEqual("test peep");
      expect(data[0].id).toEqual(106);
    });
  });
});
