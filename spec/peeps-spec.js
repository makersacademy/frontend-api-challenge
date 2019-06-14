describe('Peeps', function() {
  var peeps;

  beforeEach(function() {
    peeps = new Peeps();
  });

  it("can view all peeps", function() {
    expect(peeps.viewAllPeeps()).toEqual("My first Peep");
  })

  // it("can view individual peeps", function() {
  //   expect(peeps.viewIndividualPeep()).toEqual()
  // })
})

//
//
//
//
// describe('Peeps', function() {
//     var peeps;
//   beforeEach(function() {
//     thermostat = new Thermostat();
//   });
//
//   it("can increase the temperature", function() {
//     thermostat.up(1)
//     expect(thermostat.temperature).toEqual(21);
//   })
