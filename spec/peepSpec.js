"use strict";

describe("user log in tests", () => {
  let newPeep;
  let response;

  it("successfully logs in", () => {
    let token = "_2a_12_Pgo1hhpBTcmVE9_oqFHyNu";
    let id = "1";
    let peep = "my first peep";
    response = new Response(
      JSON.stringify({
        body: "my sent peep :)",
        id: "1",
      })
    );
    spyOn(window, "fetch").and.returnValue(Promise.resolve(response));
    newPeep = new Peep();
    return newPeep.sendPeep(token, id, peep).then(() => {
      expect(document.querySelector("#peepsent").innerHTML).toEqual(
        "Your peep was sent successfully!"
      );
    });
  });
});
