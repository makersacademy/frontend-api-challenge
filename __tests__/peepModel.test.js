const PeepModel = require('../src/models/peepModel')

describe("PeepModel", () => {
  it('initially returns an empty array', () => {
    const model = new PeepModel();

    expect(model.getPeeps()).toEqual([])
  })

  it('adds a new peep and return the list of peeps', () => {
    const model = new PeepModel();

    model.addPeep('This is a new peep');
    model.addPeep('This is another peep!');

    expect(model.getPeeps()).toEqual(['This is a new peep', 'This is another peep!']);
  })

  it('retreives api data and returns peeps', () => {
    const model = new PeepModel();
    const notes = ['This is a peep from API', 'Me too']

    model.setPeep(notes)

    expect(model.getPeeps()).toEqual(['This is a peep from API', 'Me too']);
  })
})