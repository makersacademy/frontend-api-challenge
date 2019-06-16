var sessionSpec = {
  theGetUserIdMethod: function() {
    // userId should be null by default
    var session = new Session(1, 'valid_key');
    assert.isEqual(session.getUserId(), 1);
  },
  
  theGetSessionKeyMethod: function() {
    // sessionKey should be null by default
    var session = new Session(1, 'valid_key');
    assert.isEqual(session.getSessionKey(), 'valid_key');
  }
}

runner.runTests(sessionSpec);
