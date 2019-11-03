describe('ChitterController', function() {
  describe('new', function() {
    beforeEach(function() {
      peepsData = ['Dummy Peep']
      spyModel = {getPeepFeed: function() {}}
      spyOn(spyModel, 'getPeepFeed').and.callFake(function(callback) {
        callback(peepsData)
      })
      spyView = {updateFeed: function() {}}
      spyOn(spyView, 'updateFeed')
      
      peep = {on: function() {}}
      spyOn(peep, 'on')

      peepController = {createPeep: function() {}}
      spyOn(peepController, 'createPeep').and.callFake(function() {
        return peep
      })
      new ChitterController(spyModel, spyView, peepController)
    })
    it('gets the Peep Feed', function() {
      expect(spyModel.getPeepFeed).toHaveBeenCalled()
    })
    it('converts the peep feed to peep elements', function () {
      expect(peepController.createPeep).toHaveBeenCalledWith(peepsData[0])
    })
    it('adds an event listener to the peep', function() {
      expect(peep.on).toHaveBeenCalled()
    })
    it('sends the Peep Feed to the View', function() {
      expect(spyView.updateFeed).toHaveBeenCalledWith([peep])
    })
  })
  describe('view single peep', function() {
    beforeEach(function() {
      peepsData = ['Dummy Peep']
      spyModel = {getPeepFeed: function() {}}
      spyOn(spyModel, 'getPeepFeed').and.callFake(function(callback) {
        callback(peepsData)
      })
      spyView = {updateFeed: function() {}}
      spyOn(spyView, 'updateFeed')
      
      peep = $('<div/>', {
        id: 'peep-1'
      })
  
      peepController = {
        createPeep: function() {},
        getPeep: function() {}
      }
      spyOn(peepController, 'createPeep').and.callFake(function() {
        return peep
      })
      spyOn(peepController, 'getPeep').and.callFake(function() {
        return peep
      })
      new ChitterController(spyModel, spyView, peepController)
      peep.trigger('click')
    })
    it('gets the peep from the peep controller', function() {
      expect(peepController.getPeep).toHaveBeenCalledWith(1)
    })
  })
})