const fs = require('fs')
const PeepsModel = require('../src/peepsModel');

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

  it('resets the list of peeps', () => {
    const peeps = new PeepsModel();
    peeps.addPeep('next peep');
    peeps.reset();

    expect(peeps.getPeeps()).toEqual([]);
  })
})