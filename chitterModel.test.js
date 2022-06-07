const ChitterModel = require('./chitterModel')
const ChitterApi = require("./chitterApi")

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

  // it('displays the session data', () => {
  //   const chitterModel = new ChitterModel
  //   const api = new ChitterApi();
  //   api.createUser('stevie205', '1234', userdata => {
  //     api.createSession(userdata, '1234', sessiondata)
  //     chitterModel.openSession(sessiondata)
  //   })
  //   expect(chitterModel.openSession).toEqual(sessiondata)
  // })
})

