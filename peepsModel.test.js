const { it } = require('@jest/globals');
const { describe } = require('yargs');
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

})