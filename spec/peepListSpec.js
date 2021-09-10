"use strict";

describe("PeepList tests", () => {
  let peeplist;
  let response;

  it("shows peeps", () => {
    response = new Response(JSON.stringify([{ body: "test text" }]));
    spyOn(window, "fetch").and.returnValue(Promise.resolve(response));
    peeplist = new PeepList();
    return peeplist.getPeeps().then(() => {
      expect(document.querySelector("#peepsList").innerHTML).toEqual(
        "<ul><li>test text</li></ul>"
      );
    });
  });
});
