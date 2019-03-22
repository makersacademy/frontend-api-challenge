(function(exports){

  function testViewAllPeepsCanInstantiate(){
    var allPeeps = new viewAllPeeps()
    assert.isTrue(allPeeps instanceof viewAllPeeps)
  }
  testViewAllPeepsCanInstantiate();
})(this);
