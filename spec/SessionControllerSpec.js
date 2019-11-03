describe('SessionController', function() {
  beforeEach(function() {
    this.spyAPI = {login: function() {}}
    spyOn(this.spyAPI, 'login')

    this.spyModel = {
      newSession: function() {}
    }

    this.spyView = {
      loginForm: function() {},
      loginFormVals: function() {},
      clearLoginForm: function() {}
    }
    
    this.spyButton = $('<button/>')
    spyOn(this.spyButton, 'on')
    
    this.sessionController = new SessionController(this.spyView,
      this.spyAPI,
      this.spyModel,
      this.spyButton
    )
  })
  it('watches the login button on instantiation', function() {
    expect(this.spyButton.on).toHaveBeenCalled()
  })
  describe('login button clicked', function() {
    beforeEach(function() {
      this.spyButton = $('<button/>')
      this.spySubmitButton = $('<button/>')
      spyOn(this.spySubmitButton, 'on')
      
      spyOn(this.spyView, 'loginForm').and.callFake((callback) => {
        callback(this.spySubmitButton)
      })
      this.sessionController = new SessionController(this.spyView,
        this.spyAPI,
        this.spyModel,
        this.spyButton
      )
      this.spyButton.trigger('click')
    })
    it('renders the login form', function() {
      expect(this.spyView.loginForm).toHaveBeenCalled()
    })
    it('watches the new form', function() {
      expect(this.spySubmitButton.on).toHaveBeenCalled()
    })
  })
  describe('form filled, submit clicked', function() {
    beforeEach(function() {
      spyOn(this.spyModel, 'newSession')

      spyOn(this.spyView, 'clearLoginForm')
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
      
      this.sessionController = new SessionController(this.spyView,
                                                      this.spyAPI,
                                                      this.spyModel,
                                                      this.spyButton)
      this.spyButton.trigger('click')
      this.spySubmitButton.trigger('click')
    })
    it('gets the form values from the view', function() {
      expect(this.spyView.loginFormVals).toHaveBeenCalled()
    })
    it('calls the login API method with the form values and SessionModel callback', function() {
      expect(this.spyAPI.login).toHaveBeenCalledWith(
        {handle: 'Test', password: 'TestPassword'},
        this.spyModel.newSession
      )
    })
  })
})