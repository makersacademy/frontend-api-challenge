"use strict";

describe("user log in tests", () => {
  let userLogIn;
  let response;

  it("creates a new user", () => {
    let handle = "JasmineTest";
    let password = "password";
    response = new Response(
      JSON.stringify({
        user_id: 999,
        session_key: "_2a_12_Pgo1hhpBTcmVE9_oqFHyNu",
      })
    );
    spyOn(window, "fetch").and.returnValue(Promise.resolve(response));
    userLogIn = new UserLogIn();
    return userLogIn.logIn(handle, password).then(() => {
      expect(document.querySelector("#loggedOn").innerHTML).toEqual(
        "Logged in successfully!"
      );
    });
  });
});
