/**
 * @jest-environment jsdom
 */

const fs = require("fs");
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

    const peepModel = new PeepModel(api);
    peepModel.loadPeepsData((data) => console.log(data));

    expect(peepModel.getPeeps()[0].body).toBe("test peep");
  });
});
