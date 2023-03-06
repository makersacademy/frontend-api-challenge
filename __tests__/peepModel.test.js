const fs = require('fs')
const PeepsModel = require('../src/peepModel');

describe('PeepsModel', () => {
  it('initialises with an empty array for Peep objects', () => {
    const model = new PeepsModel();
    expect(model.getPeeps()).toEqual([]);
  })

  it('adds a new Peep to the array of Peep objects', () => {
    const model = new PeepsModel();
    model.addPeep('first peep');
    expect(model.getPeeps()).toEqual(['first peep']);
  });
})