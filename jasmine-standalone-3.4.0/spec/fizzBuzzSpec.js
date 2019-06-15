describe("FizzBuzz", function() {

  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  it("should return \"fizz\" when divisible by 3", function() {
      expect(fizzBuzz.play(3)).toEqual('fizz');
  });

  it("should return \"buzz\" when divisble by 5", function() {
    expect(fizzBuzz.play(5)).toEqual('buzz');
  });

  it("should return \"fizzbuzz\" when divisible by 3 and 5", function() {
    expect(fizzBuzz.play(30)).toEqual('fizzbuzz');
  });

  it("should return the number when not divisible by 3 or 5", function() {
    expect(fizzBuzz.play(4)).toEqual(4);
  });

});
