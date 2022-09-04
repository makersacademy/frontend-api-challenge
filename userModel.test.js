const userModel = require("./userModel");

describe("model", () => {
  it("Initializes", () => {
    const model = new userModel();
    expect(model.getUsers()).toEqual([]);
  });
  it("Adds a user", () => {
    const model = new userModel();
    model.addUser();
    expect(model.getUsers()[0]).toEqual();
  });
  it("Sets an array of users", () => {
    const model = new userModel();
    model.setUsers();
    expect(model.getUsers()[1]).toEqual();
  });
  it("Resets", () => {
    const model = new userModel();
    model.addUser();
    model.reset();
    expect(model.getUsers()).toEqual([]);
  });
});
