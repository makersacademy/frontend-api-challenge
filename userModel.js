class UserModel {
  constructor() {
    this.users = [];
  }
  getUsers() {
    return this.users;
  }
  addUser(user) {
    this.users.push(user);
  }
  setUsers(users) {
    this.users = users;
  }
  reset() {
    this.users = [];
  }
}

module.exports = UserModel;
