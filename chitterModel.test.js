const ChitterModel = require('./chitterModel');

describe(ChitterModel, () => {
    it('shows an empty array', () => {
      const model = new ChitterModel();

      expect(model.getPeeps()).toEqual([]);
    });

    it('adds a peep', () => {
      const model = new ChitterModel();

      model.addPeeps('Hope you like my peep!');

      expect(model.getPeeps()).toEqual(['Hope you like my peep!']);
    });
  });