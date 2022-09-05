const ChitterModel = require("./chitterModel");

let model, peepsArray;

describe("ChitterModel class", () => {
  beforeEach(() => {
    model = new ChitterModel();
    testPeepsArray = require("./testPeepsArray");
  });

  it("sets and loads Peeps", () => {
    model.setPeeps(peepsArray);
    expect(model.loadPeeps()).toBe(peepsArray);
  });

  it("sets the user ID", () => {
    model.setUserId(1);
    expect(model.loadUserId()).toBe(1);
  });

  it("sets the session key", () => {
    model.setSessionKey("session key");
    expect(model.loadSessionKey()).toBe("session key");
  });
});
