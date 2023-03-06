describe("template spec", () => {
  it("starts from count 0 to 1 after a click", () => {
    cy.visit("/");
    // const counterBtn = cy.get("div.card > button");
    // counterBtn.should("have.text", "count is 0");
    // counterBtn.click();
    // counterBtn.should("have.text", "count is 1");
  });

  it("shows 50 peeps on the main page", () => {
    cy.visit("http://localhost:5173");
    cy.get("div.peep").should("have.length", 50);
  });

  it("shows the create user page", () => {
    cy.intercept("POST", "https://chitter-backend-api-v2.herokuapp.com/users", {
      statusCode: 201,
      body: {},
    }).as("createUser");
    cy.visit("http://localhost:5173");
    cy.get("button").contains("Create User").click();
    cy.get("input#username").should("exist");
    cy.get("input#password").should("exist");
    cy.getByData("submit-btn").contains("Create User");
    cy.get("input#username").type("testuser");
    cy.get("input#password").type("testpassword");
    cy.getByData("submit-btn").click();
    cy.wait("@createUser").then(({ response }) => {
      expect(response.statusCode).to.eq(201);
      cy.get("#create-user-btn").should("not.exist");
    });
  });
});
