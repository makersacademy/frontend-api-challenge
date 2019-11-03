(function(exports) {
  var self
  function SessionController(sessionView, sessionButton) {
    this.sessionView = sessionView
    self = this
    sessionButton.on('click', () => {
      this.sessionView.loginForm(_watchButton)
      window.location.hash = '/login'
    })
  }

   _watchButton = function(button) {
     console.log(button)
     button.on('click', function() {
      self.sessionView.loginFormVals()
     })
  }

  exports.SessionController = SessionController
})(this)