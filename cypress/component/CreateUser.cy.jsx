import CreateUser from "../../src/components/CreateUser";

describe("CreateUser component", () => {
  it("should render the component correctly", () => {
    cy.mount(<CreateUser />);
    cy.get("#username").should("exist");
    cy.get("#password").should("exist");
    cy.get("[data-test='submit-btn']").should("exist");
  });

  it("should update the username and password values when typed in", () => {
    cy.mount(<CreateUser />);
    cy.get("#username").type("testuser");
    cy.get("#password").type("testpassword");
    cy.get("#username").should("have.value", "testuser");
    cy.get("#password").should("have.value", "testpassword");
  });

  it("should not create a new user when the form is submitted", () => {
    cy.intercept("POST", "https://chitter-backend-api-v2.herokuapp.com/users", {
      statusCode: 201,
      body: {},
    }).as("createUser");
    cy.mount(<CreateUser onChangePage={() => {}} />);
    cy.get("#username").type("testuser");
    cy.get("#password").type("testpassword");
    cy.get("[data-test='submit-btn']").click();
    cy.wait("@createUser");
    cy.get("#create-user-btn").should("not.exist");
  });
});
