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
      this.spySubmitButton = $('<button/>')
      spyOn(this.spySubmitButton, 'on')

      this.spyView = {loginForm: function() {}}
      spyOn(this.spyView, 'loginForm').and.callFake((callback) => {
        callback(this.spySubmitButton)
      })

      this.sessionController = new SessionController(this.spyView, this.spyButton)
      this.spyButton.trigger('click')
    })
    it('renders the login form', function() {
      expect(this.spyView.loginForm).toHaveBeenCalled()
    })
    it('watches the new form', function() {
      console.log(this.spyButton.on)
      expect(this.spySubmitButton.on).toHaveBeenCalled()
    })
    describe('form filled, submit clicked', function() {
      
    })
  })
})