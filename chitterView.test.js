/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const ChitterView = require("./chitterView");
const ChitterModel = require("./chitterModel");

describe("ChitterView", () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    model = new ChitterModel();

    mockApi = {
      fetchPeeps: () => {
        return [{ body: "this is a peep from the mock api" }];
      },

      createUser: () => {
        return { handle: "luke", id: 1 };
      },

      logInUser: () => {
        return { user_id: 1, session_key: "a_valid_session_key" };
      },
    };

    view = new ChitterView(model, mockApi);
  });

  it("should display peeps from server on page", async () => {
    await view.displayPeepsFromApi();

    expect(document.querySelectorAll("div.peep").length).toBe(1);
    expect(document.querySelectorAll("div.peep")[0].innerText).toBe(
      "this is a peep from the mock api"
    );
  });

  it("should allow the user to sign up", async () => {
    await view.createAccount("luke", "password123");

    expect(document.querySelector("#notice").innerText).toEqual(
      "Thanks luke your account has been created"
    );
  });

  it("should allow the user to log in", async () => {
    await view.signIn("luke", "password123");

    expect(document.querySelector("#notice").innerText).toEqual(
      "Thanks a_valid_session_key you have successfully logged in"
    );
  });
});
