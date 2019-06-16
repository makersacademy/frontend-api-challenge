function Session(userId, sessionKey) {
  this._userId = userId;
  this._sessionKey = sessionKey;
}

Session.prototype.getUserId = function() {
  return this._userId;
}

Session.prototype.getSessionKey = function() {
  return this._sessionKey;
}
