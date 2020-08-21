(function(exports) {
  var self

  function SessionController(sessionView, APIModel, sessionModel, sessionButton) {
    this.sessionView = sessionView
    this.APIModel = APIModel
    this.sessionModel = sessionModel
    self = this
    sessionButton.on('click', () => {
      this.sessionView.loginForm(_watchButton)
      window.location.hash = '/login'
    })
  }

  _watchButton = function(button) {
    button.on('click', function() {
      var creds = self.sessionView.loginFormVals()
      self.APIModel.login(creds, self.sessionModel.newSession)
    })
  }

  exports.SessionController = SessionController
})(this)