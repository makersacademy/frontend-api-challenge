describe('Peep', function () {



  let peepApi;

  beforeEach(function() {
    peepApi = jasmine.createSpyObj('peepApi', ['getAllPeeps']);
  });

  

    it("test", function() {
      expect(peepApi.getAllPeeps).toBeDefined();
    })

})
