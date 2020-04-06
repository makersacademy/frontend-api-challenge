describe("Controller", function() {
 
    it("should be able to get peep data from the API", function() {
      let peepData = [["1", "qwer", "2020-04-01", "qwer", 0]]
      let peepsview = new PeepsView(peepData)
      expect(peepsview.addHTML()).toEqual("<ul><li><div id='peep-style'><a href='#1'><p>qwer</a><p>Posted at: 2020-04-01<p>qwer<p>Likes: 0</div></li></ul>");
    });


});