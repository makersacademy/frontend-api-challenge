describe("Peep", function() {
  var peep;

  beforeEach(function() {
    peep = new Peep();
  });

  it("can create a new peep", function() {
    expect(peep instanceof Peep).toBe(true);
  });

  describe(".getPeeps", function() {
    it("calls its callback", function() {
      spyOn($, "ajax").and.callFake(function(options) {
        options.success();
      });
      var callback = jasmine.createSpy();
      peep.getPeeps('', callback);
      expect(callback).toHaveBeenCalled();
    });

    it("can get all peeps", function() {
      var displayMock = jasmine.createSpy('displayMock');
      peep.getPeeps('', displayMock);
      expect(peep._result instanceof Array).toBe(true)
    });

    // it("can get a single peep", function() {
    //   var value = [];
    //
    //   var peepFunc = {
    //     getPeeps: function() {
    //       value.push({"id":807,"body":"Persister test peep","created_at":"2019-06-14T15:01:04.614Z","updated_at":"2019-06-14T15:01:04.614Z","user":{"id":1052,"handle":"Zoe"},"likes":[]});
    //     }
    //   }
    //
    //   spyOn(peepFunc, 'getPeeps');
    //   peepFunc.getPeeps;
    //   expect(value.length).toEqual(1);
    // });
  });


});
