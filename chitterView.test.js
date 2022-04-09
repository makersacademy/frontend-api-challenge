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
      console.log(`Document: ${document.body.innerHTML}`);
      chitterView.displayPeeps();
      console.log(document.querySelector("#peep-list").innerHTML);
      done();
    });
  });
});
