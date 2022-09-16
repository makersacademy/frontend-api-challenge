class PeepsView {
  constructor(model, api) {
    this.model = model
    this.api = api
  };

  createUser() {

    const username = document.querySelector('#create-username').value
    const password = document.querySelector('#create-password').value
    this.api.createUser(username, password)
  }
}