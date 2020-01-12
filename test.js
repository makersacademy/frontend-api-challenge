var expects = {
  isTrue: function(expectation) {
    if (!expectation) {
      throw new Error("Assertion failed: " + expectation + " is not truthy");
    }else{
      console.log("Test passes.");
    }
  }
}
