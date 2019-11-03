(function(exports) {

  function SessionController(sessionView, sessionButton) {
    this.sessionView = sessionView

    sessionButton.on('click', () => {
      console.log('here')
      this.sessionView.loginForm()
      window.location.hash = '/login'
    })
  }


  exports.SessionController = SessionController
})(this)