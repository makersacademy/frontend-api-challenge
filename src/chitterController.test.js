'use strict'

const ChitterController = require('./chitterController')

const examplePeepsArray1 = [
  {
    id: 3,
    body: 'my first peep :)',
    created_at: '2018-06-23T13:21:23.317Z',
    updated_at: '2018-06-23T13:21:23.317Z',
    user: { id: 1, handle: 'kay' },
    likes: [{ user: { id: 1, handle: 'kay' } }]
  }
]

const examplePeepsArray2 = [
  {
    id: 485,
    body: 'still now?',
    created_at: '2021-06-02T09:47:00.147Z',
    updated_at: '2021-06-02T09:47:00.147Z',
    user: { id: 454, handle: 'wishing2' },
    likes: []
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
    describe('when fetch() resolves to examplePeepsArray1', () => {
      test('fetches data and tells the view to display Peeps', async () => {
        global.fetch = jest.fn(() =>
          Promise.resolve({
            json: () => Promise.resolve(examplePeepsArray1)
          })
        )

        await chitterController.getPeeps()

        expect(fetch).toHaveBeenCalledWith('https://chitter-backend-api-v2.herokuapp.com/peeps')
        expect(spyDisplayPeepsFn).toHaveBeenCalledWith(examplePeepsArray1)
      })
    })

    describe('when fetch() resolves to examplePeepsArray2', () => {
      test('fetches data and tells the view to display Peeps', async () => {
        global.fetch = jest.fn(() =>
          Promise.resolve({
            json: () => Promise.resolve(examplePeepsArray2)
          })
        )

        await chitterController.getPeeps()

        expect(fetch).toHaveBeenCalledWith('https://chitter-backend-api-v2.herokuapp.com/peeps')
        expect(spyDisplayPeepsFn).toHaveBeenCalledWith(examplePeepsArray2)
      })
    })
  })
})
