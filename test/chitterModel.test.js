const ChitterModel = require("../lib/chitterModel");

describe("ChitterModel", () => {
  it("returns a list of peeps", () => {
    const chitterModel = new ChitterModel();
    chitterModel.setPeeps([{ body: "123" }]);
    expect(chitterModel.getPeeps()[0].body).toBe("123");
  });
  it("sets a list of peeps", () => {
    const chitterModel = new ChitterModel();
    chitterModel.setPeeps([{ body: "123" }]);
    expect(chitterModel.getPeeps()[0].body).toBe("123");
  });
  it("sets a session", () => {
    const chitterModel = new ChitterModel();
    chitterModel.setSession({
      user_id: "1",
      session_key: "a_valid_session_key",
    });
    expect(chitterModel.session.user_id).toEqual("1");
  });
});
