/**
 * @jest-environment jsdom
 */
const fs = require("fs");
const ChitterView = require("../src/chitterView");
const ChitterClient = require("../src/chitterClient");
const chitterModel = require("../src/chitterModel");
const ChitterModel = require("../src/chitterModel");

jest.mock("../src/chitterClient.js");

describe("ChitterView", () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    ChitterClient.mockClear();

    const model = new ChitterModel();
    const mockClient = new ChitterClient();
    const view = new ChitterView(model, mockClient);
  });

  it("displays peeps from the API", () => {
    view.displayPeeps();
    const peeps = document.querySelectorAll(".peep");
  });
});
