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
//
    assert.isTrue(testAllPeepsModelView instanceof PeepsAllView)
    assert.isTrue(testAllPeepsModelView._allPeepsModel === testAllPeepsModel)
    assert.isTrue(testAllPeepsModel._allPeepsArray.length === 0)
    assert.isTrue(testAllPeepsModel._allPeepsArray instanceof Array)
  }
  testAllPeepsModelViewInstantiateStartsWithEmptyArray();
//
  // function testViewAllPeepsDisplayANewlyCreatedPeep(){
//     var testPeep = new Peep("testpeep1")
//     console.log(testPeep)
//     var testAllPeepsModel = new PeepsAll()
// //
//     testAllPeepsModel.createNewPeep(testPeep)
//
//     var allPeepsModelView = new PeepsAllView(testAllPeepsModel)
// //
//     assert.isTrue(testAllPeepsModel instanceof PeepsAll)
//     console.log(allPeepsModelView.viewAllPeepsFromDatabase())
//     assert.isTrue(allPeepsModelView.viewAllPeepsFromDatabase() === '<a href="http://localhost:8080#peeps/0">testpeep1')
//     assert.isTrue(allPeepsModelView instanceof PeepsAllView)
  // }
  // testViewAllPeepsDisplayANewlyCreatedPeep();
// //
// //
// function testViewAllPeepsDisplayMoreThanOneNewlyCreatedPeep() {
//   var testPeep_2 = new Peep("testpeep2")
//   var testPeep_3 = new Peep("testpeep3")
//   var testPeep_4 = new Peep("testpeep4")
//   console.log(testPeep_2)
//   console.log(testPeep_3)
//   console.log(testPeep_4)
// //
//   var testAllPeepsModel = new PeepsAll()
//   testAllPeepsModel.createNewPeep(testPeep_2)
//   testAllPeepsModel.createNewPeep(testPeep_3)
//   testAllPeepsModel.createNewPeep(testPeep_4)
// // // //
//   testpeepsAllModelArray = testAllPeepsModel.getPeeps();
// //
//   var allPeepsModelView = new PeepsAllView(testAllPeepsModel)
// // //
//   assert.isTrue(testAllPeepsModel instanceof PeepsAll)
//   assert.isTrue(testpeepsAllModelArray instanceof Array)
//   assert.isTrue(allPeepsModelView.viewAllPeepsFromDatabase() !== "<ul></ul>")
//   assert.isTrue(allPeepsModelView instanceof PeepsAllView)
// }
// testViewAllPeepsDisplayMoreThanOneNewlyCreatedPeep();
// //
// function testViewAllPeepsCanBeDisplayedByDatabase() {
//   var testPeep_5 = new Peep("testpeep5")
//   var testAllPeepsModel = new PeepsAll()
// //
//   testAllPeepsModel.createNewPeep(testPeep_5)
// //
//   var allPeepsModelView = new PeepsAllView(testAllPeepsModel)
//   allPeepsModelView.viewAllPeepsFromDatabase()
// }
//   testViewAllPeepsCanBeDisplayedByDatabase();
// // }

function testViewFetchAPIData(){
  var testAllPeepsModel = new PeepsAll()
  var testPeepsAllViewController = new PeepsAllViewController(testAllPeepsModel)


 testPeepsAllViewController.viewAllPeepsFromDatabase(document)

}
testViewFetchAPIData();
})(this);
