(function(exports) {

  function SessionController(sessionView, sessionButton) {
    this.sessionView = sessionView

    sessionButton.on('click', () => {
      this.sessionView.loginForm(_watchButton)
      window.location.hash = '/login'
    })
  }

   _watchButton = function(button) {
     console.log(button)
     button.on('click', function() {

     })
  }

  exports.SessionController = SessionController
})(this)