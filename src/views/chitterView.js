const ChitterUser = require("../models/chitterUser");

class ChitterView {
  constructor(model, client) {
    this.user = null;
    this.model = model;
    this.client = client;

    this.peepsContainer = document.querySelector("#peepsContainer");
    this.signupButton = document.querySelector("#signupButton");
    this.loginButton = document.querySelector("#loginButton");
    this.peepInput = document.querySelector("#peepInput");
    this.createPeepButton = document.querySelector("#createPeepButton");

    this.signupButton.addEventListener("click", this.handleSignup.bind(this));
    this.loginButton.addEventListener("click", this.handleLogin.bind(this));
    this.createPeepButton.addEventListener(
      "click",
      this.handleCreatePeep.bind(this)
    );
  }

  displayPeeps() {
    this.model.getPeeps().forEach((peep) => {
      const peepContainer = document.createElement("div");
      peepContainer.className = "peep";

      const authorName = document.createElement("p");
      authorName.id = "author";
      authorName.textContent = `Author: ${peep.user.handle}`;
      peepContainer.appendChild(authorName);

      const content = document.createElement("p");
      content.id = "content";
      content.textContent = `Content: ${peep.body}`;
      peepContainer.appendChild(content);

      const createdAt = document.createElement("p");
      createdAt.id = "created_at";
      createdAt.textContent = `Created at: ${peep.created_at}`;
      peepContainer.appendChild(createdAt);

      const likes = document.createElement("p");
      likes.id = "likes";
      likes.textContent = `Likes: ${peep.likes.length}👍`;
      peepContainer.appendChild(likes);

      this.peepsContainer.appendChild(peepContainer);
    });
  }

  displayPeepsFromApi() {
    const callback = (data) => {
      this.model.setPeeps(data);
      this.displayPeeps();
    };
    this.client.loadPeeps(callback);
  }

  handleSignup() {
    const handle = prompt("Enter your handle");
    const password = prompt("Enter your password");

    const user = new ChitterUser(handle, password);
    this.client.signupUser(user, (data) => {
      this.user = data;
      console.log("User signed up successfully");
      // Additional logic can be added here, such as displaying a success message or redirecting to a different page.
    });
  }

  handleLogin() {
    const handle = prompt("Enter your handle");
    const password = prompt("Enter your password");

    this.user = new ChitterUser(handle, password);
    this.client.loginUser(this.user, (data) => {
      if (data && !data.error) {
        this.user.setSessionKey(data.session_key); // Store the session key in the ChitterUser instance
        this.user.setUserId(data.user_id);
        console.log("User logged in successfully");
        // Additional logic can be added here, such as displaying a success message or redirecting to a different page.
      } else {
        console.error("Error logging in user:", data.error);
        // Additional error handling logic can be added here, such as displaying an error message to the user.
      }
    });
  }

  handleCreatePeep() {
    const peepText = this.peepInput.value;

    if (!peepText) {
      console.log("Please enter a peep.");
      return;
    }

    if (!this.user || !this.user.sessionKey) {
      console.log("Please log in first.");
      return;
    }
    console.log(this.user.userId);
    console.log(this.user.sessionKey);
    const peep = {
      user_id: this.user.userId,
      body: peepText,
    };
    console.log("Session Key: ", this.user.sessionKey);
    this.client.createPeep(peep, this.user.sessionKey, (data) => {
      if (data && !data.error) {
        console.log("Peep created successfully:", data);
        // Additional logic can be added here, such as displaying a success message or updating the peeps list.
      } else {
        console.error("Error creating peep:", data.error);
        // Additional error handling logic can be added here, such as displaying an error message to the user.
      }
    });

    // Clear the peep input after creating a peep
    this.peepInput.value = "";
  }
}

module.exports = ChitterView;
