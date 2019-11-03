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
    peepView  = {createPeepElement: function() {}}
    APIModel = {getPeep: function() {}}
    
    spyOn(peepView, 'createPeepElement')
    spyOn(APIModel, 'getPeep')
    peepController = new PeepController(peepView, APIModel)
  })
  describe('createPeep', function() {
    it('gets the Peep html from the PeepView', function() {
      peepController.createPeep(peepData)
      expect(peepView.createPeepElement).toHaveBeenCalledWith(peepData)
    })
  })
  describe('getPeep', function() {
    it('calls the APIModel with the peepId', function() {
      peepController.getPeep(peepData.id)
      expect(APIModel.getPeep).toHaveBeenCalledWith(peepData.id)
    })
  })
})