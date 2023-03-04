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
    });

    it("should display an image and text", () => {
      cy.get('[data-cy="image"]').should(
        "have.attr",
        "src",
        "https://robohash.org/123"
      );
      cy.get('[data-cy="username"]').should("have.text", "Terry");
      cy.get('[data-cy="username"]').should("have.class", "hidden");
      cy.get('[data-cy="image"]').should(
        "not.have.class",
        "border-primary bg-primary bg-opacity-20"
      );
      cy.get('[data-cy="username"]').should("not.be.visible");
    });

    it("should have a correct hover effect", () => {
      cy.get('[data-cy="container"]').realHover();
      cy.get('[data-cy="username"]').should("be.visible");
    });
  });

  describe("Icon of the current user", () => {
    beforeEach(() => {
      const user: userType = {
        id: 123,
        handle: "Terry",
      };
      cy.mount(<LikedUserIcon user={user} userId={123} />);
    });

    it("should display with blue background", () => {
      cy.get('[data-cy="image"]').should(
        "have.attr",
        "src",
        "https://robohash.org/123"
      );
      cy.get('[data-cy="image"]').should(
        "have.class",
        "border-primary bg-primary bg-opacity-20"
      );
      cy.get('[data-cy="username"]').should("have.text", "You");
      cy.get('[data-cy="username"]').should("have.class", "hidden");
      cy.get('[data-cy="username"]').should("not.be.visible");
    });
  });
});
