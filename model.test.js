const Model = require("./model")

describe('Model', () => {
  it('returns added peeps', () => {
    const model = new Model;
    model.addPeep({id: 1536, body: 'Peep 1'});
    model.addPeep({id: 1234, body: 'Peep 2'});
    const result = model.getPeeps();
    expect(result[0].id).toBe(1536);
    expect(result[1].body).toBe('Peep 2');
  })
})