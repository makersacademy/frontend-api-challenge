(function(exports) {

  function SessionController(sessionView, sessionButton) {
    this.sessionView = sessionView
    
    sessionButton.on('click', () => {
      this.sessionView.loginForm()
    })
  }


  exports.SessionController = SessionController
})(this)