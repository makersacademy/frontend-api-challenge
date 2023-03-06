describe("Authentication", () => {
  describe("Log In", () => {
    beforeEach(() => cy.visit("/login"));

    it("should display the page correctly", () => {
      cy.get('[data-cy="login-title"]').should(
        "have.text",
        "Welcome to Chitter"
      );
      cy.get("form").should("be.visible");
      cy.get('[data-cy="handle"]').should("be.visible");
      cy.get('[data-cy="password"]').should("be.visible");
      cy.get('[data-cy="user-box"]').should("not.exist");
      cy.get('[data-cy="nav-logout"]').should("not.exist");
      cy.get('[data-cy="sign-up-link"]')
        .should("be.visible")
        .and("have.attr", "href", "/signup");
    });

    it("should display an error message if a user log in with invalid credentials", () => {
      cy.get('[data-cy="handle"]').type("terryhycheng");
      cy.get('[data-cy="password"]').type("password1");
      cy.get('[data-cy="submit-btn"]').click();
      cy.get('[data-cy="warning-msg"]')
        .should("be.visible")
        .and("have.text", "Invalid username or password");
    });

    it("should handle correctly if the user hasn't registered", () => {
      cy.get('[data-cy="handle"]').type("terryhycheng993");
      cy.get('[data-cy="password"]').type("password");
      cy.get('[data-cy="submit-btn"]').click();
      cy.get('[data-cy="warning-msg"]')
        .should("be.visible")
        .and(
          "have.text",
          "No record is found for this username. Have you registered?"
        );
    });

    it("allows a user to log in with valid credentials and redirect to Homepage", () => {
      cy.get('[data-cy="handle"]').type("terryhycheng");
      cy.get('[data-cy="password"]').type("password");
      cy.get('[data-cy="submit-btn"]').click();

      // should redirect to Homepage
      cy.url().should("eq", "http://localhost:5173/");
      cy.get("h1").should("have.text", "Home");
      cy.get('[data-cy="user-box"]')
        .should("be.visible")
        .and("contain", "terryhycheng")
        .and("contain", "@terryhycheng");
      cy.get('[data-cy="user-box"]')
        .get("img")
        .should("have.attr", "src", "https://robohash.org/1240");
      cy.get('[data-cy="nav-logout"]').should("exist");
      cy.get('[data-cy="nav-login"]').should("not.exist");
    });

    it('should not allow a logged-in user to reach "register" or "login" page', () => {
      cy.login("terryhycheng", "password");
      cy.url().should("eq", "http://localhost:5173/");
      cy.visit("/login");
      cy.url().should("eq", "http://localhost:5173/");
      cy.visit("/signup");
      cy.url().should("eq", "http://localhost:5173/");
    });
  });

  describe("Log Out", () => {
    beforeEach(() => cy.login("terryhycheng", "password"));

    it("allows a user to log out", () => {
      cy.get('[data-cy="nav-logout"]').click();
      cy.get('[data-cy="user-box"]').should("not.exist");
      cy.get('[data-cy="nav-logout"]').should("not.exist");
      cy.url().should("eq", "http://localhost:5173/");
    });
  });

  describe("Sign Up", () => {
    beforeEach(() => {
      cy.visit("/signup");
      cy.get('[data-cy="handle"]').as("handle-input");
      cy.get('[data-cy="password"]').as("password-input");
      cy.get('[data-cy="submit-btn"]').as("submit-btn");
      cy.get('[data-cy="back-btn"]').as("back-btn");
    });

    it("should display a correct register form", () => {
      cy.get('[data-cy="signup-title"]').should(
        "have.text",
        "Sign Up to Connect with Makers"
      );
      cy.get("form").should("be.visible");
      cy.get("@handle-input").should("be.visible");
      cy.get("@password-input").should("be.visible");
      cy.get("@submit-btn").should("be.visible");
      cy.get("@back-btn").should("be.visible");
    });

    it("should display an error message if username already existed in db", () => {
      cy.get("@handle-input").type("terryhycheng");
      cy.get("@password-input").type("password");
      cy.get("@submit-btn").click();
      cy.get('[data-cy="warning-msg"]').should(
        "have.text",
        "has already been taken"
      );
    });

    it("should allow a user to sign up a new account", () => {
      const alertShown = cy.stub().as("alertShown");
      cy.on("window:alert", alertShown);
      cy.get("@handle-input").type(crypto.randomUUID().slice(0, 8));
      cy.get("@password-input").type("password");
      cy.get("@submit-btn").click();
      cy.get("@alertShown").should(
        "have.been.calledOnceWith",
        "You have successfully register! Please log in with your credentials."
      );
      cy.url().should("eq", "http://localhost:5173/login");
    });
  });
});

export {};
