describe("PeepsView", function() {

  describe('addHTML', function(){
    it("should display a peep wrapped in HTML ", function() {
      let peepData = [["qwer", "2020-04-01T19:25:27.120Z", "qwer", 0]]
      let peepsview = new PeepsView(peepData)
      expect(peepsview.addHTML()).toEqual("<ul><li><div><p>qwer<p>Posted at: 2020-04-01T19:25:27.120Z<p>qwer<p>Likes: 0</div></li></ul>");
    });
  });

});
