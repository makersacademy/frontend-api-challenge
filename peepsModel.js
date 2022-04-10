const UserModel = require("./userModel");
class PeepsModel {
  constructor(api) {
    this.api = api;
    this.user = null;
  }

  getPeeps(callback) {
    this.api.loadPeeps((data) => {
      callback(data);
    });
  }

  addPeep(peep, callback) {
    this.api.createPeep(peep, this.user, (data) => {
      callback(data);
    });
  }

  addUser(newUser, password, callback) {
    this.api.createUser(newUser, password, () => {
      callback();
    });
  }

  signinUser(signinUser, signinPassword, callback) {
    this.api.signinUser(signinUser, signinPassword, (data) => {
      this.user = new UserModel(data.user_id, data.session_key);
      console.log(this.user);
      callback();
    });
  }
}

module.exports = PeepsModel;
