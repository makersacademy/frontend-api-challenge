var assert = {
  isTrue: function(assertionToCheck){
    if(!assertionToCheck){
      throw new Error("Test failed: expected" + assertionToCheck);
    }
  }
}
