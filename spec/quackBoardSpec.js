describe('Quackboard', function() {

  var quackboard;

  describe('.all', function() {
    it('returns a list of 50 most recent quacks', function() {
      quackboard = new QuackBoard();
      let quacks = quackboard.all()
      expect(quacks.length).toEqual(50)
    });
  });
})