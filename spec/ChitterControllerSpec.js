describe('ChitterController', function() {
  describe('new', function() {
    beforeEach(function() {
      this.peepsData = ['Dummy Peep']
      this.spyAPI = {getPeepFeed: function() {}}
      spyOn(this.spyAPI, 'getPeepFeed').and.callFake((callback) => {
        callback(this.peepsData)
      })
      this.spyView = {updateFeed: function() {}}
      spyOn(this.spyView, 'updateFeed')
      
      this.peep = {on: function() {}}
      spyOn(this.peep, 'on')

      this.peepController = {createPeep: function() {}}
      spyOn(this.peepController, 'createPeep').and.callFake(() => {
        return this.peep
      })
      this.navBrand = $('<a/>')
      spyOn(this.navBrand, 'on')
      new ChitterController(this.spyAPI, this.spyView, this.peepController, this.navBrand)
    })
    it('watches the navBrand', function() {
      expect(this.navBrand.on).toHaveBeenCalled()
    })
    it('gets the Peep Feed', function() {
      expect(this.spyAPI.getPeepFeed).toHaveBeenCalled()
    })
    it('converts the peep feed to peep elements', function () {
      expect(this.peepController.createPeep).toHaveBeenCalledWith(this.peepsData[0])
    })
    it('adds an event listener to the peep', function() {
      expect(this.peep.on).toHaveBeenCalled()
    })
    it('sends the Peep Feed to the View', function() {
      expect(this.spyView.updateFeed).toHaveBeenCalledWith([this.peep])
    })
  })
  describe('view single peep', function() {
    beforeEach(function() {
      this.peepsData = ['Dummy Peep']
      this.spyAPI = {getPeepFeed: function() {}}
      spyOn(this.spyAPI, 'getPeepFeed').and.callFake((callback) => {
        callback(this.peepsData)
      })
      this.spyView = {
        updateFeed: function() {},
        hideFeed: function() {}
      }
      spyOn(this.spyView, 'updateFeed')
      spyOn(this.spyView, 'hideFeed')
      
      this.peep = $('<div/>', {
        id: 'peep-1'
      })
      
      this.peepController = {
        createPeep: function() {},
        getPeep: function() {}
      }
      spyOn(this.peepController, 'createPeep').and.callFake(() => {
        return this.peep
      })
      spyOn(this.peepController, 'getPeep').and.callFake(() => {
        return this.peep
      })
      this.navBrand = $('<a/>')
      new ChitterController(this.spyAPI, this.spyView, this.peepController, this.navBrand)
      this.peep.trigger('click')
    })
    it('gets the peep from the peep controller', function() {
      expect(this.peepController.getPeep).toHaveBeenCalledWith(1, this.spyView.viewPeep)
    })
  })
})