describe('SessionModel', function() {
  beforeEach(function() {
    this.sessionModel = new SessionModel
  })
  describe('currentSession', function() {
    it('returns the current session', function() {
      expect(this.sessionModel.currentSession).toEqual('none')
    })
  })
  describe('newSession', function() {
    it('stores the given session params', function() {
      var params = {
        user_id: 1,
        handle: 'TestUser'
      }
      this.sessionModel.newSession(params)
      expect(this.sessionModel.currentSession).toEqual(params)
    })
  })
})