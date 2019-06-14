describe("Peep", function() {
  var peep;

  beforeEach(function() {
    peep = new Peep();
  });

  describe(".getPeeps", function() {
    it("can create a new peep", function() {
      expect(peep instanceof Peep).toBe(true);
    });

    it("can getPeeps", function() {
      // test not working
      peep.getPeeps(displayMock);
      expect(peep._result.length).toEqual(50);
    });
  });

});
