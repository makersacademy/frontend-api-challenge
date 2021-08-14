
  beforeEach(function() {

  });

  // describe('DOM loader', () => {
  //   it('loads the document before any action is taken', () => {
  //     var spy = spyOn(window, "example" )
  //   })
  // })

  describe('calculate', () => {
    it("calculates two numbers", () => {
      expect(calculate(1, 2)).toEqual(3);
    });
  });