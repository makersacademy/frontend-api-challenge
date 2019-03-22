(function(exports){

  function testAllPeepsModelViewInstantiateStartsWithEmptyArray(){
    var testPeep = new Peep("testpeep0")
    var testAllPeepsModel = new PeepsAll()
    var testAllPeepsModelView = new PeepsAllView(testAllPeepsModel)
    assert.isTrue(testAllPeepsModelView instanceof PeepsAllView)
  }
  testAllPeepsModelViewInstantiateStartsWithEmptyArray();

  function testAllPeepsModelViewInstantiateStartsWithEmptyArray(){
    var testAllPeepsModel = new PeepsAll()
    var testAllPeepsModelView = new PeepsAllView(testAllPeepsModel);

    assert.isTrue(testAllPeepsModelView instanceof PeepsAllView)
    assert.isTrue(testAllPeepsModelView.viewAllPeepsFromDatabase() ==="<ul></ul>")
  }
  testAllPeepsModelViewInstantiateStartsWithEmptyArray();

  function testViewAllPeepsDisplayANewlyCreatedPeep(){
    var testPeep = new Peep("testpeep1")
    var testAllPeepsModel = new PeepsAll()

    testAllPeepsModel.createNewPeep(testPeep)

    var allPeepsModelView = new PeepsAllView(testAllPeepsModel)

    assert.isTrue(testAllPeepsModel instanceof PeepsAll)
    assert.isTrue(allPeepsModelView.viewAllPeepsFromDatabase().length !== 0)
    assert.isTrue(allPeepsModelView instanceof PeepsAllView)
  }
  testViewAllPeepsDisplayANewlyCreatedPeep();


function testViewAllPeepsDisplayMoreThanOneNewlyCreatedPeep() {
  var testPeep_1 = new Peep("testpeep1")
  var testPeep_2 = new Peep("testpeep2")
  var testPeep_3 = new Peep("testpeep3")

  var testAllPeepsModel = new PeepsAll()
  testAllPeepsModel.createNewPeep(testPeep_1)
  testAllPeepsModel.createNewPeep(testPeep_2)
  testAllPeepsModel.createNewPeep(testPeep_3)

  peepsAllModelArray = testAllPeepsModel.getPeeps();

  var allPeepsModelView = new PeepsAllView(testAllPeepsModel)

  assert.isTrue(testAllPeepsModel instanceof PeepsAll)
  assert.isTrue(testAllPeepsModel.getPeeps.length === 3)
  assert.isTrue(testAllPeepsModel instanceof Array)
  assert.isTrue(allPeepsModelView.viewAllPeepsFromDatabase() !== "<ul></ul>")
  assert.isTrue(allPeepsModelView instanceof PeepsAllView)

testViewAllPeepsDisplayMoreThanOneNewlyCreatedPeep();
}
})(this);
