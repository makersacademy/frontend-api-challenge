/**
 * @jest-environment jsdom
 */

const PeepsView = require("./peepsView");
const PeepsModel = require("./peepsModel");
const fs = require("fs");

let view;
beforeEach(() => {
  document.body.innerHTML = fs.readFileSync("./index.html");
  const fakeModel = {
    getPeeps: (callback) => {
      [
        { body: "peep1", created_at: "2022-09-09", user: { handle: "Gaya" } },
        { body: "peep2", created_at: "2022-09-10", user: { handle: "Gaya" } },
      ];
    },
  };
  view = new PeepsView(fakeModel);
});

describe("PeepsView", () => {
  it("displays 2 peeps", () => {
    const peeps = [
      { body: "peep1", created_at: "2022-09-09", user: { handle: "Gaya" } },
      { body: "peep2", created_at: "2022-09-10", user: { handle: "Gaya" } },
    ];
    view.displayPeeps(peeps);
    console.log(document.querySelector("div.peep"));
    expect(document.querySelectorAll("div.peep").length).toEqual(2);
  });
});
