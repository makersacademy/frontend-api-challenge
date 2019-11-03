describe('PeepController', function(){
  beforeEach(function() {
    peepData = {
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
    spyAPI = {getPeep: function() {}}
    spyOn(spyAPI, 'getPeep')
    
    spyView  = {createPeepElement: function() {}}

    peep = jasmine.createSpy('peep')
    spyOn(spyView, 'createPeepElement').and.callFake(function() {
      return peep
    })

    peepController = new PeepController(spyView, spyAPI)
  })
  describe('createPeep', function() {
    it('gets the Peep html from the spyView', function() {
      peepController.createPeep(peepData)
      expect(spyView.createPeepElement).toHaveBeenCalledWith(peepData)
    })
  })
  describe('getPeep', function() {
    beforeEach(function() {
      callback = jasmine.createSpy('callback')
      peepController.getPeep(peepData.id, callback)
    })
    it('calls the APIModel with the peepId', function() {
      expect(spyAPI.getPeep.calls.first().args[0]).toEqual(1)
    })
  })
})