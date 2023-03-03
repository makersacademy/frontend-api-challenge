class UserModel{
  constructor() {
    this.UserList = new Array();
  }

  GetUsers() {
    return this.UserList;
  }

  GetUser_ID(id) {
    return this.UserList.find(userList => userList.id === id);
  }

  GetUser_Handle(handle) {
    return this.UserList.find(userList => userList.handle === handle);
  }

  AddUser(User) {
    this.UserList.push(User);
  }

  DeleteUser_ID(id) {
    this.UserList = this.UserList.filter(user => user.id !== id);
  }

  DeleteUser_Handle(handle) {
    this.UserList = this.UserList.filter(user => user.handle !== handle);
  }
}

module.exports = UserModel;