const PeepModel = require("./peepModel");


describe('Peep Model', () => {
  it('returns added peeps', () => {
    const peepModel = new PeepModel;
    peepModel.addPeep({id: 1536, body: 'Peep 1'});
    peepModel.addPeep({id: 1234, body: 'Peep 2'});
    const result = peepModel.getPeeps();
    expect(result[0].id).toBe(1536);
    expect(result[1].body).toBe('Peep 2');
  })
})