const { default: JSDOMEnvironment } = require("jest-environment-jsdom");
const ChitterApi = require("../lib/chitterApi");

require("jest-fetch-mock").enableMocks();

describe("ChitterApi", () => {
  it("returns a list of peeps", () => {
    fetch.mockResponseOnce(JSON.stringify([{ body: "123" }]));

    const chitterApi = new ChitterApi();
    chitterApi.getPeeps((data) => {
      expect(data[0].body).toBe("123");
    });
  });
  it("creates a user", () => {
    fetch.mockResponseOnce(JSON.stringify([{ id: "1", handle: "test" }]));

    const chitterApi = new ChitterApi();

    const user = { user: { handle: "test", password: "password" } };
    chitterApi.createUser(user, (data) => {
      expect(data[0].id).toEqual("1");
    });
  });
});
