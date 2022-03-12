const ChitterModel = require('./chitterModel');

describe(ChitterModel, () => {
  describe('getPeeps', () => {
    it('shows an empty array', () => {
      const model = new ChitterModel();
      expect(model.getPeeps()).toEqual([]);
    }); 
  });     
  describe('addPeep', () => {
    it('Adds one peep', () => {
      const model = new ChitterModel();
      model.addPeep('Hello, world');

      expect(model.getPeeps()).toEqual(['Hello, world']);
    });
  });
  describe('deletePeeps', () => { 
    it('Displays all peeps', () => {
      const model = new ChitterModel();
      model.addPeep('Hello, world');
      model.deletePeep();
      expect(model.getPeeps()).toEqual([])
    });
  });
});
