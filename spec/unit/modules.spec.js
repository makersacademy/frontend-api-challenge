const file = require('../../src/modules');
const fetchMock = require('fetch-mock').sandbox();
var proxyquire =  require('proxyquire');

proxyquire('../../src/modules', { 'node-fetch': fetchMock });

describe("Interface", () => {
  beforeEach(function(){
    spyOn(getPeeps, 'fetch').and.returnValue('hello');
  });
  let user;
  let peep;
  describe("getPeeps", function(){
    it("should be able to get a JSON from the API", function() {
      //var fetch = jasmine.createSpyObj('fetch',['isStormy']);
      //plane.isStormy(true);
      file.getPeeps();
      expect(peepList.length).toEqual(10);
    });
  });

});

//unable to test fetch as 'fetch is not defined'
