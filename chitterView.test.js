/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const ChitterPeepsModel = require("./chitterPeepsModel");
const ChitterView = require("./chitterView");
let view, model, mockApi, testPeepsArray;

describe("ChitterView", () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    model = new ChitterPeepsModel();
    testPeepsArray = require("./testPeepsArray");
    mockApi = { fetchPeeps: () => testPeepsArray };
    view = new ChitterView(model, mockApi);
  });
  it("displays all Peeps", () => {
    view.displayPeepsFromApi();
    const peepDivEls = document.querySelector("div.peep");
    expect(peepDivEls.length).toBe(2);
    expect(peepDivEls[0].querySelector(".peep-body").textContent).toBe(
      "First peep"
    );
    expect(peepDivEls[0].querySelector(".peep-user-handle").textContent).toBe(
      "jony144"
    );
    expect(
      peepDivEls[0].querySelector(".peep-datetime-created").textContent
    ).toBe("12:33 Sat Aug 20 2022");
    expect(peepDivEls[0].querySelector(".peep-likes-count").textContent).toBe(
      "1 like"
    );
    expect(peepDivEls[1].querySelector(".peep-body").textContent).toBe(
      "i'm tiz"
    );
    expect(peepDivEls[1].querySelector(".peep-user-handle").textContent).toBe(
      "tiz"
    );
    expect(
      peepDivEls[1].querySelector(".peep-datetime-created").textContent
    ).toBe("13:04 Sun Aug 07 2022'");
    expect(peepDivEls[1].querySelector(".peep-likes-count").textContent).toBe(
      "0 likes"
    );
  });
});
