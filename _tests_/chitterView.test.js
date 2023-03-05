/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const ChitterView = require("../src/chitterView");
const ChitterClient = require("../src/chitterClient");
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
    const mockPeep1 = {
      id: 1,
      body: "my first peep :)",
      created_at: "2018-06-23T13:12:29.945Z",
      updated_at: "2018-06-23T13:12:29.945Z",
      user: {
        id: 1,
        handle: "kay",
      },
      likes: [],
    };

    model.addPeep(mockPeep1);
    // model.addPeep("Test peep 2");
    view.displayPeeps();
    expect(document.querySelectorAll("div.peep").length).toEqual(1);
  });

  it("displays peeps from the API", async () => {
    const model = new ChitterModel();
    const mockPeeps = [
      {
        id: 1,
        body: "my first peep :)",
        created_at: "2018-06-23T13:12:29.945Z",
        updated_at: "2018-06-23T13:12:29.945Z",
        user: {
          id: 1,
          handle: "kay",
        },
        likes: [],
      },
    ];
    const mockClient = {
      loadPeeps: jest.fn().mockResolvedValue(mockPeeps),
    };
    const view = new ChitterView(model, mockClient);

    await view.displayPeepsFromApi();

    expect(model.getPeeps()).toEqual(mockPeeps);
  });
});
