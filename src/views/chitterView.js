const ChitterUser = require("../models/chitterUser");

class ChitterView {
  constructor(model, client) {
    this.user = null;
    this.model = model;
    this.client = client;

    this.peepsContainer = document.querySelector("#peepsContainer");
    this.signupButton = document.querySelector("#signupButton");
    this.loginButton = document.querySelector("#loginButton");

    this.signupButton.addEventListener("click", this.handleSignup.bind(this));
    this.loginButton.addEventListener("click", this.handleLogin.bind(this));
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

    const user = new ChitterUser(handle, password);
    this.client.loginUser(user, (data) => {
      if (data && !data.error) {
        this.user = data; // Set the user property to the login response data
        console.log("User logged in successfully");
        // Additional logic can be added here, such as displaying a success message or redirecting to a different page.
      } else {
        console.error("Error logging in user:", data.error);
        // Additional error handling logic can be added here, such as displaying an error message to the user.
      }
    });
  }
}

module.exports = ChitterView;
