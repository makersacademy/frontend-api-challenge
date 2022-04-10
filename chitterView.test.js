/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const ChitterView = require("./chitterView.js");

let chitterView;

beforeEach(() => {
  document.body.innerHTML = fs.readFileSync("./index.html");
  chitterView = new ChitterView();
});

describe("ChitterView", () => {
  describe("displayPeeps", () => {
    it("displays peeps on the homepage", (done) => {
      chitterView.displayPeeps();
      expect(document.querySelectorAll(".peep-container").length).toEqual(3);
      done();
    });
  });
  describe("displayButtons", () => {
    it("displays Sign Up, Sign In, and Sign Out buttons in the navbar", (done) => {
      chitterView.displayButtons();
      expect(navbar.querySelectorAll(".button").length).toEqual(3);
      done();
    });
  });
});
