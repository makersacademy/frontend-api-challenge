describe("Peep", function() {
  var peep;

  beforeEach(function() {
    peep = new Peep();
  });

  it("can create a new peep", function() {
    expect(peep instanceof Peep).toBe(true);
  });

  
});
