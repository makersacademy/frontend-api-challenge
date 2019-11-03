describe('APIModel', function() {
  describe('getPeepFeed', function() {
    it('sends a request to the chitter API', function() {
      $ = {ajax: function() {}}
      spyOn($, 'ajax')
      callback = jasmine.createSpy('callback')

      APIModel.getPeepFeed(callback)

      expect($.ajax.calls.mostRecent().args[0]["url"]).toEqual('https://chitter-backend-api.herokuapp.com/peeps')
    })

    it('returns the results to the given callback', function() {
      response = ['call response']
      $ = {ajax: function() {}}
      spyOn($, 'ajax').and.callFake(function(options) {
        options.success(response)
      })
      callback = jasmine.createSpy('callback')
      APIModel.getPeepFeed(callback)

      expect(callback).toHaveBeenCalledWith(response)
    })
  })
})