const ChitterModel = require('./chitterModel');

describe('ChitterModel', () => {
  let model;

  beforeEach(() => {
    model = new ChitterModel();
  });

  it('returns a list of peeps', () => {
    expect(model.getPeeps()).toEqual([]);
  });

  it('adds a peep to peeps list', () => {
    model.addPeep('first peep');

    expect(model.getPeeps()).toEqual(['first peep']);
  });

  it('sets peeps from peeps list', () => {
    model.setPeeps(['first peep', 'second peep']);

    expect(model.getPeeps()).toEqual(['first peep', 'second peep']);
  });
});
