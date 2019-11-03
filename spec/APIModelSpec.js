describe('APIModel', function() {
  beforeEach(function() {
    response = ['call response']
    $ = {ajax: function() {}}
    spyOn($, 'ajax').and.callFake(function(options) {
      options.success(response)
    })
    CHITTER_API_URL = 'https://chitter-backend-api.herokuapp.com'
    apiModel = new APIModel
  })
  describe('getPeepFeed', function() {
    beforeEach(function() {
      callback = jasmine.createSpy('callback')
  
      apiModel.getPeepFeed(callback)
    })
    it('sends a request to the chitter API', function() {
      expect($.ajax.calls.mostRecent().args[0]["url"])
        .toEqual(CHITTER_API_URL + '/peeps')
    })

    it('returns the results to the given callback', function() {
      expect(callback).toHaveBeenCalledWith(response)
    })
  })
  describe('getPeep', function() {
    beforeEach(function() {
      apiModel.getPeep(1)
    })
    it('gets the given peep from the Chitter API', function() {
      expect($.ajax.calls.mostRecent().args[0]["url"])
        .toEqual(CHITTER_API_URL + '/peeps/1')
    })
  })
})