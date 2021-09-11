"use strict";

describe("newUser tests", () => {
  let newUser;
  let response;

  it("creates a new user", () => {
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
      expect(document.querySelector("#userCreated").innerHTML).toEqual(
        `JasmineTest created!`
      );
    });
  });

  it("cannot duplicate a user", () => {
    let handle = "JasmineTest";
    let password = "password";
    response = new Response(
      JSON.stringify({ handle: ["has already been taken"] })
    );
    spyOn(window, "fetch").and.returnValue(Promise.resolve(response));
    newUser = new NewUser();
    return newUser.createUser(handle, password).then(() => {
      expect(document.querySelector("#userCreated").innerHTML).toEqual(
        "Sorry, JasmineTest has already been taken"
      );
    });
  });
});

// test what happens if no password given? (can prevent this with frontend though)

// test what happens if no username given? (can prevent this with frontend though)
