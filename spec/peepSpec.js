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
})