class UserModel {
  constructor() {
    this.user = {};
    this.session = {};
  }
  getUser() {
    return this.user;
  }

  setUser(userId, userHandle) {
    this.user = { "id": userId, "handle": userHandle};
  }

  getSession() {
    return this.session
  }

  setSession(userId, sessionKey) {
    this.session = { "user_id": userId, "session_key": sessionKey}
  }
}

module.exports = UserModel;