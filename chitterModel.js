class ChitterModel {
  constructor() {
    this.peeps = [];
    this.userId = null;
    this.sessionKey = null;
  }

  getPeeps() {
    return this.peeps
  }

  setPeeps(apiPeeps) {
    this.peeps = apiPeeps;
  }

  getUserId() {
    return this.userId
  }


  setUserId(userId) {
    this.userId = userId

  }

  getSessionKey() {
    return this.sessionKey
  }


  setUserId(sessionKey) {
    this.sessionKey = sessionKey

  }

}
module.exports = ChitterModel;