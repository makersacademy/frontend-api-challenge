/**
 * @jest-environment jsdom
 */

const ChitterPeep = require("../src/models/chitterPeep");
const ChitterView = require("../src/views/chitterView");
const ChitterClient = require("../src/clients/chitterClient");
const fs = require("fs");

describe("ChitterView", () => {
  it("calls fetch and loads repo info", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    const mockClient = {
      loadPeeps: jest.fn(),
    };

    const mockModel = {
      setPeeps: jest.fn(),
      getPeeps: jest.fn(),
    };

    const view = new ChitterView(mockModel, mockClient);

    // Mock the peeps returned from the API
    const mockPeeps = [
      {
        user: { handle: "John" },
        body: "Hello World",
        created_at: "2023-06-20T12:34:56.789Z",
        likes: [{ user: { handle: "Alice" } }],
      },

      {
        user: { handle: "Smith" },
        body: "Bye World",
        created_at: "2022-07-20T12:34:56.789Z",
        likes: [{ user: { handle: "Alice" } }],
      },
    ];

    // Mock the behavior of loadPeeps method to call the callback with the mockPeeps
    mockClient.loadPeeps.mockImplementationOnce((callback) => {
      callback(mockPeeps);
    });

    mockModel.getPeeps.mockImplementationOnce(() => {
      return mockPeeps;
    });

    // Call the displayPeepsFromApi method
    view.displayPeepsFromApi();

    // Expect the loadPeeps method to be called with the callback
    expect(mockClient.loadPeeps).toHaveBeenCalledWith(expect.any(Function));

    // Expect the setPeeps method to be called with the mockPeeps
    expect(mockModel.setPeeps).toHaveBeenCalledWith(mockPeeps);

    // Expect the displayPeeps method to be called
    const peepContainers = document.querySelectorAll(".peep");

    peepContainers.forEach((peepContainer, index) => {
      const peep = mockPeeps[index];
      console.log(peepContainer.querySelector("p.authorName"));

      expect(peepContainer.querySelector("#author").textContent).toBe(
        `Author: ${peep.user.handle}`
      );
      expect(peepContainer.querySelector("#content").textContent).toBe(
        `Content: ${peep.body}`
      );
      expect(peepContainer.querySelector("#created_at").textContent).toBe(
        `Created at: ${peep.created_at}`
      );
      expect(peepContainer.querySelector("#likes").textContent).toBe(
        `Likes: ${peep.likes.length}👍`
      );
    });
  });
});
