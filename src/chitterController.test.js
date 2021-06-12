'use strict'

const ChitterController = require('./chitterController')

const examplePeepsArray = [
  {
    id: 3,
    body: 'my first peep :)',
    created_at: '2018-06-23T13:21:23.317Z',
    updated_at: '2018-06-23T13:21:23.317Z',
    user: {
      id: 1,
      handle: 'kay'
    },
    likes: [{
      user: {
        id: 1,
        handle: 'kay'
      }
    }]
  }
]

describe('ChitterController', () => {
  let chitterController
  const viewDouble = {
    displayPeeps: () => {}
  }
  const spyDisplayPeepsFn = jest.spyOn(viewDouble, 'displayPeeps')

  beforeEach(() => {
    chitterController = new ChitterController(viewDouble)
  })

  describe('.prototype.getPeeps()', () => {
    test('tells the view to display Peeps', () => {
      chitterController.getPeeps()

      expect(spyDisplayPeepsFn).toHaveBeenCalledWith(examplePeepsArray)
    })
  })
})
