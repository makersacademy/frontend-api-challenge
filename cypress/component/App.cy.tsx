import App from "../../src/App";

describe("App.cy.tsx", () => {
  it("playground", () => {
    cy.mount(<App />);
  });
});

export {};
