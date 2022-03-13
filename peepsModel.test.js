const PeepsModel = require('./peepsModel.js');

describe(PeepsModel, () => {
  
  let model;
  beforeEach(() => {
    model = new PeepsModel(); 
  });

  describe('getPeeps', () => {
    it('returns an empty array of peeps on creation', () => {
      expect(model.getPeeps()).toEqual([])
    })
  })

  describe('addPeep', () => {
    it('adds a peep to the peeps array', () => {
      model.addPeep("My first test peep")
      expect(model.getPeeps()).toEqual(['My first test peep'])
    })
  })

})