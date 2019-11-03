(function(exports) {
  var self

  function SessionController(sessionView, APIModel, sessionButton) {
    this.sessionView = sessionView
    this.APIModel = APIModel
    self = this
    sessionButton.on('click', () => {
      this.sessionView.loginForm(_watchButton)
      window.location.hash = '/login'
    })
  }

   _watchButton = function(button) {
     button.on('click', function() {
      self.APIModel.login(self.sessionView.loginFormVals())
     })
  }

  exports.SessionController = SessionController
})(this)