const { default: JSDOMEnvironment } = require("jest-environment-jsdom");
const ChitterApi = require("../lib/chitterApi");

require("jest-fetch-mock").enableMocks();

describe("ChitterApi", () => {
  it("returns a list of peeps", (done) => {
    fetch.mockResponseOnce(JSON.stringify([{ body: "123" }]));

    const chitterApi = new ChitterApi();

    chitterApi.getPeeps((data) => {
      expect(data[0].body).toBe("123");
      done();
    });
  });
  it("creates a user", (done) => {
    fetch.mockResponseOnce(JSON.stringify([{ id: "1", handle: "test" }]));

    const chitterApi = new ChitterApi();

    chitterApi.createUser("test", "password", (data) => {
      expect(data[0].id).toEqual("1");
      done();
    });
  });
  it("creates a session", (done) => {
    fetch.mockResponseOnce(
      JSON.stringify([{ user_id: "1", session_key: "a_valid_session_key" }])
    );

    const chitterApi = new ChitterApi();

    chitterApi.createSession("test", "password", (data) => {
      expect(data[0].user_id).toEqual("1");
      done();
    });
  });
  it("creates a peep", (done) => {
    fetch.mockResponseOnce(
      JSON.stringify({
        id: 3,
        body: "my first peep :)",
        created_at: "2018-06-23T13:21:23.317Z",
        updated_at: "2018-06-23T13:21:23.317Z",
        user: {
          id: 1,
          handle: "kay",
        },
        likes: [
          {
            user: {
              id: 1,
              handle: "kay",
            },
          },
        ],
      })
    );
    // mock response end
    const chitterApi = new ChitterApi();

    chitterApi.createPeep(1, "my first peep :)", (data) => {
      expect(data.body).toEqual("my first peep :)");
      expect(data.user.id).toEqual(1);
      done();
    });
  });
});
