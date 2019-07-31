var sessionSpec = {
  theGetUserIdMethod: function() {
    // should return user id passed as argument
    var session = new Session(1, 'valid_key');
    assert.isEqual(session.getUserId(), 1);
  },
  
  theGetSessionKeyMethod: function() {
    // should return key passed as argument
    var session = new Session(1, 'valid_key');
    assert.isEqual(session.getSessionKey(), 'valid_key');
  }
}

runner.runTests(sessionSpec);
