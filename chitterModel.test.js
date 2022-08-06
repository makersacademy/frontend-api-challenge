const ChitterModel = require('./chitterModel');

describe('chitterModel', () => {
    const model = new ChitterModel();

    describe('#getChitters', () => {
        it('returns an empty array with no chitter', () => {
            expect(model.getPeeps()).toEqual([]);
        })
        it('returns the peeps present in the array', () => {
            model.addPeep('Adding test peep1');
  
            expect(model.getPeeps()).toEqual(['Adding test peep1']);
        })
        it('return an empty array when the peeps are reset', () => {
            model.reset();
            expect(model.getPeeps()).toEqual([]);
        })
    })
})