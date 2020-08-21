describe('APIModel', function() {
  beforeEach(function() {
    this.response = ['call response']
    $ = {ajax: function() {}}
    spyOn($, 'ajax').and.callFake((options) => {
      options.success(this.response)
    })
    this.CHITTER_API_URL = 'https://chitter-backend-api.herokuapp.com'
    this.apiModel = new APIModel
  })
  describe('getPeepFeed', function() {
    beforeEach(function() {
      this.response = ['call response']
      this.callback = jasmine.createSpy('callback')
      
      this.apiModel.getPeepFeed(this.callback)
    })
    it('sends a request to the chitter API', function() {
      expect($.ajax.calls.mostRecent().args[0]["url"])
      .toEqual(this.CHITTER_API_URL + '/peeps')
    })
    
    it('returns the results to the given callback', function() {
      expect(this.callback).toHaveBeenCalledWith(this.response)
    })
  })
  describe('getPeep', function() {
    beforeEach(function() {
      this.response = ['call response']
      this.callback = jasmine.createSpy('callback')
      this.apiModel.getPeep(1, this.callback)
    })
    it('gets the given peep from the Chitter API', function() {
      expect($.ajax.calls.mostRecent().args[0]["url"])
      .toEqual(this.CHITTER_API_URL + '/peeps/1')
    })
    it('executes the given this.callback with the results', function() {
      expect(this.callback).toHaveBeenCalledWith(this.response)
    })
  })
  describe('login', function() {
    beforeEach(function() {
      this.call = {
        data: '{"session": {"handle":"test", "password":"testpassword"}}',
        dataType: "json",
        headers: {"Content-Type": "application/json"},
        type: "POST",
        url: "https://chitter-backend-api.herokuapp.com/sessions"
      }
      this.response = ['call response']
      this.callback = jasmine.createSpy('loginCallback')
      this.apiModel.login({handle: 'test', password: 'testpassword'}, this.callback)
    })
    it('sends a login request', function() {
      expect($.ajax.calls.mostRecent().args[0]['url'])
        .toEqual(this.call.url)
      expect($.ajax.calls.mostRecent().args[0]['data'])
        .toEqual(this.call.data)
      expect($.ajax.calls.mostRecent().args[0]['headers'])
        .toEqual(this.call.headers)
      expect($.ajax.calls.mostRecent().args[0]['dataType'])
        .toEqual(this.call.dataType)
    })
    it('calls the given callback with the returned params', function() {
      expect(this.callback).toHaveBeenCalledWith(this.response)
    })
  })
})