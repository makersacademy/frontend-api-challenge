describe("Chitter", function () {
  beforeEach(function () {
    chitter = new Chitter();
  });

  it("can fetch a list of previous peeps", function () {
    expect(chitter.feed).toBe
  });

//   it("Increases current temp by specified value in response to increase function", function () {
//     thermostat.increase(4);
//     expect(thermostat.currentTemp).toBe(24);
//   });

//   it("Decreases current temp by specified value in response to decrease function", function () {
//     thermostat.decrease(3);
//     expect(thermostat.currentTemp).toBe(17);
//   });

//   it("cannot be set lower than 10 degrees", function () {
//     thermostat.decrease(11)
//     expect(thermostat.currentTemp).toBe(10);
//   });

//   it("has a power saving mode that is either On or Off, and is On by default", function () {
//     expect(thermostat.isEcoOn).toBe(true);
//   });

//   it("has a max of 25 degs if PWM is on", function () {
//     thermostat.increase(6)
//     expect(thermostat.currentTemp).toBe(25)
//   });

//   it("PSM can be toggled", function () {
//     thermostat.PSMToggle();
//     expect(thermostat.isEcoOn).toBe(false);
//     thermostat.PSMToggle();
//     expect(thermostat.isEcoOn).toBe(true);
//   });

//   it("has a max of 32 degs if PWM is off", function () {
//     thermostat.PSMToggle();
//     thermostat.increase(13)
//     expect(thermostat.currentTemp).toBe(32);
//   });

//   it("can be reset, and temp returns to 20", function () {
//     thermostat.increase(13)
//     thermostat.reset();
//     expect(thermostat.currentTemp).toBe(20);
//   });

//   it("will display low-usage when relevant", function () {
//     thermostat.decrease(3)
//     expect(thermostat.usage()).toBe('Low');
//   });

//   it("will display med-usage when relevant", function () {
//     expect(thermostat.usage()).toBe('Med');
//   });

//   it("will display high-usage when relevant", function () {
//     thermostat.increase(6)
//     expect(thermostat.usage()).toBe('High');
//   });

//   it("will change temp to eco min if PSW is turned on at high temps", function () {
//     thermostat.PSMToggle();
//     thermostat.increase(10);
//     thermostat.PSMToggle();
//     expect(thermostat.currentTemp).toBe(25);
//   })

//   it("can set a current city", function () {
//     thermostat.setCity('London');
//     expect(thermostat.city).toBe('London');
//   })

//   it("will return the current temp in the selected city", function () {
//     thermostat.setCity('London');
//     thermostat.setCityTemp();
//     expect(thermostat.cityTemp).toBe(12.95);

//   })
// });
