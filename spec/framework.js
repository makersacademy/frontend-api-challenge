(function(exports) {
  var assert = {
    isTrue: function(assertionToCheck, text) {
      if (!assertionToCheck) {
        console.log("Nah, mate. Sorry, it's " + assertionToCheck + ". \n Test not working. \n \n" + text);
      }
      else {
        console.log('YEAH BABY IT WORKS!!', text)
      }
    }
  };
}}
