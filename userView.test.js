/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const UserModel = require("./userModel");
const UserView = require("./userView");

describe("User view", () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync("./index.html");
  });
  it("displays the current user", () => {
    const model = UserModel();
    const view = UserView(model);
  });
});
