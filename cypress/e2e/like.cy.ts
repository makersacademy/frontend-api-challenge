describe("Like", () => {
  beforeEach(() => cy.visit("/"));

  describe("Without login", () => {
    it("should not allow a non-logged-in user to like any peep", () => {
      const alertShown = cy.stub().as("alterShown");
      cy.on("window:alert", alertShown);
      cy.get('[data-cy="like-btn"]').first().click();
      cy.get("@alterShown").should(
        "have.been.calledOnceWith",
        "You have to log in to like a peep."
      );
      cy.url().should("eq", "http://localhost:5173/login");
    });
  });

  describe("With login", () => {
    beforeEach(() => {
      cy.login("terryhycheng", "password");
    });
    it("allows a user to toggle between like and dislike", () => {
      cy.get('[data-cy="like-btn"]').first().click();
      cy.get('[data-cy="like-btn"]').first().should("have.class", "bg-twred");
      cy.get('[data-cy="like-btn"]').first().click();
      cy.get('[data-cy="like-btn"]')
        .first()
        .should("have.class", "fill-secondary");
    });
  });
});

export {};
