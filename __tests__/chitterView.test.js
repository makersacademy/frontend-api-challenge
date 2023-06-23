/**
 * @jest-environment jsdom
 */

const ChitterPeep = require("../src/models/chitterPeep");
const ChitterView = require("../src/views/chitterView");
const ChitterUser = require("../src/models/chitterUser");
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

  describe("handleSignup", () => {
    it("should sign up a user successfully", () => {
      const mockUser = new ChitterUser("testUser", "testPassword");

      const mockClient = {
        signupUser: jest.fn((user, callback) => {
          // Simulate successful signup by calling the callback with the user data
          callback(mockUser);
        }),
      };

      const view = new ChitterView({}, mockClient);

      // Mock the prompt function to provide user input
      jest
        .spyOn(window, "prompt")
        .mockReturnValueOnce("testUser")
        .mockReturnValueOnce("testPassword");

      // Call the handleSignup method
      view.handleSignup();

      // Expect the signupUser method to be called with the mockUser object
      expect(mockClient.signupUser).toHaveBeenCalledWith(
        mockUser,
        expect.any(Function)
      );

      // Expect the user property of the view to be set with the mockUser object
      expect(view.user).toEqual(mockUser);
    });
  });

  describe("handleLogin", () => {
    it("should log in a user successfully", () => {
      const mockUser = new ChitterUser("testUser", "testPassword");

      const mockClient = {
        loginUser: jest.fn((user, callback) => {
          // Simulate successful login by calling the callback with session_key and user_id
          callback({ session_key: "testSessionKey", user_id: 1 });
        }),
      };

      const view = new ChitterView({}, mockClient);

      // Mock the prompt function to provide user input
      jest
        .spyOn(window, "prompt")
        .mockReturnValueOnce("testUser")
        .mockReturnValueOnce("testPassword");

      // Call the handleLogin method
      view.handleLogin();

      // Expect the loginUser method to be called with the mockUser object
      expect(mockClient.loginUser).toHaveBeenCalledWith(
        {
          handle: "testUser",
          password: "testPassword",
          sessionKey: "testSessionKey",
          userId: 1,
        },
        expect.any(Function)
      );

      // Expect the user property of the view to be set with the mockUser object
      expect(view.user).toEqual({
        handle: "testUser",
        password: "testPassword",
        sessionKey: "testSessionKey",
        userId: 1,
      });
    });
  });

  it("should create a peep successfully", () => {
    // Mock user data
    const mockUser = {
      userId: 1,
      sessionKey: "testSessionKey",
    };

    // Mock client
    const mockClient = {
      createPeep: jest.fn((peep, sessionKey, callback) => {
        // Simulate successful creation by calling the callback with the peep data
        callback({
          peepId: 1,
          body: peep.body,
          created_at: "2023-06-23T13:21:23.317Z",
        });
      }),
    };

    // Mock view
    const view = new ChitterView({}, mockClient);
    view.user = mockUser;
    view.peepInput.value = "Test peep";

    // Call the handleCreatePeep method
    view.handleCreatePeep();

    // Expect the createPeep method to be called with the correct arguments
    expect(mockClient.createPeep).toHaveBeenCalledWith(
      {
        user_id: mockUser.userId,
        body: "Test peep",
      },
      mockUser.sessionKey,
      expect.any(Function)
    );

    // Expect the peep input to be cleared
    expect(view.peepInput.value).toBe("");
  });
});
