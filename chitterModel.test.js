const ChitterModel = require('./chitterModel')

describe('ChitterModel', () => {
  beforeEach(() => {
    model = new ChitterModel();
  })

  it('getPeeps', () => {
  expect(model.getPeeps()).toEqual([]);
  })

  it('addPeep', () => {
    model.addPeep('test peep');
    expect(model.getPeeps()).toEqual(['test peep']);
  })

  it('reset', () => {
    model.addPeep('test peep');
    model.addPeep('test peep two');
    model.reset();
    expect(model.getPeeps()).toEqual([]);
  })
})