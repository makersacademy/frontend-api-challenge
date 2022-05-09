const ChitterModel = require('./chitterModel');

describe(ChitterModel, () => {
  describe('getPeeps', () => {
    it('shows an empty array', () => {
      const model = new ChitterModel();

      expect(model.getPeeps()).toEqual([]);
    });
  });

  describe('addPeeps', () => {
    it('adds a peep', () => {
      const model = new ChitterModel();

      model.addPeeps('Hope you like my peep!');

      expect(model.getPeeps()).toEqual(['Hope you like my peep!']);
    });
  });
    
  describe('deletePeeps', () => {
    it('displays all peeps then deletes peeps', () => {
      const model = new ChitterModel();

      model.addPeeps('Hope you like my peep!');

      model.deletePeeps();

      expect(model.getPeeps()).toEqual([]);
    });
  });
});