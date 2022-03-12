const PeepsModel = require('./peepsModel');

describe('Peeps model class', () => {
   it('starts with no peeps', () => {
      const peeps = new PeepsModel();

      expect(peeps.getPeeps()).toEqual([]);
   });

   it('adds a peep', () => {
      const peeps = new PeepsModel();
      peeps.addPeep('My first peep');

      expect(peeps.getPeeps()).toEqual(['My first peep']);
   });

   it('resets the list of peeps', () => {
    const peeps = new PeepsModel();
      peeps.addPeep('A temporary peep');
      peeps.reset();

      expect(peeps.getPeeps()).toEqual([]);
   });
});