const PeepsModel = require ('./peepsModel')

describe('PeepsModel', () => {
  it('constructs with an empty peeps array', () => {
    const peep = new PeepsModel;
    expect(peep.peeps).toEqual([]);
  });
})