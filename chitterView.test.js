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
      expect(document.querySelector("#peep-list").innerHTML).toEqual(
        `<div class="peep-container" id="1"><div class="peep-header"><span class="peep-author">default</span> <span class="peep-handle">@default<span></span></span></div><div class="peep-body"><p>Default Peep 1</p></div><div class="peep-footer"><div class="peep-likes"><p class="peep-likes"><i class="fa-solid fa-heart peep-likes"></i> 0</p></div><div><p class="peep-repeeps"><i class="fa-solid fa-retweet peep-repeeps"></i> 0</p></div><div><p class="peep-comments"><i class="fa-solid fa-message peep-comments"></i> 0</p></div></div></div><div class="peep-container" id="2"><div class="peep-header"><span class="peep-author">default</span> <span class="peep-handle">@default<span></span></span></div><div class="peep-body"><p>Default Peep 2</p></div><div class="peep-footer"><div class="peep-likes"><p class="peep-likes"><i class="fa-solid fa-heart peep-likes"></i> 0</p></div><div><p class="peep-repeeps"><i class="fa-solid fa-retweet peep-repeeps"></i> 0</p></div><div><p class="peep-comments"><i class="fa-solid fa-message peep-comments"></i> 0</p></div></div></div><div class="peep-container" id="3"><div class="peep-header"><span class="peep-author">default</span> <span class="peep-handle">@default<span></span></span></div><div class="peep-body"><p>Default Peep 3</p></div><div class="peep-footer"><div class="peep-likes"><p class="peep-likes"><i class="fa-solid fa-heart peep-likes"></i> 0</p></div><div><p class="peep-repeeps"><i class="fa-solid fa-retweet peep-repeeps"></i> 0</p></div><div><p class="peep-comments"><i class="fa-solid fa-message peep-comments"></i> 0</p></div></div></div>`
      );
      done();
    });
  });
});
