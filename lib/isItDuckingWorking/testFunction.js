// add your tests below and run with the TestRunner.html

function isItTheDuckingSame(executedFunction, expectedOutput, description) {
  if (executedFunction === expectedOutput) {
    console.log(`%c ${description} - its chilling`,'background: #222; color: #BADA55');
  } else {
    console.log(`%c ${description} - its ducked`,'color: #FF0000')
  }
}

// The array matcher checks that two arrays are the same length and have the same content in the same order, it requires two arrays to be input - will throw errors if the inputs are not arrays
function isItTheDuckingSameArray(executedFunction, expectedOutputArray, description) {
  if (!Array.isArray(executedFunction)) throw 'executed function parameter is not an array';
  if (!Array.isArray(expectedOutputArray)) throw 'expected output parameter is not an array';

  if (_compareArrays(executedFunction, expectedOutputArray)) {
    console.log(`%c ${description} - its chilling`,'background: #222; color: #BADA55');
  } else {
    console.log(`%c ${description} - its ducked`,'color: #FF0000');
  }

  function _compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (var i = 0; i < arr1.length; i++) {
  		if (arr1[i] !== arr2[i]) return false;
  	}

    return true;
  }
};

// isItTheDuckingSameArray([1,2], [1,2], "are these the same array")
// isItTheDuckingSameArray([1,2], [1,2, 3], "are these the same array")
// // isItTheDuckingSameArray(1, [1,2, 3], "are these the same array")
// isItTheDuckingSameArray([1,2], 1, "are these the same array")
