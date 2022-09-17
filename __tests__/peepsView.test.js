/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const Api = require("../src/api");
const PeepModel = require("../src/model/peepModel");
const PeepsView = require("../src/views/peepsView");

describe("PeepsView", function () {
  test("Clicking create an account button makes form visible", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const model = new PeepModel();
    const api = new Api();
    const view = new PeepsView(model, api);

    expect(
      document.getElementById("container-createUser").style.visibility
    ).toBe("hidden");

    const button = document.getElementById("showCreateUser"); //collects the button
    button.click(); //clicks the button

    expect(
      document.getElementById("container-createUser").style.visibility
    ).toBe("visible");
  });
});
