
function FizzBuzz() {
}
FizzBuzz.prototype.play = function(number) {
  if(number % 15 == 0 ){
    return 'fizzbuzz'
  } else if(number % 3 == 0) {
    return 'fizz'
  } else if(number % 5 == 0) {
    return 'buzz'
  } else {
    return number
  }
};

var fizzBuzz = new FizzBuzz();

for (var i = 1; i <= 100; i++){
  console.log(fizzBuzz.play(i));
}
