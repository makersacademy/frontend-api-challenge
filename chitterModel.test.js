const ChitterModel = require('./chittermodel');

describe("ChitterModel class", () => {
  it('returns empty array of notes when none have been added', () => {
    const model = new ChitterModel;
    expect(model.returnLoadedPeeps()).toEqual([]);
  })
})