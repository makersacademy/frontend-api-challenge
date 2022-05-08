const ChitterModel = require('./chitterModel');

describe(ChitterModel, () => {
  describe('getPeeps', () => {
    const model = new ChitterModel;
    
    it('shows an empty array', () => {
      expect(model.getPeeps()).toEqual([]);
    });
  });
});