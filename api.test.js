const Api = require("./api");

require("jest-fetch-mock").enableMocks();

describe("API class", () => {
  it("calls fetch and loads data", () => {
    const api = new Api();

    fetch.mockResponseOnce(
      JSON.stringify([
        {
          id: 1494,
          body: "First peep",
          created_at: "2022-08-20T11:33:02.912Z",
          updated_at: "2022-08-20T11:33:02.912Z",
          user: { id: 1124, handle: "jony144" },
          likes: [{ user: { id: 1120, handle: "margaritapeter" } }],
        },
        {
          id: 1461,
          body: "i'm tiz",
          created_at: "2022-08-07T12:04:31.253Z",
          updated_at: "2022-08-07T12:04:31.253Z",
          user: { id: 1113, handle: "tiz" },
          likes: [],
        },
      ])
    );

    api.loadAllPeeps((data) => {
      expect(data[0]).toEqual({
        id: 1494,
        body: "First peep",
        created_at: "2022-08-20T11:33:02.912Z",
        updated_at: "2022-08-20T11:33:02.912Z",
        user: { id: 1124, handle: "jony144" },
        likes: [{ user: { id: 1120, handle: "margaritapeter" } }],
      });
    });
  });
  it("Creates a new user", () => {
    const api = new Api();
    fetch.mockResponseOnce(
      JSON.stringify({ id: 1131, handle: "InitalUserTest" })
    );
    api.createUser((data) => {
      expect(data).toEqual({ id: 1131, handle: "InitalUserTest" });
    });
  });
  it("Confirms the session", () => {
    const api = new Api();
    fetch.mockResponseOnce(
      JSON.stringify({ user_id: 1131, handle: "InitalUserTest" })
    );
    api.createUser((data) => {
      expect(data).toEqual({ user_id: 1131, handle: "InitalUserTest" });
    });
  });
});
