describe("Peep", function() {
  var peep;

  beforeEach(function() {
    peep = new Peep("handle", "body","01-01-2019", "02-01-2019");
  });

  describe(".new", function() {
    it("can create a new peep", function() {
      expect(peep instanceof Peep).toBe(true);
    });

    it("can create a new peep with a handle", function() {
      expect(peep.handle).toEqual("handle");
    });

    it("can create a new peep with a body", function() {
      expect(peep.body).toEqual("body");
    });

    it("can create a new peep with a create time", function() {
      expect(peep.created).toEqual("01-01-2019");
    });

    it("can create a new peep with an updated time", function() {
      expect(peep.updated).toEqual("02-01-2019");
    });
  });

});
