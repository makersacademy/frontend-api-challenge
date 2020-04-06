describe("SinglePeepView", function() {

  describe('getPeepByID', function(){
    it("should display a single peep wrapped in HTML ", function() {
      let singlePeepData = ["1", "qwer", "2020-04-01", "qwer", 0]
      let peepsview = new PeepList(singlePeepData)
      expect(peepsview.getPeepByID("1")).toEqual("<div id='peep-style'><p>qwer<p>Posted at: 2020-04-01<p>qwer<p>Likes: 0</div>");
    });
  });

});
