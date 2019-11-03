describe('ChitterController', function() {
  describe('new', function() {
    beforeEach(function() {
      result = ['Dummy Result']
      peeps = ['Dummy Peep']
      spyModel = {getPeepFeed: function() {}}
      spyOn(spyModel, 'getPeepFeed').and.callFake(function(callback) {
        callback(result)
      })
      spyView = {updateFeed: function() {}}
      spyOn(spyView, 'updateFeed')

      PeepView = {createPeep: function() {}}
      spyOn(PeepView, 'createPeep').and.callFake(function() {
        return peeps[0]
      })
    })
    it('gets the Peep Feed', function() {
      new ChitterController(spyModel, spyView)
      expect(spyModel.getPeepFeed).toHaveBeenCalled()
    })
    it('converts the peep feed to peep elements', function () {

      new ChitterController(spyModel, spyView)
      expect(PeepView.createPeep).toHaveBeenCalledWith(result[0])
    })
    it('sends the Peep Feed to the View', function() {

      new ChitterController(spyModel, spyView)
      expect(spyView.updateFeed).toHaveBeenCalledWith(peeps)
    })
  })
})