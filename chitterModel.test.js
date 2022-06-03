const ChitterModel = require('./chitterModel')

describe('ChitterModel', () => {
  it('is initialised with an empty array', () => {
    const chitterModel = new ChitterModel
    expect(chitterModel.getChits()).toEqual([])
  })

  it('allows a user to add a chit to the chits array', () => {
    const chitterModel = new ChitterModel
    chitterModel.addChit('one')
    expect(chitterModel.getChits()).toEqual(['one'])
  })
})

