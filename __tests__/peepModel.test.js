/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const Api = require("../src/api");
const PeepModel = require("../src/model/peepModel");

describe("PeepModel", function () {
  test("Saves peep data in peeps variable", async () => {
    const api = {
      loadPeeps: (callback) =>
        callback([
          {
            id: 106,
            body: "test peep",
          },
        ]),
    };

    peepModel = new PeepModel(api);
    peepModel.loadPeepsData();

    await new Promise((resolve) => setTimeout(resolve, 200));

    expect(peepModel.getPeeps[0].body).toBe("test peep");
  });
});
