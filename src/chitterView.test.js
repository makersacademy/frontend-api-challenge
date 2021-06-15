'use strict'

const ChitterView = require('./chitterView')

describe('ChitterView', () => {
  let chitterView
  let rootDiv

  beforeEach(() => {
    rootDiv = document.createElement('div')
    chitterView = new ChitterView(rootDiv)
  })

  const peepsArray1 = [
    {
      id: 3,
      body: 'my first peep :)',
      created_at: '2018-06-23T13:21:23.317Z',
      updated_at: '2018-06-23T13:21:23.317Z',
      user: { id: 1, handle: 'kay' },
      likes: [{ user: { id: 1, handle: 'kay' } }]
    },
    {
      id: 485,
      body: 'still now?',
      created_at: '2021-06-02T09:47:00.147Z',
      updated_at: '2021-06-02T09:47:00.147Z',
      user: { id: 454, handle: 'wishing2' },
      likes: []
    }
  ]

  const peepsArray2 = [
    {
      id: 481,
      body: 'hiya tokens',
      created_at: '2021-05-30T14:17:35.240Z',
      updated_at: '2021-05-30T14:17:35.240Z',
      user: {
        id: 458,
        handle: 'anna.cav'
      },
      likes: []
    },
    {
      id: 480,
      body: 'was it needed',
      created_at: '2021-05-27T12:11:19.967Z',
      updated_at: '2021-05-27T12:11:19.967Z',
      user: {
        id: 442,
        handle: 'acava'
      },
      likes: []
    },
    {
      id: 479,
      body: 'Userid',
      created_at: '2021-05-27T11:30:09.963Z',
      updated_at: '2021-05-27T11:30:09.963Z',
      user: {
        id: 442,
        handle: 'acava'
      },
      likes: []
    },
    {
      id: 478,
      body: 'Promises promises\n',
      created_at: '2021-05-27T11:27:51.867Z',
      updated_at: '2021-05-27T11:27:51.867Z',
      user: {
        id: 442,
        handle: 'acava'
      },
      likes: []
    }
  ]

  describe('.prototype.displayPeeps()', () => {
    describe('when given peepsArray1', () => {
      test('displays given peeps on the page', () => {
        chitterView.displayPeeps(peepsArray1)
        expect(rootDiv.innerHTML).toBe('<ul><li><a href="#3"><p>kay</p><p>my first peep :)</p><p>2018-06-23T13:21:23.317Z</p><p>1</p></a></li><li><a href="#485"><p>wishing2</p><p>still now?</p><p>2021-06-02T09:47:00.147Z</p><p>0</p></a></li></ul>')
      })
    })

    describe('when given peepsArray2', () => {
      test('displays given peeps on the page', () => {
        chitterView.displayPeeps(peepsArray2)
        expect(rootDiv.innerHTML).toBe('<ul><li><a href="#481"><p>anna.cav</p><p>hiya tokens</p><p>2021-05-30T14:17:35.240Z</p><p>0</p></a></li><li><a href="#480"><p>acava</p><p>was it needed</p><p>2021-05-27T12:11:19.967Z</p><p>0</p></a></li><li><a href="#479"><p>acava</p><p>Userid</p><p>2021-05-27T11:30:09.963Z</p><p>0</p></a></li><li><a href="#478"><p>acava</p><p>Promises promises\n</p><p>2021-05-27T11:27:51.867Z</p><p>0</p></a></li></ul>')
      })
    })

    it('clears the rootDiv before displaying peeps', () => {
      chitterView.displayPeeps(peepsArray1)
      chitterView.displayPeeps([])
      expect(rootDiv.innerHTML).toBe('<ul></ul>')
    })
  })

  const examplePeep1 = {
    id: 479,
    body: 'Userid',
    created_at: '2021-05-27T11:30:09.963Z',
    updated_at: '2021-05-27T11:30:09.963Z',
    user: {
      id: 442,
      handle: 'acava'
    },
    likes: []
  }

  const examplePeep2 = {
    id: 485,
    body: 'still now?',
    created_at: '2021-06-02T09:47:00.147Z',
    updated_at: '2021-06-02T09:47:00.147Z',
    user: {
      id: 454,
      handle: 'wishing2'
    },
    likes: []
  }

  describe('.prototype.displayPeep()', () => {
    describe('when given examplePeep1', () => {
      test('displays given peep on page', () => {
        chitterView.displayPeep(examplePeep1)
        expect(rootDiv.innerHTML).toBe('<li><a href="#479"><p>acava</p><p>Userid</p><p>2021-05-27T11:30:09.963Z</p><p>0</p></a></li>')
      })

      test('clears the rootDiv before displaying peep', () => {
        chitterView.displayPeep(examplePeep1)
        chitterView.displayPeep(examplePeep1)
        expect(rootDiv.innerHTML).toBe('<li><a href="#479"><p>acava</p><p>Userid</p><p>2021-05-27T11:30:09.963Z</p><p>0</p></a></li>')
      })
    })

    describe('when given examplePeep2', () => {
      test('displays given peep on page', () => {
        chitterView.displayPeep(examplePeep2)
        expect(rootDiv.innerHTML).toBe('<li><a href="#485"><p>wishing2</p><p>still now?</p><p>2021-06-02T09:47:00.147Z</p><p>0</p></a></li>')
      })

      test('clears the rootDiv before displaying peep', () => {
        chitterView.displayPeep(examplePeep2)
        chitterView.displayPeep(examplePeep2)
        expect(rootDiv.innerHTML).toBe('<li><a href="#485"><p>wishing2</p><p>still now?</p><p>2021-06-02T09:47:00.147Z</p><p>0</p></a></li>')
      })
    })
  })
})
