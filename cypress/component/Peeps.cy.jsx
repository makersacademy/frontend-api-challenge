// import { useQuery } from "react-query";
import Peeps from "../../src/components/Peeps";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";

describe("Peeps component", () => {
  beforeEach(() => {
    const mockData = [
      {
        id: 1,
        user: { handle: "user1" },
        body: "Hello world!",
        created_at: "2023-03-01T12:00:00.000Z",
      },
      {
        id: 2,
        user: { handle: "user2" },
        body: "How are you?",
        created_at: "2023-03-01T13:00:00.000Z",
      },
    ];
    cy.intercept("https://chitter-backend-api-v2.herokuapp.com/peeps", {
      body: mockData,
    }).as("repoData");
  });

  it("displays a list of peeps", () => {
    const queryClient = new QueryClient();
    cy.mount(
      <QueryClientProvider client={queryClient}>
        <Peeps />
      </QueryClientProvider>
    );
    cy.wait("@repoData");
    cy.get(".peeps-container")
      .children()
      .should("have.length", 2)
      .each(($peep, index) => {
        cy.wrap($peep)
          .find("p")
          .should(($p) => {
            const text = $p.text();
            expect(text).to.match(/^User: user\d/);
            expect(text).to.include("Body:");
            expect(text).to.include("Created at:");
            expect(text).to.include(`User: user${index + 1}`);
          });
      });
  });
});
