describe('SessionController', function() {
  beforeEach(function() {
    this.spyAPI = {login: function() {}}

    this.spyButton = $('<button/>')
    this.spyView = {loginForm: function() {}}
    spyOn(this.spyButton, 'on')
    this.sessionController = new SessionController(this.spyView, this.spyAPI, this.spyButton)
  })
  it('watches the login button on instantiation', function() {
    expect(this.spyButton.on).toHaveBeenCalled()
  })
  describe('login button clicked', function() {
    beforeEach(function() {
      this.spyAPI = {login: function() {}}

      this.spyButton = $('<button/>')
      this.spySubmitButton = $('<button/>')
      spyOn(this.spySubmitButton, 'on')

      this.spyView = {loginForm: function() {}}
      spyOn(this.spyView, 'loginForm').and.callFake((callback) => {
        callback(this.spySubmitButton)
      })

      this.sessionController = new SessionController(this.spyView, this.spyAPI, this.spyButton)
      this.spyButton.trigger('click')
    })
    it('renders the login form', function() {
      expect(this.spyView.loginForm).toHaveBeenCalled()
    })
    it('watches the new form', function() {
      expect(this.spySubmitButton.on).toHaveBeenCalled()
    })
    describe('form filled, submit clicked', function() {
      beforeEach(function() {
        this.spyAPI = {login: function() {}}
        spyOn(this.spyAPI, 'login')

        this.spyView = {
          loginForm: function() {},
          loginFormVals: function() {}
        }
        spyOn(this.spyView, 'loginForm').and.callFake((callback) => {
          callback(this.spySubmitButton)
        })
        spyOn(this.spyView, 'loginFormVals').and.callFake(function() {
          return {
            handle: 'Test',
            password: 'TestPassword'
          }
        })
        this.spyButton = $('<button/>')
        this.spySubmitButton = $('<button/>')
        
        this.sessionController = new SessionController(this.spyView, this.spyAPI, this.spyButton)
        this.spyButton.trigger('click')
        this.spySubmitButton.trigger('click')
      })
      it('gets the form values from the view', function() {
        expect(this.spyView.loginFormVals).toHaveBeenCalled()
      })
      it('calls the login API method with the form values', function() {
        expect(this.spyAPI.login).toHaveBeenCalledWith({
          handle: 'Test',
          password: 'TestPassword'
        })
      })
    })
  })
})