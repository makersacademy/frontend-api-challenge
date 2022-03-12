// const ChitterModel = require('./chitterModel')

describe('chittersModel', () => {
  it('returns an empty arrray by default', () => {
    const model = new chitterModel;
    expect(model.getPeeps()).toEqual([]);
  })

  it('can add a peep to app', () => {
    let model = new chitterModel;
    model.addPeep('My first peep!!');
    expect(model.getPeeps()).toEqual(['My first peep!!']);
  })

})