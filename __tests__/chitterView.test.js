/**
 * @jest-environment jsdom
 */

const ChitterPeep = require("../src/models/chitterPeep");
const ChitterView = require("../src/views/chitterView");
const ChitterUser = require("../src/models/chitterUser");
const ChitterClient = require("../src/clients/chitterClient");
const fs = require("fs");

describe("ChitterView", () => {
  it("calls fetch and loads repo info, and shows correct info in modal when peep is clicked", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const mockClient = {
      loadPeeps: jest.fn(),
      loadPeepById: jest.fn(),
    };

    const mockModel = {
      setPeeps: jest.fn(),
      getPeeps: jest.fn(),
    };

    const view = new ChitterView(mockModel, mockClient);

    const mockPeeps = [
      {
        id: 1,
        user: { handle: "John" },
        body: "Hello World",
        created_at: "2023-06-20T12:34:56.789Z",
        likes: [{ user: { handle: "Alice" } }],
      },
      {
        id: 2,
        user: { handle: "Smith" },
        body: "Bye World",
        created_at: "2022-07-20T12:34:56.789Z",
        likes: [{ user: { handle: "Alice" } }],
      },
    ];

    mockClient.loadPeeps.mockImplementationOnce((callback) => {
      callback(mockPeeps);
    });

    mockClient.loadPeepById.mockImplementation((id, callback) => {
      const peep = mockPeeps.find((peep) => peep.id === Number(id));
      callback(peep);
    });

    mockModel.getPeeps.mockImplementationOnce(() => {
      return mockPeeps;
    });

    view.displayPeepsFromApi();

    expect(mockClient.loadPeeps).toHaveBeenCalledWith(expect.any(Function));
    expect(mockModel.setPeeps).toHaveBeenCalledWith(mockPeeps);

    const peepContainers = document.querySelectorAll(".peep");

    peepContainers.forEach((peepContainer, index) => {
      const peep = mockPeeps[index];
      peepContainer.click();
      setTimeout(() => {
        expect(document.querySelector("#peepBody").textContent).toEqual(
          peep.body
        );
        expect(document.querySelector("#peepCreated").textContent).toBe(
          `Created at: ${new Date(peep.created_at).toLocaleString()}`
        );
        expect(document.querySelector("#peepAuthor").textContent).toBe(
          `Author: ${peep.user.handle}`
        );
        expect(document.querySelector("#peepLikes").textContent).toBe(
          `Likes: ${peep.likes.length}`
        );
      }, 0); // a small delay
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

  describe("handlePeepClick", () => {
    it("should load peep details and display them in the modal", () => {
      // Mock peep data
      const mockPeep = {
        id: 1,
        user: { handle: "John" },
        body: "Hello World",
        created_at: "2023-06-20T12:34:56.789Z",
        likes: [{ user: { handle: "Alice" } }],
      };

      // Mock client
      const mockClient = {
        loadPeepById: jest.fn((peepId, callback) => {
          // Simulate successful loading of peep details by calling the callback with the mockPeep object
          callback(mockPeep);
        }),
      };

      // Mock view
      const view = new ChitterView({}, mockClient);

      // Mock the modal elements
      document.body.innerHTML = `
        <div id="peepModal">
          <span id="peepBody"></span>
          <span id="peepCreated"></span>
          <span id="peepAuthor"></span>
          <span id="peepLikes"></span>
        </div>
      `;

      // Mock the event and peepContainer
      const event = {
        currentTarget: {
          dataset: {
            peepId: "1",
          },
        },
      };

      const peepContainer = document.createElement("div");
      peepContainer.classList.add("peep");
      peepContainer.dataset.peepId = "1";

      // Call the handlePeepClick method
      view.handlePeepClick(event);

      // Expect the loadPeepById method to be called with the correct peepId
      expect(mockClient.loadPeepById).toHaveBeenCalledWith(
        "1",
        expect.any(Function)
      );

      // Expect the modal content to be updated with the peep details
      expect(document.querySelector("#peepBody").textContent).toBe(
        mockPeep.body
      );
      expect(document.querySelector("#peepCreated").textContent).toBe(
        `Created at: ${mockPeep.created_at}`
      );
      expect(document.querySelector("#peepAuthor").textContent).toBe(
        `Author: ${mockPeep.user.handle}`
      );
      expect(document.querySelector("#peepLikes").textContent).toBe(
        `Likes: ${mockPeep.likes.length}👍`
      );
    });
  });
});
