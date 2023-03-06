describe("Peep", () => {
  describe("Homepage", () => {
    beforeEach(() => cy.visit("/"));

    it("should show 50 peeps on the homepage with like buttons and links to its single page", () => {
      cy.get('[data-cy="peep-card"]').should("have.length", 50);
      cy.get('[data-cy="peep-card"]').first().as("card");
      cy.get("@card").find('[data-cy="like-btn"]').should("exist");
      cy.get("@card").find('[data-cy="post-link"]').should("exist");
      cy.get("@card").find("h3").should("exist");
      cy.get("@card").find("h4").should("exist");
      cy.get("@card").find('[data-cy="body"]').should("exist");
    });
  });

  describe("Single Peep Page", () => {
    it("allows a user to switch between single page and Homepage", () => {
      cy.visit("/");
      cy.get('[data-cy="peep-card"]').first().as("card");
      cy.get("@card").find('[data-cy="post-link"]').click();
      cy.get('[data-cy="back-btn"]').should("be.visible");
      cy.get('[data-cy="back-btn"]').click();
      cy.url().should("eq", "http://localhost:5173/");
    });

    describe("Without Login", () => {
      it("should display peep contents correctly", () => {
        cy.visit("/peep/1750");
        cy.get('[data-cy="main-user-icon"]').should(
          "have.attr",
          "src",
          "https://robohash.org/1240"
        );
        cy.get('[data-cy="username"]')
          .should("be.visible")
          .and("have.text", "terryhycheng");
        cy.get('[data-cy="body"]')
          .should("be.visible")
          .and("have.text", '"A peep from Jan23 cohort :)"');
        cy.get('[data-cy="icon-container"]').should("exist");
        cy.get('[data-cy="delete-btn"]').should("not.be.visible");
        cy.get('[data-cy="like-counts"]')
          .should("exist")
          .and("contain", "Likes");
      });
    });

    describe("After Login", () => {
      it("should display peep contents correctly", () => {
        cy.login("terryhycheng", "password");
        cy.url().should("eq", "http://localhost:5173/");
        cy.visit("/peep/1750");
        cy.get('[data-cy="main-user-icon"]').should(
          "have.attr",
          "src",
          "https://robohash.org/1240"
        );
        cy.get('[data-cy="username"]')
          .should("be.visible")
          .and("have.text", "You");
        cy.get('[data-cy="body"]')
          .should("be.visible")
          .and("have.text", '"A peep from Jan23 cohort :)"');
        cy.get('[data-cy="icon-container"]').should("exist");
        cy.get('[data-cy="like-counts"]')
          .should("exist")
          .and("contain", "Likes");
        cy.get('[data-cy="delete-btn"]').should("be.visible");
      });
    });
  });

  describe("Create a peep", () => {
    describe("Without Login", () => {
      it("should redirect a user to Homepage", () => {
        cy.visit("/create-peep");
        cy.url().should("eq", "http://localhost:5173/");
      });
    });

    describe("With Login", () => {
      beforeEach(() => {
        cy.login("terryhycheng", "password");
        cy.url().should("eq", "http://localhost:5173/");
        cy.visit("/create-peep");
      });

      it("allows a user to create a peep", () => {
        cy.get("textarea").type("This is an auto-generated test from Cypress");
        cy.get('[type="submit"]').click();
        cy.url().should("eq", "http://localhost:5173/");
      });
    });
  });

  describe("Delete a peep", () => {
    beforeEach(() => {
      cy.login("terryhycheng", "password");
      cy.url().should("eq", "http://localhost:5173/");
      cy.get('[data-cy="peep-card"]')
        .first()
        .find('[data-cy="post-link"]')
        .click();
    });

    it("allows a user to delete a peep", () => {
      cy.get('[data-cy="delete-btn"]').click();
      cy.url().should("eq", "http://localhost:5173/");
    });
  });
});

export {};
