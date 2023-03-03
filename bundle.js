(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // Models/UserModel.js
  var require_UserModel = __commonJS({
    "Models/UserModel.js"(exports, module) {
      var UserModel2 = class {
        constructor() {
          this.UserList = new Array();
        }
        GetUsers() {
          return this.UserList;
        }
        GetUser_ID(id) {
          return this.UserList.find((userList) => userList.id === id);
        }
        GetUser_Handle(handle) {
          return this.UserList.find((userList) => userList.handle === handle);
        }
        AddUser(User) {
          this.UserList.push(User);
        }
        DeleteUser_ID(id) {
          this.UserList = this.UserList.filter((user) => user.id !== id);
        }
        DeleteUser_Handle(handle) {
          this.UserList = this.UserList.filter((user) => user.handle !== handle);
        }
      };
      module.exports = UserModel2;
    }
  });

  // index.js
  var UserModel = require_UserModel();
  var userModel = new UserModel();
})();
