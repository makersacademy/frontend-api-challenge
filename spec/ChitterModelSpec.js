describe('ChitterModel', function() {
  describe('getPeepFeed', function() {
    it('sends a request to the chitter API', function() {
      $ = {ajax: function() {}}
      spyOn($, 'ajax')
      callback = jasmine.createSpy('callback')

      ChitterModel.getPeepFeed(callback)

      expect($.ajax.calls.mostRecent().args[0]["url"]).toEqual('https://chitter-backend-api.herokuapp.com/peeps')
    })
    it('returns the results to the given callback', function() {
      result = [
        {
          "id": 3,
          "body": "my first peep :)",
          "created_at": "2018-06-23T13:21:23.317Z",
          "updated_at": "2018-06-23T13:21:23.317Z",
          "user": {
            "id": 1,
            "handle": "kay"
          },
          "likes": [{
            "user": {
              "id": 1,
              "handle": "kay"
            }
          }]
        }
      ]
      $ = {ajax: function() {}}
      spyOn($, 'ajax').and.callFake(function(options) {
        options.success(result)
      })
      callback = jasmine.createSpy('callback')
      ChitterModel.getPeepFeed(callback)

      expect(callback).toHaveBeenCalledWith(result)
    })
  })
})