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

      peepController = {createPeep: function() {}}
      spyOn(peepController, 'createPeep').and.callFake(function() {
        return peeps[0]
      })
      new ChitterController(spyModel, spyView, peepController)
    })
    it('gets the Peep Feed', function() {
      expect(spyModel.getPeepFeed).toHaveBeenCalled()
    })
    it('converts the peep feed to peep elements', function () {

      expect(peepController.createPeep).toHaveBeenCalledWith(result[0])
    })
    it('sends the Peep Feed to the View', function() {

      expect(spyView.updateFeed).toHaveBeenCalledWith(peeps)
    })
  })
})