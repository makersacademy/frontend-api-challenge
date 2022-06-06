class UserModel {
  constructor() {
    this.userId = null;
    this.handle = null;
    this.sessionKey = null;
  }

  getUserId() {
    return this.userId;
  }

  setUserId(id) {
    this.userId = id;
  }

  getHandle() {
    return this.handle;
  }

  setHandle(handle) {
    this.handle = handle;
  }

  getSessionKey() {
    return this.sessionKey;
  }

  setSessionKey(sessionKey) {
    this.sessionKey = sessionKey;
  }
}

module.exports = UserModel;