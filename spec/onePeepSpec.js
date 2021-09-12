"use strict";

describe("onePeep tests", () => {
  let onePeep;
  let response;

  it("retrieves a single peep", () => {
    response = new Response(
      JSON.stringify({ id: 1, body: "my first peep :)" })
    );
    spyOn(window, "fetch").and.returnValue(Promise.resolve(response));
    onePeep = new OnePeep();
    return onePeep.getPeep(1).then(() => {
      expect(document.querySelector("#onepeep").innerHTML).toEqual(
        "my first peep :)"
      );
    });
  });
});
