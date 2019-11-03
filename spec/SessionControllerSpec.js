describe('SessionController', function() {
  beforeEach(function() {
    this.spyButton = $('<button/>')
    this.spyView = {loginForm: function() {}}
    spyOn(this.spyButton, 'on')
    this.sessionController = new SessionController(this.spyView, this.spyButton, this.navBrand)
  })
  it('watches the login button on instantiation', function() {
    expect(this.spyButton.on).toHaveBeenCalled()
  })
  describe('login button clicked', function() {
    beforeEach(function() {
      this.spyButton = $('<button/>')
      this.spyView = {loginForm: function() {}}
      spyOn(this.spyView, 'loginForm')
      this.sessionController = new SessionController(this.spyView, this.spyButton)
      this.spyButton.trigger('click')
    })
    it('renders the login form', function() {
      expect(this.spyView.loginForm).toHaveBeenCalled()
    })
  })
})