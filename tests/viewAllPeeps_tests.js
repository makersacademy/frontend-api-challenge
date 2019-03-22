(function(exports){

  function testViewAllPeepsCanAccessTheDatabase(){
    var allPeeps = new viewAllPeeps()
    assert.isTrue(allPeeps instanceof viewAllPeeps)
  }
  testViewAllPeepsCanAccessTheDatabase();
})(this);
