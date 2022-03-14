const ChitterModel = require('./chitterModel');


describe('ChitterModel functions', () => {
    it('returns and empty array, before any peeps added', () => {
        let model = new ChitterModel;

    expect(model.getPeeps()).toEqual([]);
    });

    it('it returns peeps, when added', () => {
        let model = new ChitterModel;
        model.addPeep('First Peep');
        model.addPeep('Second Peep');

    expect(model.getPeeps().length).toEqual(2);
    expect(model.getPeeps()).toEqual(['First Peep', 'Second Peep']);
    });
    
});
