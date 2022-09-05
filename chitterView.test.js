/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const { default: JSDOMEnvironment } = require("jest-environment-jsdom");
const ChitterModel = require("./chitterModel");
const ChitterView = require("./chitterView");
const DisplaySinglePeep = require("./displaySinglePeep");
const testPostPeepResponse = require("./testPostPeepResponse");
let view,
  model,
  mockApi,
  displaySinglePeep,
  testPeepsArray,
  testUserSessionResponse,
  fakeCallbackResponse;

describe("ChitterView", () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    model = new ChitterModel();
    testPeepsArray = require("./testPeepsArray");
    testUserSessionResponse = require("./testUserSessionResponse");
    fakeCallbackResponse = jest.fn();
    mockApi = {
      fetchPeeps: jest.fn((callback) => callback(fakeCallbackResponse())),
      createUser: jest.fn((username, password, callback) =>
        callback(fakeCallbackResponse())
      ),
      loginUser: jest.fn((username, password, callback) =>
        callback(fakeCallbackResponse())
      ),
      postPeep: jest.fn((sessionKey, userId, peepBody, callback) =>
        callback(fakeCallbackResponse())
      ),
      deletePeep: jest.fn((peepId, sessionKey, callback) =>
        callback(fakeCallbackResponse())
      ),
    };

    displaySinglePeep = new DisplaySinglePeep();
    view = new ChitterView(model, mockApi, displaySinglePeep);
  });

  it("displays all Peeps", () => {
    fakeCallbackResponse.mockReturnValueOnce(testPeepsArray);
    view.displayPeepsFromApi();
    expect(mockApi.fetchPeeps).toHaveBeenCalled();
    const peepDivEls = document.querySelectorAll("div.peep");
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
    ).toBe("13:04 Sun Aug 07 2022");
    expect(peepDivEls[1].querySelector(".peep-likes-count").textContent).toBe(
      "0 likes"
    );
  });

  it("doesn't add new peeps with each successive call of displayPeeps", () => {
    fakeCallbackResponse.mockReturnValue(testPeepsArray);
    view.displayPeepsFromApi();
    expect(mockApi.fetchPeeps).toHaveBeenCalled();
    view.displayPeepsFromApi();
    const peepDivEls = document.querySelectorAll("div.peep");
    expect(peepDivEls.length).toBe(2);
  });

  it("creates a new user", () => {
    fakeCallbackResponse.mockReturnValueOnce(testUserSessionResponse);
    document.querySelector("input#create-username").value = "username";
    document.querySelector("input#create-password").value = "password";
    document.querySelector("#create-user-button").click();
    expect(mockApi.createUser).toHaveBeenCalled();
    expect(mockApi.createUser.mock.calls[0][0]).toBe("username");
    expect(mockApi.createUser.mock.calls[0][1]).toBe("password");
    expect(
      document.querySelector("#new-user-created-message").textContent
    ).toBe("You have created a new account!");
    expect(document.querySelector("input#create-username").value).toBe("");
    expect(document.querySelector("input#create-password").value).toBe("");
  });

  it("displays a new user error", () => {
    fakeCallbackResponse.mockReturnValueOnce({
      handle: ["has already been taken"],
    });
    document.querySelector("input#create-username").value = "username";
    document.querySelector("input#create-password").value = "password";
    document.querySelector("#create-user-button").click();
    expect(mockApi.createUser).toHaveBeenCalled();
    expect(mockApi.createUser.mock.calls[0][0]).toBe("username");
    expect(mockApi.createUser.mock.calls[0][1]).toBe("password");
    expect(document.querySelector("#handle-taken-message").textContent).toBe(
      "This handle has been taken"
    );
    expect(document.querySelector("input#create-username").value).toBe("");
    expect(document.querySelector("input#create-password").value).toBe("");
  });

  it("logs in a user", () => {
    fakeCallbackResponse
      .mockReturnValueOnce({
        user_id: 1,
        session_key: "a_valid_session_key",
      })
      .mockReturnValueOnce(testPeepsArray);
    document.querySelector("input#login-username").value = "username";
    document.querySelector("input#login-password").value = "password";
    document.querySelector("#login-button").click();
    expect(mockApi.loginUser).toHaveBeenCalled();
    expect(mockApi.loginUser.mock.calls[0][0]).toBe("username");
    expect(mockApi.loginUser.mock.calls[0][1]).toBe("password");
    expect(document.querySelector("input#login-username").value).toBe("");
    expect(document.querySelector("input#login-password").value).toBe("");
    expect(model.loadUserId()).toBe(1);
    expect(model.loadSessionKey()).toBe("a_valid_session_key");
    expect(mockApi.fetchPeeps).toHaveBeenCalled();
  });

  it("logs a user out", () => {
    fakeCallbackResponse.mockReturnValue(testPeepsArray).mockReturnValueOnce({
      user_id: 1,
      session_key: "a_valid_session_key",
    });
    document.querySelector("input#login-username").value = "username";
    document.querySelector("input#login-password").value = "password";
    document.querySelector("#login-button").click();
    expect(mockApi.fetchPeeps).toHaveBeenCalled();
    document.querySelector("#logout-button").click();
    expect(model.loadUserId()).toBe(null);
    expect(model.loadSessionKey()).toBe(null);
    expect(mockApi.fetchPeeps).toHaveBeenCalled();
  });

  it("posts a Peep", () => {
    fakeCallbackResponse
      .mockReturnValueOnce({
        user_id: 1,
        session_key: "a_valid_session_key",
      })
      .mockReturnValueOnce(testPeepsArray);
    document.querySelector("input#login-username").value = "kay";
    document.querySelector("input#login-password").value = "mypassword";
    document.querySelector("#login-button").click();
    fakeCallbackResponse
      .mockReturnValueOnce(testPostPeepResponse)
      .mockReturnValueOnce([testPostPeepResponse].concat(testPeepsArray));
    document.querySelector("#post-peep-body").value = "my first peep :)";
    document.querySelector("#post-peep-button").click();
    expect(mockApi.postPeep).toHaveBeenCalled();
    expect(mockApi.postPeep.mock.calls[0][0]).toBe("a_valid_session_key");
    expect(mockApi.postPeep.mock.calls[0][1]).toBe(1);
    expect(mockApi.postPeep.mock.calls[0][2]).toBe("my first peep :)");
    expect(document.querySelector("#post-peep-body").value).toBe("");
    document.querySelector("#post-peep-success-message").textContent =
      "Peep posted successfully!";

    expect(mockApi.fetchPeeps).toHaveBeenCalled();
    const newPeepEls = document.querySelectorAll("div.peep");
    expect(newPeepEls.length).toBe(3);
    expect(newPeepEls[0].querySelector(".peep-body").textContent).toBe(
      "my first peep :)"
    );
    expect(newPeepEls[0].querySelector(".peep-user-handle").textContent).toBe(
      "kay"
    );
    expect(
      newPeepEls[0].querySelector(".peep-datetime-created").textContent
    ).toBe("14:21 Sat Jun 23 2018");
    expect(newPeepEls[0].querySelector(".peep-likes-count").textContent).toBe(
      "0 likes"
    );
  });

  it("deletes a peep", () => {
    fakeCallbackResponse
      .mockReturnValueOnce({
        user_id: 1124,
        session_key: "a_valid_session_key",
      })
      .mockReturnValue(testPeepsArray);
    document.querySelector("input#login-username").value = "jony144";
    document.querySelector("input#login-password").value = "mypassword";
    document.querySelector("#login-button").click();
    expect(document.querySelectorAll(".delete-peep-button").length).toBe(1);
    document
      .querySelectorAll("div.peep")[0]
      .querySelector(".delete-peep-button")
      .click();
    expect(mockApi.deletePeep).toHaveBeenCalled();
    expect(mockApi.deletePeep.mock.calls[0][0]).toBe("1494");
    expect(mockApi.deletePeep.mock.calls[0][1]).toBe("a_valid_session_key");
    expect(mockApi.fetchPeeps).toHaveBeenCalledTimes(2);
  });
});
