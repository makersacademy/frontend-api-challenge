const ChitterModel = require("./chitterModel")

describe ('ChitterModel class', () => {
  it(' returns an empty array of peeps when initialize', () => {
    const model = new ChitterModel;

    expect(model.getPeeps()).toEqual([]);
  });

  it(' adds a peep to the list', () => {
    const model = new ChitterModel;

    model.addPeep('This is a test peep');

    expect(model.getPeeps()).toEqual(['This is a test peep']);
  });
})