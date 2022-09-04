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
    fakeCallbackResponse.mockReturnValueOnce({
      user_id: 1,
      session_key: "a_valid_session_key",
    });
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
  });

  it("logs a user out", () => {
    fakeCallbackResponse.mockReturnValueOnce({
      user_id: 1,
      session_key: "a_valid_session_key",
    });
    document.querySelector("input#login-username").value = "username";
    document.querySelector("input#login-password").value = "password";
    document.querySelector("#login-button").click();
    document.querySelector("#logout-button").click();
    expect(model.loadUserId()).toBe(null);
    expect(model.loadSessionKey()).toBe(null);
  });

  it("posts a Peep", () => {
    fakeCallbackResponse.mockReturnValueOnce({
      user_id: 1,
      session_key: "a_valid_session_key",
    });
    document.querySelector("input#login-username").value = "kay";
    document.querySelector("input#login-password").value = "mypassword";
    document.querySelector("#login-button").click();

    fakeCallbackResponse.mockReturnValueOnce(testPostPeepResponse);
    document.querySelector("#post-peep-body").value = "this is a new peep";
    document.querySelector("#post-peep-button").click();
    document.querySelector("#post-peep-body").value = "";
    expect(mockApi.postPeep).toHaveBeenCalled();
    expect(mockApi.postPeep.mock.calls[0][0]).toBe("a_valid_session_key");
    expect(mockApi.postPeep.mock.calls[0][1]).toBe(1);
    expect(mockApi.postPeep.mock.calls[0][2]).toBe("this is a new peep");
    document.querySelector("#post-peep-success-message").textContent =
      "Peep posted successfully!";

    testPeepsArray.unshift(testPostPeepResponse);
    fakeCallbackResponse.mockReturnValueOnce(testPeepsArray);
    const newPeepEl = document.querySelector("div.peep");
    expect(newPeepEl.querySelector(".peep-body").textContent).toBe(
      "this is a new peep"
    );
    expect(newPeepEl.querySelector(".peep-user-handle")).textContent.toBe(
      "kay"
    );
    expect(newPeepEl.querySelector(".peep-datetime-created").textContent).toBe(
      "14:21 Sat Jun 23 2018"
    );
    expect(newPeepEl.querySelector(".peep-likes-count").textContent).toBe(
      "0 likes"
    );
  });
});
