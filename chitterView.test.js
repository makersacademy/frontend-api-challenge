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

  it("should allow the user to login", async () => {
    const createAccountBtn = document.querySelector("#create-account-btn");
    createAccountBtn.click();

    const handleInput = document.querySelector("#create-account-handle");
    handleInput.value = "luke";

    const passwordInput = document.querySelector("#create-account-password");
    passwordInput.value = "password123";

    const createSubmitBtn = document.querySelector("#create-account-submit");
    createSubmitBtn.click();

    setTimeout(() => {
      expect(document.querySelector("#notice").innerText).toEqual(
        "Thanks luke your account has been created"
      );
    }, 0);
  });
});
