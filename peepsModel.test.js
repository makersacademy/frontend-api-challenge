const PeepsModel = require('./peepsModel');

describe('PeepsModel class', () => {
  beforeEach(() => {
    model = new PeepsModel;
  })

  it('returns empty list', () => {
    expect(model.getPeeps()).toEqual([]);
  })

  it('sets peeps', () => {
    const peeps = ['One peep', 'Two peeps'];
    model.setPeeps(peeps);
    expect(model.getPeeps()).toEqual(['One peep', 'Two peeps']);
  })

  it('resets', () => {
    model.setPeeps('peep');
    model.reset();
    expect(model.getPeeps()).toEqual([]);
  })
})