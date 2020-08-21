describe('PeepController', function(){
  beforeEach(function() {
    this.peepData = {
      "id": 1,
      "body": "Test Peep 1",
      "created_at": "2018-06-23T13:21:23.317Z",
      "updated_at": "2018-06-23T13:21:23.317Z",
      "user": {
        "id": 1,
        "handle": "Test User"
      },
      "likes": [{
        "user": {
          "id": 1,
          "handle": "Test User"
        }
      }]
    }
    this.spyAPI = {getPeep: function() {}}
    spyOn(this.spyAPI, 'getPeep')
    
    this.spyView  = {createPeepElement: function() {}}
    spyOn(this.spyView, 'createPeepElement')

    this.peepController = new PeepController(this.spyView, this.spyAPI)
  })
  describe('createPeep', function() {
    it('gets the Peep html from the this.spyView', function() {
      this.peepController.createPeep(this.peepData)
      expect(this.spyView.createPeepElement).toHaveBeenCalledWith(this.peepData)
    })
  })
  describe('getPeep', function() {
    beforeEach(function() {
      var callback = jasmine.createSpy('callback')
      this.peepController.getPeep(this.peepData.id, callback)
    })
    it('calls the APIModel with the peepId', function() {
      expect(this.spyAPI.getPeep.calls.first().args[0]).toEqual(1)
    })
  })
})