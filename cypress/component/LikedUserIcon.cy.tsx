import { LikedUserIcon } from "../../src/components/LikedUserIcon";
import { userType } from "../../types/apiData";

describe("LikedUserIcon Component Test", () => {
  describe("Icons of other users", () => {
    beforeEach(() => {
      const user: userType = {
        id: 123,
        handle: "Terry",
      };
      cy.mount(<LikedUserIcon user={user} userId={1} />);
      cy.get('[data-cy="username"]').as("username");
      cy.get('[data-cy="image"]').as("image");
    });

    it("should display an image and text", () => {
      cy.get("@image").should("have.attr", "src", "https://robohash.org/123");
      cy.get("@username").should("have.text", "Terry");
      cy.get("@username").should("have.class", "hidden");
      cy.get("@image").should(
        "not.have.class",
        "border-primary bg-primary bg-opacity-20"
      );
      cy.get("@username").should("not.be.visible");
    });

    it("should have a correct hover effect", () => {
      cy.get('[data-cy="container"]').realHover();
      cy.get("@username").should("be.visible");
    });
  });

  describe("Icon of the current user", () => {
    beforeEach(() => {
      const user: userType = {
        id: 123,
        handle: "Terry",
      };
      cy.mount(<LikedUserIcon user={user} userId={123} />);
      cy.get('[data-cy="username"]').as("username");
      cy.get('[data-cy="image"]').as("image");
    });

    it("should display with blue background", () => {
      cy.get("@image").should("have.attr", "src", "https://robohash.org/123");
      cy.get("@image").should(
        "have.class",
        "border-primary bg-primary bg-opacity-20"
      );
      cy.get("@username").should("have.text", "You");
      cy.get("@username").should("have.class", "hidden");
      cy.get("@username").should("not.be.visible");
    });
  });
});
