class ChitterModel {
    addSessionID(userID) {
      this.userID = userID;
    }
  
    addSessionKey(key) {
      this.key = key;
    }
  
    sessionKey() {
      return this.key;
    }
  
    sessionID() {
      return this.userID
    }
  }
  
  module.exports = ChitterModel;