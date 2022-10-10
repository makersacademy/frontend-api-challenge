const PeepsModel = require('./peepsModel')

describe('PeepsModel', () => {
  it('add function returns an empty list if there are no peeps', () => {
    const model = new PeepsModel();
    expect(model.getPeeps()).toEqual([])
  })

  it('adds the peeps to the model and displays them', () => {
    const model = new PeepsModel();
    model.addPeep('Hello World');
    expect(model.getPeeps()).toEqual(['Hello World'])
  })
})