describe('PeepController', function(){
  describe('createPeep', function() {
    beforeEach(function() {
      PeepView  = {createPeepElement: function() {}}
      spyOn(PeepView, 'createPeepElement').and.callFake(function() {
        return $('<div/>')
      })
    })
    it('gets the Peep html from the PeepView', function() {
      peepData = {
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
      PeepController.createPeep(peepData)
      expect(PeepView.createPeepElement).toHaveBeenCalledWith(peepData)
    })
  })
})