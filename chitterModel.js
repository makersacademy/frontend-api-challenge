class ChitterModel {
  constructor() {
    this.peepsArray = [];
    this.userId = null;
    this.sessionKey = null;
  }

  setPeeps(peepsArray) {
    this.peepsArray = peepsArray;
  }

  loadPeeps() {
    return this.peepsArray;
  }

  setUserId(userId) {
    this.userId = userId;
  }

  loadUserId() {
    return this.userId;
  }

  resetUserId() {
    this.userId = null;
  }

  setSessionKey(sessionKey) {
    this.sessionKey = sessionKey;
  }

  loadSessionKey() {
    return this.sessionKey;
  }

  resetSessionKey() {
    this.sessionKey = null;
  }
}

module.exports = ChitterModel;
