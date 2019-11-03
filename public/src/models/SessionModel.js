(function(exports){

  function SessionModel() {
    this.currentSession = 'none'
  }

  SessionModel.prototype = {
    newSession: function(sessionData) {
      this.currentSession = sessionData
    }
  }

  exports.SessionModel = SessionModel
})(this)