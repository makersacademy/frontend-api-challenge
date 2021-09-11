"use strict";

describe("newUser tests", () => {
  let newUser;
  let response;

  it("retrieves a single peep", () => {
    let handle = "JasmineTest";
    let password = "password";
    response = new Response(
      JSON.stringify({
        id: 999,
        handle: handle,
      })
    );
    spyOn(window, "fetch").and.returnValue(Promise.resolve(response));
    newUser = new NewUser();
    return newUser.createUser(handle, password).then(() => {
      expect(document.querySelector("#userCreated").innerHTML).toEqual(handle);
    });
  });
});
