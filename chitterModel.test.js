const ChitterModel = require('./chitterModel');

describe('ChitterModel', () => {

  let model;
  beforeEach( () => {
   model = new ChitterModel();
  });

  describe('#getPeeps', () => {
    it('intialises with an empty array', () => {
      expect(model.getPeeps()).toEqual([])
    });
  });

  describe('#addPeep', () => {
    it('adds a new note', () => {
      model.addPeep('Welcome to Chitter, enjoy your stay.');
      model.addPeep('This is a hostile takeover, chitter is now under new management.');
      expect(model.getPeeps()).toEqual([`Welcome to Chitter, enjoy your stay.`, `This is a hostile takeover, chitter is now under new management.`])
    })
  });

  describe('#reset', () => {
    it('will clear your notes', () => {
      model.addPeep(`Resistance is futile, bow down to your new Chitter Overlord Me'lon Husk`);
      model.reset();
      expect(model.getPeeps()).toEqual([])
    });
  });

  describe('#setPeeps', () => {
    it('adds an array of exisitng peeps to the model', () => {

      let peeps = [`Isn't Chitter fun.`, `I love the new No fun on Chitter global mandate.`]
      model.setPeeps(peeps)
      expect(model.getPeeps()).toEqual([`Isn't Chitter fun.`, `I love the new No fun on Chitter global mandate.`])
    })

    it(`resets the peeps before adding them to the model`, () => {

      let peeps = [`95% are not robots, I'm not a robot, would a robot know tha01010101`, `Hey, whats up fellow Cheeters? Fellow Peeper user here.`]
      model.setPeeps(peeps)

      let newPeeps = [`Work from home, more like work from inside the Chitter-nest-verse`]
      model.setPeeps(newPeeps)

      expect(model.getPeeps()).toEqual([`Work from home, more like work from inside the Chitter-nest-verse`])  
    })
  })
});