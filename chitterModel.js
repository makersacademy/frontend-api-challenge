class ChitterModel {
  addSessionID() {

  }

  addSessionKey(key) {
    this.key = key;
  }

  sessionKey() {
    return this.key;
  }
}

module.exports = ChitterModel;