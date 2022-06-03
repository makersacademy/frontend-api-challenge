/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const ChitterView = require("./chitterView");
const ChitterModel = require("./chitterModel");

describe("ChitterView", () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    model = new ChitterModel();

    mockApi = {
      fetchPeeps: () => {
        return [{ body: "this is a peep from the mock api" }];
      },
    };

    view = new ChitterView(model, mockApi);
  });

  describe("displayPeepsFromApi", () => {
    it("should display peeps from server on page", async () => {
      await view.displayPeepsFromApi();

      expect(document.querySelectorAll("div.peep").length).toBe(1);
      expect(document.querySelectorAll("div.peep")[0].innerText).toBe(
        "this is a peep from the mock api"
      );
    });
  });
});
