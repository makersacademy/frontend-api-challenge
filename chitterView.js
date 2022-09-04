class ChitterView {
  constructor(model, api, displaySinglePeep) {
    this.model = model;
    this.api = api;
    this.displaySinglePeep = displaySinglePeep;
    this.createUserContainerEl = document.querySelector(
      "div#create-user-container"
    );
    this.newUsernameInputEl = document.querySelector("input#create-username");
    this.newPasswordInputEl = document.querySelector("input#create-password");

    // create user button listener
    document
      .querySelector("#create-user-button")
      .addEventListener("click", () => {
        this.removeUserCreatedMessages();
        this.api.createUser(
          this.newUsernameInputEl.value,
          this.newPasswordInputEl.value,
          (data) => {
            if (data.handle[0] === "has already been taken") {
              this.handleTaken();
            } else {
              this.userCreated();
            }
            this.newUsernameInputEl.value = "";
            this.newPasswordInputEl.value = "";
          }
        );
      });

    this.loginUsernameEl = document.querySelector("#login-username");
    this.loginPasswordEl = document.querySelector("#login-password");

    // login button listener
    document.querySelector("#login-button").addEventListener("click", () => {
      this.api.loginUser(
        this.loginUsernameEl.value,
        this.loginPasswordEl.value,
        (data) => {
          this.model.setUserId(data.user_id);
          this.model.setSessionKey(data.session_key);
          this.loginUsernameEl.value = "";
          this.loginPasswordEl.value = "";
        }
      );
    });

    // logout button listener
    document.querySelector("#logout-button").addEventListener("click", () => {
      this.model.resetSessionKey();
      this.model.resetUserId();
    });
  }

  removeUserCreatedMessages() {
    if (document.querySelector("#handle-taken-message") !== null)
      document.querySelector("#handle-taken-message").remove();
    if (document.querySelector("#new-user-created-message") !== null)
      document.querySelector("#new-user-created-message").remove();
  }

  handleTaken() {
    const handleTakenMessageEl = document.createElement("p");
    handleTakenMessageEl.id = "handle-taken-message";
    handleTakenMessageEl.textContent = "This handle has been taken";
    this.createUserContainerEl.append(handleTakenMessageEl);
  }

  userCreated() {
    const newUserCreatedMessageEl = document.createElement("p");
    newUserCreatedMessageEl.textContent = "You have created a new account!";
    newUserCreatedMessageEl.id = "new-user-created-message";
    this.createUserContainerEl.append(newUserCreatedMessageEl);
  }

  displayPeeps() {
    this.model
      .loadPeeps()
      .forEach((peep) => this.displaySinglePeep.display(peep));
  }

  displayPeepsFromApi() {
    this.api.fetchPeeps((peeps) => {
      this.model.setPeeps(peeps);
      this.displayPeeps();
    });
  }
}

module.exports = ChitterView;
