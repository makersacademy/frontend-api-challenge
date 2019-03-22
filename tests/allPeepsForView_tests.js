(function(exports){

  function testViewAllPeepsCanInstantiate(){
    var allPeeps = new allPeepsForView()
    assert.isTrue(allPeeps instanceof allPeepsForView)
  }
  testViewAllPeepsCanInstantiate();

  function testViewAllPeepsCanReturnPeepsFromDatabase(){
    var peepsFromModel = new allPeepsFromModel()
  }
  testViewAllPeepsCanReturnPeepsFromDatabase();
})(this);
