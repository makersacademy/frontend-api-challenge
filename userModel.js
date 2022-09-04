class UserModel {
  constructor() {
    this.user = {};
  }
  getUser() {
    return this.user;
  }
  addUser(username, password) {
    this.user = { handle: username, password: password };
  }
  setUsers(users) {
    this.users = users;
  }
  reset() {
    this.users = [];
  }
}

module.exports = UserModel;
