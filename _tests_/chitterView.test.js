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
  });

  it("displays multiple peeps", () => {
    const model = new ChitterModel();
    const mockClient = new ChitterClient();
    const view = new ChitterView(model, mockClient);
    model.addPeep("Test peep");
    model.addPeep("Test peep 2");
    view.displayPeeps();
    expect(document.querySelectorAll("div.peep").length).toEqual(2);
  });

  it.only("displays peeps from the API", () => {
    const model = new ChitterModel();
    const mockClient = new ChitterClient();
    const view = new ChitterView(model, mockClient);
    view.displayPeepsFromApi();
    const peeps = document.querySelectorAll(".peep");
  });
});
