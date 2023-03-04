const PeepsModel = require ('./peepsModel')

describe('PeepsModel', () => {
  let model;

  beforeEach(() => {
    model = new PeepsModel();
  });

    it('constructs with an empty peeps array', () => {
      expect(model.peeps).toEqual([]);
    });

    it('can add a peep', () => {
      model.addPeep('This is a peep')
      expect(model.peeps).toContain('This is a peep');
      expect(model.getPeeps()).toEqual(['This is a peep']);
    });

    it('can add a multiple peeps', () => {
      model.addPeep('This is a peep')
      model.addPeep('This is another peep')
      expect(model.peeps).toContain('This is a peep');
      expect(model.peeps).toContain('This is another peep');
      expect(model.getPeeps()).toEqual(['This is a peep', 'This is another peep']);
    });
})