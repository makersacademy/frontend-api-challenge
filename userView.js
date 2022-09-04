class UserView {
  constructor(model, api) {
    this.model = model;
    this.api = api;

    this.signUpBtn = document.querySelector("#sign-up-button");

    this.signUpBtn.addEventListener("click", () => {
      this.signUp();
    });
  }
  signUp() {}
  showCurrentUser() {}
}

module.exports = UserView;
