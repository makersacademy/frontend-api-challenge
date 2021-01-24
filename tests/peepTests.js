it("is a member of the Peep class", function() {
    var peep = new Peep;
    expect(peep.__proto__.constructor).toEqual(Peep)
  })