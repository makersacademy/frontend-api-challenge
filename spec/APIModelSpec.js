describe('APIModel', function() {
  beforeEach(function() {
    this.response = ['call response']
    $ = {ajax: function() {}}
    spyOn($, 'ajax').and.callFake((options) => {
      options.success(this.response)
    })
    CHITTER_API_URL = 'https://chitter-backend-api.herokuapp.com'
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
      .toEqual(CHITTER_API_URL + '/peeps')
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
        .toEqual(CHITTER_API_URL + '/peeps/1')
    })
    it('executes the given this.callback with the results', function() {
      expect(this.callback).toHaveBeenCalledWith(this.response)
    })
  })
})