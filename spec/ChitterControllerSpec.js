describe('ChitterController', function() {
  describe('new', function() {
    beforeEach(function() {
      spyModel = {getPeepFeed: function() {}}
      spyOn(spyModel, 'getPeepFeed').and.callFake(function(callback) {
        callback()
      })
      spyView = {updateFeed: function() {}}
      spyOn(spyView, 'updateFeed')
    })
    it('gets the Peep Feed', function() {

      new ChitterController(spyModel, spyView)
      expect(spyModel.getPeepFeed).toHaveBeenCalled()
    })
    it('sends the Peep Feed to the View', function() {

      new ChitterController(spyModel, spyView)
      expect(spyView.updateFeed).toHaveBeenCalled()
    })
  })
})