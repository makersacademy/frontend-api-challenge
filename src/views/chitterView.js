const ChitterUser = require("../models/chitterUser");

class ChitterView {
  constructor(model, client) {
    this.user = null;
    this.model = model;
    this.client = client;

    const storedSessionKey = localStorage.getItem("sessionKey");
    const storedUserId = localStorage.getItem("userId");
    if (storedSessionKey && storedUserId) {
      this.user = new ChitterUser(null, null);
      this.user.setSessionKey(storedSessionKey);
      this.user.setUserId(storedUserId);
    }
    this.logoutButton = document.querySelector("#logoutButton");
    this.logoutButton.addEventListener("click", () => {
      localStorage.removeItem("sessionKey");
      localStorage.removeItem("userId");
    });
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

    this.closeModalButton = document.querySelector(".modal .close");
    this.closeModalButton.addEventListener("click", this.closeModal.bind(this));

    this.deletePeepButton = document.querySelector("#deletePeepButton");
  }

  displayPeeps() {
    this.model.getPeeps().forEach((peep) => {
      const peepContainer = document.createElement("div");
      peepContainer.classList.add("peep");
      peepContainer.dataset.peepId = peep.id; // assign the peep id to each div

      const peepContent = document.createTextNode(peep.body);
      peepContainer.appendChild(peepContent);

      peepContainer.addEventListener("click", this.handlePeepClick.bind(this)); // attach the event handler to each peep

      document.getElementById("peepsContainer").appendChild(peepContainer);
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
        localStorage.setItem("sessionKey", data.session_key);
        localStorage.setItem("userId", data.user_id);
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

    const peep = {
      user_id: this.user.userId,
      body: peepText,
    };

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

  handlePeepClick(event) {
    // get peep id from the clicked element
    const peepId = event.currentTarget.dataset.peepId;

    // get peep details
    this.client.loadPeepById(peepId, (peep) => {
      // update modal content with peep details
      const modal = document.querySelector("#peepModal");
      modal.querySelector("#peepBody").textContent = peep.body;

      // add creation date, author and likes
      modal.querySelector(
        "#peepCreated"
      ).textContent = `Created at: ${peep.created_at}`;
      modal.querySelector(
        "#peepAuthor"
      ).textContent = `Author: ${peep.user.handle}`;
      modal.querySelector(
        "#peepLikes"
      ).textContent = `Likes: ${peep.likes.length}👍`;

      if (this.user === null) {
        console.log("No user is logged in");
        return;
      }
      // checking if the user is owner of the peep, if yes it will display the delete button
      if (peep.user.handle === this.user.handle) {
        this.deletePeepButton.style.display = "block";
      } else {
        this.deletePeepButton.style.display = "none";
      }

      const likeButton = modal.querySelector("#likeButton");

      // Check if the current user has already liked the peep
      const hasLiked = peep.likes.some(
        (like) => like.user.handle === this.user.handle
      );

      likeButton.textContent = hasLiked ? "Unlike" : "Like";

      likeButton.onclick = () => {
        if (likeButton.textContent === "Like") {
          this.handleLike(peepId, likeButton);
        } else {
          this.handleUnlike(peepId, likeButton);
        }
      };

      this.deletePeepButton.onclick = () => {
        this.handleDeletePeep(peepId);
      };

      // show the modal
      modal.style.display = "block";
    });
  }

  closeModal() {
    const modal = document.querySelector("#peepModal");
    modal.style.display = "none";
    this.deletePeepButton.style.display = "none"; // Hide the delete button
  }

  handleLike(peepId, likeButton) {
    this.client.likePeep(
      peepId,
      this.user.userId,
      this.user.sessionKey,
      (data) => {
        if (data && !data.error) {
          likeButton.textContent = "Unlike";
          // Update the peep's likes count in the modal
        } else {
          console.error("Error liking peep:", data.error);
        }
      }
    );
  }

  handleUnlike(peepId, likeButton) {
    this.client.unlikePeep(
      peepId,
      this.user.userId,
      this.user.sessionKey,
      (data) => {
        if (data && data.error) {
          console.error("Error unliking peep:", data.error);
        } else {
          likeButton.textContent = "Like";
          // Update the peep's likes count in the modal
        }
      }
    );
  }
  handleDeletePeep(peepId) {
    if (!this.user || !this.user.sessionKey) {
      console.log("Please log in first.");
      return;
    }

    this.client.deletePeep(peepId, this.user.sessionKey, (data) => {
      if (data && !data.error) {
        console.log("Peep deleted successfully:", data);
        // Additional logic can be added here, such as removing the peep from the list or updating the display.
      } else {
        console.error("Error deleting peep:", data.error);
        // Additional error handling logic can be added here, such as displaying an error message to the user.
      }
    });
  }
}

module.exports = ChitterView;
