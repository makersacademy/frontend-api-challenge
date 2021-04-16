const file = require('../../src/modules');

describe("Interface", function() {
  let user;
  let peep;
  describe("getPeeps", function(){
    it("should be able to get Peeps from the API", function() {
      var fetch = jasmine.createSpyObj('fetch',['isStormy']);
      plane.isStormy(true);
      file.getPeeps();
      expect(peepList.length).toEqual(10);
    });
  });

});

//unable to test fetch as 'fetch is not defined'
