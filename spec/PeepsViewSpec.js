describe("PeepsView", function() {

  describe('addHTML', function(){
    it("should display a peep wrapped in HTML ", function() {
      let peepData = [["1", "qwer", "2020-04-01", "qwer", 0]]
      let peepsview = new PeepsView(peepData)
      expect(peepsview.addHTML()).toEqual("<ul><li><div id='peep-style'><a href='#1'><p>qwer</a><p>Posted at: 2020-04-01<p>qwer<p>Likes: 0</div></li></ul>");
    });
  });

});
