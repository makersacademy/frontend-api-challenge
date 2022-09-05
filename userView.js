class UserView {
  constructor(model, api) {
    this.model = model;
    this.api = api;

    this.signUpBtn = document.querySelector("#sign-up-button");
    this.logInBtn = document.querySelector("#log-in-button");

    this.username = document.querySelector("#username-input");
    this.password = document.querySelector("#password-input");

    this.signUpBtn.addEventListener("click", () => {
      this.signUp();
    });
    this.logInBtn.addEventListener("click", () => {
      this.logIn();
    });
  }
  signUp() {
    this.api.createUser(this.username.value, this.password.value);
  }
  logIn() {
    this.api.logInSession(this.username.value, this.password.value);
  }
  showCurrentUser() {}
}

module.exports = UserView;
