describe("template spec", () => {
  it("starts from count 0 to 1 after a click", () => {
    cy.visit("http://localhost:5173");
    // const counterBtn = cy.get("div.card > button");
    // counterBtn.should("have.text", "count is 0");
    // counterBtn.click();
    // counterBtn.should("have.text", "count is 1");
  });

  it("shows 50 peeps on the main page", () => {
    cy.visit("http://localhost:5173");
    cy.get("div.peep").should("have.length", 50);
  });
});
