const ChitterModel = require('./chitterModel');

describe(ChitterModel, () => {
    it('shows an empty array', () => {
      const model = new ChitterModel();
      expect(model.getPeeps()).toEqual([]);
    });

    it('Adds one peep', () => {
      const model = new ChitterModel();
      model.addPeep('Hello, world');

      expect(model.getPeeps()).toEqual(['Hello, world']);
    });
  });
