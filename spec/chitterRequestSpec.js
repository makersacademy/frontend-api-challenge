describe('ChitterRequest', function() {
  var chitterRequest;

  beforeEach(function() {
    chitterRequest = new ChitterRequest();
  })
  describe('getPeeps', function() {
    it('loads an array from an ajax request', async function() {
      const result = await chitterRequest.getPeeps();
      expect(result).toBeInstanceOf(Array)
    })

    it('contains peep information', async function() {
      const result = await chitterRequest.getPeeps();
      expect(result[0].body).toBeInstanceOf(String)
    })
  })
})