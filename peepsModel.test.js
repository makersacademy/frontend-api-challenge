const PeepsModel = require('./peepsModel');

describe('PeepsModel class', () => {
  it('returns empty list', () => {
    const model = new PeepsModel;
    expect(model.getPeeps()).toEqual([]);
  })
})