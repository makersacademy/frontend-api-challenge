describe('Peep', function() {
  var peep;
  var peepBody = 'Congrats for successfully requesting the peeps from the Chitter API! This is the first peep :)'

  beforeEach(function() {
    peep = new Peep(peepBody)
  })

  describe('#getBody', function() {
    it('returns the body of the peep', function() {
      expect(peep.getBody()).toEqual(peepBody)
    })
  })

  describe('.getPeeps', function() {
    it('loads an array from an ajax request', async function() {
      var result = await Peep.getPeeps();
      expect(result).toBeInstanceOf(Array)
    })
  })
})