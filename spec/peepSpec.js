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
      var displayMock = jasmine.createSpy('displayMock');
      peep.getPeeps(displayMock);
      expect(peep._result instanceof Array).toBe(true)
    });
  });

});
