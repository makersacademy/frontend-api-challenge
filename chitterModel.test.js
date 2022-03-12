const ChitterModel = require('./chitterModel');

describe(ChitterModel, () => {
  describe('getPeeps', () => {
    let model = new ChitterModel;
    it('shows an empty array', () => {
      expect(model.getPeeps()).toEqual([]);
    });
  });
});