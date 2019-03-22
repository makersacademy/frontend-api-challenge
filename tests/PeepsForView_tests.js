(function(exports){

  function testViewAllPeepsCanInstantiate(){
    var allPeepsToView = new PeepsForView()
    assert.isTrue(allPeepsToView instanceof PeepsForView)
  }
  testViewAllPeepsCanInstantiate();

  function testViewAllPeepsCanReturnPeepsFromDatabase(){

    var peepsFromModel = new PeepsFromModel()
    peepsFromModel.createNewPeep("testpeep0")
    var allPeepsToView = new PeepsForView(peepsFromModel)

    assert.isTrue(peepsFromModel instanceof PeepsFromModel)
    assert.isTrue(allPeepsToView.viewAllPeepsFromDatabase().length !== 0)
    assert.isTrue(allPeepsToView instanceof PeepsForView)
  }
  testViewAllPeepsCanReturnPeepsFromDatabase();
})(this);
