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
    peepModel.loadPeepsData((data) => console.log(data));

    await new Promise((resolve) => setTimeout(resolve, 800));

    const peeps = peepModel.getPeeps[0]
    console.log(peeps)
    expect(peeps.body).toBe("test peep");
  });
});
