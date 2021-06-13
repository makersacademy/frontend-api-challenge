describe('Quackboard', function () {
  let quackboard

  describe('.getQuacks', function () {
    it('returns 50 most recent quacks', function () {
      const quackboard = new QuackBoard()

      return quackboard.getQuacks().then(
        quacks => {
          expect(quacks.length).toBe(50)
        }
      )
    }
    )
  })
})
