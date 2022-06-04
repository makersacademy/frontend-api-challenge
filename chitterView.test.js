/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const ChitterView = require("./chitterView");
const ChitterModel = require("./chitterModel");
const ChitterApi = require("./chitterApi");

jest.mock("./chitterApi");

describe("ChitterView", () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    model = new ChitterModel();
    api = new ChitterApi();

    api.fetchPeeps.mockImplementation(() => {
      return [{ body: "this is a peep from the mock api" }];
    });

    api.createUser.mockImplementation(() => {
      return { handle: "luke", id: 1 };
    });

    api.logInUser.mockImplementation(() => {
      return { user_id: 1, session_key: "a_valid_session_key" };
    });

    api.createPeep.mockImplementation(() => {
      return { body: "my first peep" };
    });

    view = new ChitterView(model, api);
  });

  describe("displayPeepsFromApi", () => {
    it("should display peeps from server on page", async () => {
      await view.displayPeepsFromApi();

      expect(document.querySelectorAll("div.peep").length).toBe(1);
      expect(document.querySelectorAll("div.peep")[0].innerText).toBe(
        "this is a peep from the mock api"
      );
    });
  });

  describe("createAccount", () => {
    it("signs up the user", async () => {
      await view.createAccount("luke", "password123");

      expect(document.querySelector("#notice").innerText).toEqual(
        "Thanks luke your account has been created"
      );
    });

    it("allows user to sign up with handle and password", async () => {
      view.createAccountBtn.click();
      view.createHandleInput.value = "luke";
      view.createPasswordInput.value = "password123";
      view.createAccountSubmit.click();

      expect(api.createUser).toBeCalledWith("luke", "password123");
    });
  });

  describe("signIn", () => {
    it("should log the user in", async () => {
      await view.signIn("luke", "password123");

      expect(document.querySelector("#notice").innerText).toEqual(
        "Thanks a_valid_session_key you have successfully logged in"
      );
    });

    it("should allow the user to log in with the handle and password fields", async () => {
      view.loginBtn.click();
      view.loginHandleInput.value = "luke";
      view.loginPasswordInput.value = "password123";
      view.loginSubmit.click();

      expect(api.logInUser).toBeCalledWith("luke", "password123");
    });

    it("saves the session in the model", async () => {
      await view.signIn("luke", "password123");

      expect(model.getSession()).toEqual({
        user_id: 1,
        session_key: "a_valid_session_key",
      });
    });
  });

  describe("newPeep", () => {
    it("should create a new peep", async () => {
      const session = await api.logInUser("luke", "password123");

      await view.newPeep(session.session_key, session.user_id, "my first peep");

      expect(document.querySelectorAll("div.peep").length).toBe(1);
      expect(document.querySelectorAll("div.peep")[0].innerText).toBe(
        "my first peep"
      );
    });

    it("should allow the user to create a new peep", async () => {
      const session = await view.signIn("luke", "password123");

      view.peepInput.value = "my first peep";
      view.peepSubmit.click();

      expect(api.createPeep).toBeCalledWith(
        "a_valid_session_key",
        1,
        "my first peep"
      );
    });
  });
});
